/**
 * ContactSection - 상담 폼 및 연락처
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", inquiry_type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", inquiry_type: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
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
          {/* Contact Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 border border-gray-200 p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16">
                <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-black mb-2">상담 신청 완료!</h3>
                <p className="text-gray-400 text-sm">빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">이름</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="성명을 입력하세요"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">전화번호</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="010-0000-0000"
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">이메일</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">문의 유형</label>
                  <select
                    name="type" value={formData.type} onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black bg-transparent transition-colors"
                    required
                  >
                    <option value="">선택하세요</option>
                    <option value="franchise">창업 상담</option>
                    <option value="visit">매장 방문 문의</option>
                    <option value="event">이벤트 문의</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">문의 내용</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    placeholder="궁금한 점을 자유롭게 입력하세요"
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-red-600 focus:outline-none font-medium text-black placeholder:text-gray-300 bg-transparent resize-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 text-white font-bold tracking-wider hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  상담 신청하기
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details */}
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
                    <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors break-all">mofpartners@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">주소</p>
                    <p className="text-sm font-semibold text-white">인천광역시 중구<br />서해대로 476, 2층</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
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

            {/* Quick Call CTA */}
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
