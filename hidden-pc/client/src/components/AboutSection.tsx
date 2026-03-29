/**
 * AboutSection - 브랜드 소개 섹션
 * 네온 느와르: 비대칭 레이아웃 + 글래스 카드 + 네온 악센트
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Star, TrendingUp } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/about-bg-fK3WW3y7f6EdEhgvH5z9it.webp";

const features = [
  {
    icon: Zap,
    title: "최신 하이엔드 사양",
    desc: "RTX 4080 이상 GPU, 고주사율 모니터 등 최고급 게이밍 장비를 갖추고 있습니다.",
    color: "text-purple-400",
    borderColor: "group-hover:border-purple-500/40",
  },
  {
    icon: Star,
    title: "프리미엄 분식 메뉴",
    desc: "엄선된 분식 메뉴와 음료를 합리적인 가격에 즐길 수 있는 F&B 서비스를 제공합니다.",
    color: "text-pink-400",
    borderColor: "group-hover:border-pink-500/40",
  },
  {
    icon: Shield,
    title: "쾌적한 프리미엄 공간",
    desc: "넓은 좌석 간격, 프리미엄 의자, 개인 파티션으로 최상의 게이밍 환경을 보장합니다.",
    color: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/40",
  },
  {
    icon: TrendingUp,
    title: "검증된 수익 모델",
    desc: "PC 이용료와 F&B 매출의 시너지로 안정적이고 높은 수익을 달성할 수 있습니다.",
    color: "text-amber-400",
    borderColor: "group-hover:border-amber-500/40",
  },
];

function AnimatedCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group glass-card glass-card-hover rounded-xl p-6 transition-all duration-500"
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/10 to-pink-600/10 flex items-center justify-center mb-4 border border-gray-800 ${feature.borderColor} transition-colors duration-300`}>
        <feature.icon className={`w-6 h-6 ${feature.color}`} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-15">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
            About Hidden PC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            게임과 미식이 만나는
            <br />
            <span className="gradient-text">프리미엄 공간</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            히든 피씨방은 M.O.F Partners가 운영하는 차세대 프리미엄 PC방 프랜차이즈입니다.
            최고급 게이밍 환경과 엄선된 분식 메뉴의 결합으로, 기존 PC방의 한계를 넘어선
            새로운 복합 엔터테인먼트 공간을 제안합니다.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimatedCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            { number: "150+", label: "좌석 규모" },
            { number: "RTX 4080", label: "GPU 사양" },
            { number: "30+", label: "분식 메뉴" },
            { number: "24/7", label: "연중무휴" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-6 glass-card rounded-xl">
              <div className="text-2xl lg:text-3xl font-extrabold gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
