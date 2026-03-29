/**
 * ContactSection - 상담 폼 및 연락처
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const API_ENDPOINT = (import.meta as any).env?.VITE_CONTACT_API_URL || "https://hiddenpc.onrender.com/api/contact";

type FormState = {
  name: string;
  phone: string;
  email: string;
  region: string;
  type: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  region: "",
  type: "",
  message: "",
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    if (!agreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,

        region: formData.region,
        preferred_region: formData.region,
        inquiry_region: formData.region,

        type: formData.type,
        inquiry_type: formData.type,
        inquiryType: formData.type,

        message: formData.message,
        agreed,
      };

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok || !(data.ok ?? data.success ?? true)) {
        throw new Error(data.error || "상담 신청 전송에 실패했습니다.");
      }

      setSubmitted(true);
      setFormData(INITIAL_FORM);
      setAgreed(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : "서버 연결 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 tracking-tight leading-tight">
            상담 신청
          </h2>
          <p className="text-gray-400 mt-3 max-w-md text-sm">
            HIDDEN PC CAFE 창업 및 방문에 대해 궁금한 점을 문의하세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 border border-gray-200 p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-9 h-9 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-black mb-3">신청 완료!</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  창업 상담 신청이 정상적으로 접수되었습니다.
                  <br />
                  영업일 기준 1~2일 내에 전문 컨설턴트가 연락드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-red-600 text-white font-bold tracking-wider hover:bg-red-700 transition-colors"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">
                      이름
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">
                      연락처
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="010-0000-0000"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">
                      창업 희망 지역
                    </label>
                    <input
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      placeholder="예: 인천 중구, 서울 강남"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">
                    문의 유형
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black bg-transparent transition-colors"
                    required
                  >
                    <option value="">선택하세요</option>
                    <option value="신규 창업">신규 창업</option>
                    <option value="리모델링 창업">리모델링 창업</option>
                    <option value="인수 창업">인수 창업</option>
                    <option value="상담 우선">상담 우선</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">
                    문의 내용
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="궁금하신 사항을 자유롭게 작성해 주세요."
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent resize-none transition-colors"
                    required
                  />
                </div>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-red-600"
                    required
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 창업 상담 목적으로만 사용됩니다.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-red-600 text-white font-bold tracking-wider hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "전송 중..." : "무료 상담 신청하기"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gray-900 p-7 text-white">
              <h3 className="text-sm font-bold mb-6 tracking-wider uppercase text-gray-400">연락처</h3>
              <div className="space-y-5">
                <a href="tel:18661508" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-red-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">전화</p>
                    <p className="text-lg font-black text-white group-hover:text-red-400 transition-colors">1866-1508</p>
                  </div>
                </a>
                <a href="mailto:mofpartners@gmail.com" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-red-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">이메일</p>
                    <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors break-all">
                      mofpartners@gmail.com
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">주소</p>
                    <p className="text-sm font-semibold text-white">
                      인천광역시 중구
                      <br />
                      서해대로 476, 2층
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-red-600" />
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">상담 시간</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "평일", time: "09:00 ~ 18:00" },
                  { day: "토요일", time: "10:00 ~ 16:00" },
                  { day: "일요일 / 공휴일", time: "휴무" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-400">{item.day}</span>
                    <span className="text-sm font-bold text-black">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="tel:18661508" className="block bg-red-600 p-5 text-white hover:bg-red-700 transition-colors group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold tracking-wider uppercase opacity-70">빠른 상담</p>
                  <p className="text-xl font-black">1866-1508</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
