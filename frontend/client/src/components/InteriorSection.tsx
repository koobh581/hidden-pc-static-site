/**
 * InteriorSection - 인테리어 갤러리 섹션
 * 네온 느와르: 이미지 갤러리 + 글래스 오버레이
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const INTERIOR1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/interior1_ecb21f4f.png";
const INTERIOR2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/interior2_25d0874c.png";
const FRANCHISE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/franchise-concept-WvPWMS9v4UnWamVeAjGQzZ.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/hero-bg-XCbsXZdugkPcvAjUoFx8zJ.webp";

const galleryItems = [
  { src: INTERIOR1, label: "프리미엄 게이밍 존", span: "sm:col-span-2 sm:row-span-2" },
  { src: INTERIOR2, label: "오픈 좌석 구역", span: "" },
  { src: FRANCHISE, label: "매장 외관", span: "" },
  { src: HERO_BG, label: "전체 인테리어 뷰", span: "sm:col-span-2" },
];

export default function InteriorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="interior" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgba(10,5,25,0.4)] to-background" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
            Interior Design
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            감각적인 공간
            <br />
            <span className="gradient-text">프리미엄 인테리어</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            다크 인더스트리얼 컨셉의 세련된 인테리어와 네온 조명이 어우러진
            히든 피씨방만의 독보적인 공간 디자인을 만나보세요.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              className={`relative group rounded-xl overflow-hidden ${item.span}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            >
              <div className="relative h-full">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,15,0.9)] via-[rgba(5,5,15,0.2)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                {/* Neon border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/40 rounded-xl transition-all duration-500" />
                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-purple-400 font-semibold tracking-wider uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hidden PC
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {item.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
