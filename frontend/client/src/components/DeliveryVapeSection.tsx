/**
 * DeliveryVapeSection - 배달(푸드트럭) 및 전자담배(AUREX) 섹션
 * 최신 트렌드: 비대칭 레이아웃 + 이미지 오버레이
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Wind, ArrowRight, Check } from "lucide-react";

const FOOD_TRUCK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/food-truck-clean-FBgnRkECPrdrHHLbRi9y2n.webp";
const AUREX_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/aurex-logo_ae3bbb8b.png";

export default function DeliveryVapeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 tracking-tight leading-tight">
            부가 서비스
          </h2>
          <p className="text-gray-400 mt-3 max-w-md text-sm">
            게이밍 외에도 다양한 프리미엄 서비스를 제공합니다.
          </p>
        </motion.div>

        {/* Food Truck Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-0 mb-6 border border-gray-200 overflow-hidden group"
        >
          <div className="relative h-72 md:h-auto overflow-hidden">
            <img src={FOOD_TRUCK} alt="푸드트럭 배달" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase">
              Food Truck
            </div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Delivery</p>
                <h3 className="text-xl font-black text-black">푸드트럭 컨셉 배달</h3>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              HIDDEN PC CAFE만의 푸드트럭 컨셉 매장 운영! 신선한 프리미엄 분식을 매장에서 직접 조리하여 제공합니다.
            </p>
            <ul className="space-y-2.5 mb-6">
              {["푸드트럭 컨셉의 매장 내 조리", "떡볶이, 튀김, 순대 등 프리미엄 분식", "빠른 배달 서비스 제공", "합리적인 가격"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <div className="w-4 h-4 bg-red-600/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-red-600" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:text-red-700 transition-colors group/link">
              메뉴 자세히 보기
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* AUREX Vape Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden group"
        >
          <div className="p-8 md:p-10 flex flex-col justify-center bg-white order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-800 flex items-center justify-center">
                <Wind className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">E-Cigarette</p>
                <h3 className="text-xl font-black text-black">AUREX 전자담배</h3>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              프리미엄 전자담배 브랜드 AUREX를 HIDDEN PC CAFE에서 만나보세요. 고급스러운 디자인과 뛰어난 성능, 다양한 플레이버를 제공합니다.
            </p>
            <ul className="space-y-2.5 mb-6">
              {["프리미엄 AUREX 브랜드 정품", "다양한 플레이버 라인업", "매장 내 직접 구매 가능", "전문 상담 가능"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <div className="w-4 h-4 bg-emerald-800/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-emerald-700" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800 transition-colors group/link">
              제품 자세히 보기
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="relative h-72 md:h-auto overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 flex items-center justify-center order-1 md:order-2">
            <img src={AUREX_LOGO} alt="AUREX" className="w-3/4 max-w-xs object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3))]" />
            <div className="absolute top-4 right-4 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase z-10">
              Premium
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
