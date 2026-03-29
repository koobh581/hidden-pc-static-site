/**
 * HeroSection - 최신 트렌드 풀스크린 히어로
 * 시네마틱 패럴랙스 + 임팩트 타이포그래피
 */
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/hero-hidden-pc-v3_52e6c36e.png";
const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/hpc-logo-signboard_641e5b03.png";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_BG;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax + Scale */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <img
            src={LOGO}
            alt="HIDDEN PC CAFE"
            className="h-14 md:h-20 mx-auto object-contain"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-red-500 font-bold text-sm md:text-base tracking-[0.4em] uppercase mb-6">
            Grand Opening
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight">
            숨겨진 게임 성지
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">HIDDEN PC</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-xl md:text-2xl font-semibold text-white/80 mt-6 tracking-wide">
            숨겨진 게임 성지 <span className="text-red-400 font-bold">OPEN</span>
          </p>
          <p className="text-sm md:text-base text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            RTX 5060 / 5090 듀얼 모니터 · RAM 32GB · 프리미엄 게이밍 체어
            <br />
            1인석부터 업계 최초 6인 팀룸까지 완비
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#contact"
            className="group px-10 py-4 bg-red-600 text-white font-bold text-base tracking-wider hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
          >
            지금 바로 방문하라
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#specs"
            className="px-8 py-4 border border-white/30 text-white font-semibold text-base tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            PC 사양 보기
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { num: "RTX 5090", label: "프리미엄석" },
            { num: "32GB", label: "RAM 기본" },
            { num: "6인석", label: "업계 최초" },
            { num: "24H", label: "연중무휴" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl md:text-2xl font-black text-white">{stat.num}</p>
              <p className="text-[11px] text-white/40 mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#specs" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
