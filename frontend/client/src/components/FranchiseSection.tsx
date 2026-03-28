/**
 * FranchiseSection - 창업 안내 섹션
 * 네온 느와르: 프로세스 타임라인 + 혜택 카드 + CTA
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  FileText,
  Hammer,
  MonitorCheck,
  GraduationCap,
  Rocket,
  BadgeCheck,
  Handshake,
  PiggyBank,
  BarChart3,
  Wrench,
  BookOpen,
} from "lucide-react";

const FRANCHISE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/franchise-concept-WvPWMS9v4UnWamVeAjGQzZ.webp";

const steps = [
  { icon: Search, label: "상권 분석", desc: "전문 컨설턴트의 상권 분석 및 점포 개발" },
  { icon: FileText, label: "계약 체결", desc: "투명한 창업 비용 안내 및 계약" },
  { icon: Hammer, label: "인테리어 시공", desc: "히든 피씨방 시그니처 인테리어 시공" },
  { icon: MonitorCheck, label: "장비 설치", desc: "최신 하이엔드 PC 및 주변기기 설치" },
  { icon: GraduationCap, label: "운영 교육", desc: "매장 운영 노하우 및 시스템 교육" },
  { icon: Rocket, label: "그랜드 오픈", desc: "오픈 마케팅 지원 및 매장 오픈" },
];

const benefits = [
  { icon: BadgeCheck, title: "브랜드 파워", desc: "히든 피씨방의 프리미엄 브랜드 이미지와 인지도를 활용할 수 있습니다." },
  { icon: Handshake, title: "본사 전폭 지원", desc: "상권 분석부터 오픈까지 전 과정을 본사가 밀착 지원합니다." },
  { icon: PiggyBank, title: "합리적 창업 비용", desc: "대량 구매를 통한 장비 원가 절감으로 합리적인 창업이 가능합니다." },
  { icon: BarChart3, title: "높은 수익성", desc: "PC + F&B 복합 수익 모델로 안정적인 매출을 달성할 수 있습니다." },
  { icon: Wrench, title: "지속적 A/S", desc: "장비 유지보수 및 인테리어 A/S를 본사가 책임집니다." },
  { icon: BookOpen, title: "운영 매뉴얼", desc: "검증된 운영 매뉴얼과 지속적인 교육 프로그램을 제공합니다." },
];

export default function FranchiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="franchise" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgba(20,5,35,0.4)] to-background" />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
            Franchise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            히든 피씨방과 함께
            <br />
            <span className="gradient-text">성공 창업</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            M.O.F Partners의 전문 창업 컨설팅과 히든 피씨방의 검증된 비즈니스 모델로
            성공적인 PC방 창업을 시작하세요.
          </p>
        </motion.div>

        {/* Franchise Image + Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden neon-border-purple"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={FRANCHISE_IMG}
              alt="히든 피씨방 매장 외관"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,15,0.7)] to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-xs text-purple-400 font-semibold tracking-wider uppercase mb-1">
                M.O.F Partners
              </div>
              <div className="text-xl font-bold text-white">히든 피씨방 프랜차이즈</div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">창업 프로세스</h3>
            <p className="text-gray-400 text-sm mb-8">상담부터 오픈까지, 평균 4~6주 소요</p>

            <div className="space-y-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  {/* Step number + line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/60 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all duration-300">
                      <step.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[1px] h-3 bg-gradient-to-b from-purple-500/30 to-transparent mt-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-purple-400/60">STEP {i + 1}</span>
                      <span className="text-sm font-bold text-white">{step.label}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">창업 혜택</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-600/15 to-pink-600/15 flex items-center justify-center mb-3 border border-purple-500/20">
                  <benefit.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16 relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="relative bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-purple-900/40 border border-purple-500/20 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              지금 바로 창업 상담을 시작하세요
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              전문 컨설턴트가 맞춤형 창업 상담을 무료로 진행해 드립니다.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:scale-105"
            >
              무료 상담 신청하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
