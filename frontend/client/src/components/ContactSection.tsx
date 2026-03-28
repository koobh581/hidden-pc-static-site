/**
 * ContactSection - 창업 상담 문의 섹션
 * 기존 DB/이메일 서버와 연결되는 실사용 폼
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

type FormState = {
  name: string;
  phone: string;
  email: string;
  region: string;
  inquiryType: string;
  message: string;
  agreed: boolean;
};

const API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "https://hiddenpc.onrender.com/api/contact";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    region: "",
    inquiryType: "new",
    message: "",
    agreed: false,
  });

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      region: "",
      inquiryType: "new",
      message: "",
      agreed: false,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("이름과 연락처를 입력해주세요.");
      return;
    }

    if (!form.agreed) {
      toast.error("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          region: form.region.trim(),
          inquiry_type: form.inquiryType,
          message: form.message.trim(),
          agreed: form.agreed,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "접수 처리 중 오류가 발생했습니다.");
      }

      setSubmitted(true);
      resetForm();
      toast.success("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "서버 연결 중 오류가 발생했습니다.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgba(25,5,40,0.3)] to-background" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            창업 상담
            <br />
            <span className="gradient-text">무료 문의</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            히든 피씨방 창업에 관심이 있으시다면 아래 양식을 작성해 주세요.
            전문 컨설턴트가 맞춤형 창업 상담을 진행해 드립니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="glass-card rounded-2xl p-10 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">신청 완료!</h3>
                <p className="text-gray-400 mb-6">
                  창업 상담 신청이 정상적으로 접수되었습니다.
                  <br />
                  영업일 기준 1~2일 내에 전문 컨설턴트가 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  추가 문의하기
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">이름 *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(10,10,25,0.8)] border border-gray-700/50 text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">연락처 *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(10,10,25,0.8)] border border-gray-700/50 text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">이메일</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(10,10,25,0.8)] border border-gray-700/50 text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">창업 희망 지역</label>
                    <input
                      type="text"
                      value={form.region}
                      onChange={(e) => updateField("region", e.target.value)}
                      placeholder="예: 인천, 서울 강남"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(10,10,25,0.8)] border border-gray-700/50 text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">창업 유형</label>
                  <select
                    value={form.inquiryType}
                    onChange={(e) => updateField("inquiryType", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(10,10,25,0.8)] border border-gray-700/50 text-white focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-sm appearance-none"
                  >
                    <option value="new">신규 창업</option>
                    <option value="remodel">리모델링 창업</option>
                    <option value="acquire">인수 창업</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">문의 내용</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="궁금하신 사항을 자유롭게 작성해 주세요."
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(10,10,25,0.8)] border border-gray-700/50 text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-sm resize-none"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={form.agreed}
                    onChange={(e) => updateField("agreed", e.target.checked)}
                    className="mt-1 accent-purple-500"
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-500">
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 창업 상담 목적으로만 사용됩니다.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "접수 중입니다..." : "무료 상담 신청하기"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              {
                icon: Phone,
                title: "전화 상담",
                primary: "1866-1508",
                secondary: "평일 10:00 ~ 18:00",
                color: "text-purple-400",
                bgFrom: "from-purple-600/15",
              },
              {
                icon: Mail,
                title: "이메일 문의",
                primary: "mofpartners@gmail.com",
                secondary: "24시간 접수 가능",
                color: "text-pink-400",
                bgFrom: "from-pink-600/15",
              },
              {
                icon: MapPin,
                title: "본사 위치",
                primary: "인천광역시 중구 서해대로 476, 2층",
                secondary: "M.O.F Partners",
                color: "text-cyan-400",
                bgFrom: "from-cyan-600/15",
              },
              {
                icon: Clock,
                title: "상담 가능 시간",
                primary: "평일 10:00 ~ 18:00",
                secondary: "점심시간 12:00 ~ 13:00",
                color: "text-amber-400",
                bgFrom: "from-amber-600/15",
              },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                className="glass-card glass-card-hover rounded-xl p-5 flex items-start gap-4 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${info.bgFrom} to-transparent border border-purple-500/15 flex items-center justify-center shrink-0`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{info.title}</div>
                  <div className="text-base font-semibold text-white">{info.primary}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{info.secondary}</div>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="tel:18661508"
              className="block w-full text-center px-6 py-5 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <Phone className="w-5 h-5 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-semibold text-white">지금 바로 전화 상담</div>
              <div className="text-xs text-gray-500 mt-1">1866-1508</div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
