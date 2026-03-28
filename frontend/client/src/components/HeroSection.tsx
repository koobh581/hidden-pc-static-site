/**
 * HeroSection - 풀스크린 히어로 섹션
 * 네온 느와르: 다크 배경 + 네온 글로우 타이포그래피 + 시네마틱 이미지
 * 투명 배경 로고 사용
 */
import { motion } from "framer-motion";
import { ChevronDown, Gamepad2, Utensils } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/hero-bg-XCbsXZdugkPcvAjUoFx8zJ.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/logo-transparent_d324da76.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="히든 피씨방 인테리어"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,3,12,0.65)] via-[rgba(5,3,12,0.35)] to-[rgba(5,3,12,0.8)]" />
        {/* Subtle purple/pink tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
      </div>

      {/* Animated neon lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo - transparent background */}
          <motion.div
            className="mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={LOGO_URL}
              alt="HIDDEN PC"
              className="mx-auto h-24 sm:h-32 md:h-40 lg:h-48 w-auto"
              style={{
                filter: "drop-shadow(0 0 30px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 60px rgba(219, 39, 119, 0.3))",
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-3 tracking-wider font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            게임과 미식의 프리미엄 공간
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            최고급 게이밍 환경과 맛있는 분식 메뉴가 만나는 곳,
            <br className="hidden sm:block" />
            히든 피씨방에서 새로운 PC방 경험을 시작하세요.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-gray-200">
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              <span>하이엔드 게이밍</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-gray-200">
              <Utensils className="w-4 h-4 text-pink-400" />
              <span>프리미엄 분식</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="#franchise"
              className="px-8 py-3.5 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:scale-105"
            >
              창업 안내 보기
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 text-base font-semibold text-gray-300 rounded-lg border border-gray-600 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:bg-white/5"
            >
              브랜드 알아보기
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-gray-500 hover:text-purple-400 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
