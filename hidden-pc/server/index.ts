import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "pg";
import sgMail from "@sendgrid/mail";

const { Pool } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes("localhost") ? false : { rejectUnauthorized: false },
    })
  : null;

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "1mb" }));

  app.get("/health", async (_req, res) => {
    try {
      const dbTime = pool ? (await pool.query("SELECT NOW() AS now")).rows[0].now : null;
      res.json({ ok: true, dbTime, mailEnabled: Boolean(process.env.SENDGRID_API_KEY) });
    } catch (error) {
      console.error(error);
      res.status(500).json({ ok: false, error: "health check failed" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const body = req.body || {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const region = typeof body.region === "string" ? body.region.trim() : "";
    const inquiryType = typeof body.inquiry_type === "string" ? body.inquiry_type.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const agreed = body.agreed === true;

    if (!name) return res.status(400).json({ ok: false, error: "이름을 입력해주세요." });
    if (!phone) return res.status(400).json({ ok: false, error: "전화번호를 입력해주세요." });
    if (!inquiryType) return res.status(400).json({ ok: false, error: "문의 유형을 선택해주세요." });
    if (!message) return res.status(400).json({ ok: false, error: "문의 내용을 입력해주세요." });
    if (!agreed) return res.status(400).json({ ok: false, error: "개인정보 처리 동의가 필요합니다." });

    const sourceIp = req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() || req.socket.remoteAddress || "";
    const userAgent = req.headers["user-agent"]?.toString() || "";

    try {
      if (!pool) {
        return res.status(500).json({ ok: false, error: "DATABASE_URL is not configured" });
      }

      const insert = await pool.query(
        `INSERT INTO contact_inquiries (
          name, phone, email, region, inquiry_type, message, agreed, source_ip, user_agent
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
        RETURNING id, created_at`,
        [name, phone, email || null, region || null, inquiryType || null, message || null, agreed, sourceIp, userAgent]
      );

      if (process.env.SENDGRID_API_KEY && process.env.MAIL_FROM && process.env.MAIL_TO) {
        const createdAt = new Date(insert.rows[0].created_at).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
        await sgMail.send({
          to: process.env.MAIL_TO,
          from: process.env.MAIL_FROM,
          replyTo: email || undefined,
          subject: `[HIDDEN PC CAFE 상담문의] ${name} / ${phone}`,
          html: `
            <h2>새 상담 문의가 접수되었습니다.</h2>
            <p><strong>접수일시:</strong> ${createdAt}</p>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>전화번호:</strong> ${phone}</p>
            <p><strong>이메일:</strong> ${email || "(미입력)"}</p>
            <p><strong>문의 유형:</strong> ${inquiryType}</p>
            <p><strong>문의 내용:</strong><br>${message.replace(/
/g, "<br>")}</p>
          `,
        });
      }

      res.status(201).json({ ok: true, id: insert.rows[0].id, message: "상담 신청이 정상적으로 접수되었습니다." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ ok: false, error: "접수 처리 중 오류가 발생했습니다." });
    }
  });

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
