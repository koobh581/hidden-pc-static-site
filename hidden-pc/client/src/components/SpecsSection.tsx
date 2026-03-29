/**
 * SpecsSection - PC 사양 비교
 * 일반석 RTX 5060 / 프리미엄석 RTX 5090
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Cpu, MemoryStick, Armchair, ArrowRight } from "lucide-react";

const RTX5060 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/rtx5060-setup-HVsZRtqzxaYr8m265XW5kX.webp";
const RTX5090 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/rtx5090-premium-AJDoc3aywcfhNpMcB69T8r.webp";

const specs = [
  {
    tier: "STANDARD",
    title: "일반석",
    gpu: "RTX 5060",
    image: RTX5060,
    highlight: false,
    features: [
      { icon: Cpu, label: "GPU", value: "NVIDIA GeForce RTX 5060" },
      { icon: Monitor, label: "모니터", value: '27" 듀얼 커브드 QHD 165Hz' },
      { icon: MemoryStick, label: "RAM", value: "32GB DDR5" },
      { icon: Armchair, label: "체어", value: "프리미엄 게이밍 체어" },
    ],
  },
  {
    tier: "PREMIUM",
    title: "프리미엄석",
    gpu: "RTX 5090",
    image: RTX5090,
    highlight: true,
    features: [
      { icon: Cpu, label: "GPU", value: "NVIDIA GeForce RTX 5090" },
      { icon: Monitor, label: "모니터", value: '32" 트리플 울트라와이드 4K 240Hz' },
      { icon: MemoryStick, label: "RAM", value: "32GB DDR5" },
      { icon: Armchair, label: "체어", value: "VIP 프리미엄 리클라이너" },
    ],
  },
];

export default function SpecsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specs" ref={ref} className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase">Gaming Specs</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 tracking-tight leading-tight">
            최강 PC 사양
          </h2>
          <p className="text-gray-400 mt-3 max-w-md text-sm">
            일반석부터 프리미엄석까지, 모든 좌석에서 최상의 게이밍 경험을 제공합니다.
          </p>
        </motion.div>

        {/* Specs Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.tier}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative overflow-hidden ${
                spec.highlight ? "ring-2 ring-red-600" : "border border-gray-200"
              }`}
            >
              {spec.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 z-10" />
              )}

              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {spec.highlight && (
                  <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase">
                    Recommended
                  </div>
                )}
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] text-white/50 font-semibold tracking-[0.2em] uppercase">{spec.tier}</p>
                  <h3 className="text-2xl font-black text-white mt-1">{spec.title}</h3>
                  <p className={`text-lg font-bold mt-0.5 ${spec.highlight ? "text-red-400" : "text-white/70"}`}>{spec.gpu}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 bg-white">
                <div className="space-y-4">
                  {spec.features.map((feat) => (
                    <div key={feat.label} className="flex items-center gap-4">
                      <div className={`w-9 h-9 flex items-center justify-center shrink-0 ${
                        spec.highlight ? "bg-red-600" : "bg-gray-900"
                      }`}>
                        <feat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{feat.label}</p>
                        <p className="text-sm font-semibold text-black">{feat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 mt-6 py-3 font-bold text-sm tracking-wider transition-all duration-300 group/btn ${
                    spec.highlight
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-900 text-white hover:bg-black"
                  }`}
                >
                  상담 신청하기
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
