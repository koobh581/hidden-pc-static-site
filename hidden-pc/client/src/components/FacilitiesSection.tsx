/**
 * FacilitiesSection - 시설 안내 섹션
 * 네온 느와르: 비대칭 2컬럼 + 이미지 쇼케이스 + 네온 글로우
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Cpu, Headphones, Armchair, Wifi, Volume2 } from "lucide-react";

const GAMING_SETUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/gaming-setup-realistic-dvo3E5ACswuoCnCCmjfC9u.webp";
const INTERIOR1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/premium-space-bright-mCkjT9LytYzK54PMvQwjMN.webp";

const specs = [
  { icon: Monitor, label: "32인치 QHD 165Hz", desc: "고주사율 커브드 모니터" },
  { icon: Cpu, label: "RTX 4080 SUPER", desc: "최신 하이엔드 GPU" },
  { icon: Headphones, label: "프리미엄 헤드셋", desc: "7.1채널 서라운드 사운드" },
  { icon: Armchair, label: "시디즈 게이밍 체어", desc: "인체공학 프리미엄 의자" },
  { icon: Wifi, label: "기가비트 인터넷", desc: "초고속 전용 회선" },
  { icon: Volume2, label: "개인 사운드 존", desc: "독립 오디오 환경" },
];

export default function FacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="relative py-24 lg:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgba(15,5,30,0.5)] to-background" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-pink-400 mb-4">
            Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            하이엔드 게이밍
            <br />
            <span className="gradient-text">최고의 환경</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden neon-border-purple">
              <img
                src={GAMING_SETUP}
                alt="히든 피씨방 게이밍 셋업"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,15,0.6)] to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 glass-card rounded-xl px-5 py-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-xs text-purple-400 font-semibold">최신 사양</div>
              <div className="text-lg font-bold text-white">RTX 4080+</div>
            </motion.div>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              타협 없는 게이밍 사양
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              히든 피씨방은 모든 좌석에 최신 하이엔드 장비를 갖추고 있습니다.
              어떤 게임이든 최상의 퍼포먼스로 즐길 수 있는 환경을 제공합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  className="flex items-start gap-3 p-4 rounded-xl glass-card glass-card-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600/15 to-pink-600/15 flex items-center justify-center shrink-0 border border-purple-500/20">
                    <spec.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{spec.label}</div>
                    <div className="text-xs text-gray-500">{spec.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wide interior image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden neon-border-purple"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src={INTERIOR1}
            alt="히든 피씨방 내부 전경"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,15,0.9)] via-[rgba(5,5,15,0.25)] to-[rgba(5,5,15,0.15)]" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <div className="text-xs text-purple-400 font-semibold tracking-wider uppercase mb-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">Premium Interior</div>
            <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">넓고 쾌적한 프리미엄 공간</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
