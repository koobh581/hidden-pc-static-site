/**
 * FranchiseSection - 창업 안내, 정부지원금, 광고 패널 수익
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Banknote, TrendingUp, Building2, ShieldCheck, ArrowRight, BarChart3, Monitor, CheckCircle } from "lucide-react";

const AD_PANEL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/ad-panel-interior-JiRWwWHCKqnz3ACfsa7zHj.webp";

const loanData = [
  { 
    type: "정부지원금 대출", 
    form: "개인 신용평가", 
    limit: "최대 1억 원", 
    rate: "연 3~4%", 
    period: "최대 10년", 
    institution: "정책금융기관",
    details: "중소기업진흥공단, 신용보증기금 등 정책금융기관에서 제공하는 저금리 창업 대출로 초기 자본금 부담 경감"
  },
  { 
    type: "1금융권 MOU 체결", 
    form: "개인 신용평가", 
    limit: "최대 1억 원", 
    rate: "연 4~5%", 
    period: "1년 단위 연장", 
    institution: "신한, 하나, 우리은행",
    details: "신한은행, 하나은행, 우리은행과의 MOU 체결로 PC방 창업자를 위한 우대 조건의 대출 지원"
  },
  { 
    type: "PC방 시설 담보대출", 
    form: "신용평가 및\nPC대수 한도 설정", 
    limit: "최대 5억 원", 
    rate: "연 6.75~9.8%", 
    period: "12~36개월", 
    institution: "제 2금융권",
    details: "PC 장비 및 인테리어 비용을 시설 담보로 하여 대출 가능"
  },
  { 
    type: "프랜차이즈 창업자금", 
    form: "개인 신용평가", 
    limit: "최대 7천만 원", 
    rate: "연 4.5%", 
    period: "최대 6년", 
    institution: "제 1금융권",
    details: "정부 지원 프랜차이즈 창업자금으로 낮은 금리와 긴 상환 기간 제공"
  },
  { 
    type: "부동산 담보대출", 
    form: "부동산 평가 후 대출", 
    limit: "시세의 80%", 
    rate: "연 3~4%", 
    period: "1~5년 거치", 
    institution: "제 1금융권",
    details: "보유 부동산을 담보로 창업 자금 조달 가능"
  },
];

export default function FranchiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="franchise" ref={ref} className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase">Franchise</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 tracking-tight leading-tight">
            창업 안내
          </h2>
          <p className="text-gray-400 mt-3 max-w-md text-sm">
            HIDDEN PC CAFE와 함께 성공적인 창업을 시작하세요.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Banknote, title: "정부지원금 대출", desc: "1금융권 MOU 체결로 안전하고 유리한 조건의 창업 대출 지원", tag: "MOU 체결" },
            { icon: TrendingUp, title: "광고 패널 수익", desc: "PC방 내부 광고 패널 설치로 월 100~300만원 추가 수익 창출", tag: "추가 수익" },
            { icon: Building2, title: "토탈 창업 지원", desc: "인테리어 설계부터 장비 공급, 운영 노하우까지 원스톱 지원", tag: "원스톱" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-7 bg-white border border-gray-200 hover:border-red-600/30 transition-all duration-300"
            >
              <div className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase mb-5">
                {item.tag}
              </div>
              <div className="w-10 h-10 bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <item.icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-black text-black mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Government Loan Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase">Government Support</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-black mb-2">
            1금융권 MOU 체결
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-2xl">
            1금융권과의 MOU 체결로 안전하게 대출 받을 수 있으며, 예비 창업자 상황에 맞게 대출을 추천해 안정적인 창업을 도와줍니다.
          </p>

          <div className="overflow-x-auto border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left font-bold text-[11px] tracking-wider uppercase">구분</th>
                  <th className="p-4 text-left font-bold text-[11px] tracking-wider uppercase">대출 형식</th>
                  <th className="p-4 text-left font-bold text-[11px] tracking-wider uppercase">대출 한도</th>
                  <th className="p-4 text-left font-bold text-[11px] tracking-wider uppercase">금리</th>
                  <th className="p-4 text-left font-bold text-[11px] tracking-wider uppercase hidden md:table-cell">기간</th>
                  <th className="p-4 text-left font-bold text-[11px] tracking-wider uppercase hidden lg:table-cell">금융기관</th>
                </tr>
              </thead>
              <tbody>
                {loanData.map((row, i) => (
                  <tr key={row.type} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-red-50/50 transition-colors`}>
                    <td className="p-4 font-bold text-black text-sm">{row.type}</td>
                    <td className="p-4 text-gray-500 text-sm whitespace-pre-line">{row.form}</td>
                    <td className="p-4 font-bold text-red-600 text-sm">{row.limit}</td>
                    <td className="p-4 font-semibold text-black text-sm">{row.rate}</td>
                    <td className="p-4 text-gray-500 text-sm hidden md:table-cell whitespace-pre-line">{row.period}</td>
                    <td className="p-4 text-gray-500 text-sm hidden lg:table-cell whitespace-pre-line">{row.institution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Loan Details */}
          <div className="grid md:grid-cols-2 gap-4">
            {loanData.map((loan, i) => (
              <motion.div
                key={loan.type}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="p-4 bg-white border border-gray-200 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-black text-sm mb-1">{loan.type}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{loan.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ad Panel Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden mb-16 group"
        >
          <div className="relative h-72 md:h-auto overflow-hidden">
            <img src={AD_PANEL} alt="광고 패널" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase">
              경쟁력
            </div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Revenue</p>
                <h3 className="text-xl font-black text-black">광고 패널 수익</h3>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              HIDDEN PC CAFE만의 경쟁력! PC방 내부에 설치된 광고 패널을 통해 게이밍 매출 외에 추가적인 광고 수익을 창출할 수 있습니다.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 border border-gray-100">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">월 수익</p>
                <p className="text-xl font-black text-red-600">100~300만원</p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">연간 수익</p>
                <p className="text-xl font-black text-red-600">최대 3,600만원</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100">
              <Monitor className="w-4 h-4 text-red-600 shrink-0" />
              <p className="text-xs text-red-700 font-semibold">
                2024년 옥외광고 시장 규모 4조 6,241억 원 — 매년 꾸준한 성장세
              </p>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-red-600 font-bold text-sm hover:text-red-700 transition-colors group/link">
              창업 상담 신청하기
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center bg-gray-900 p-12 md:p-16"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
            지금 바로 <span className="text-red-500">창업 상담</span>을 신청하세요
          </h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm">
            전문 상담사가 예비 창업자님의 상황에 맞는 최적의 창업 플랜을 제안해 드립니다
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-red-600 text-white font-bold tracking-wider hover:bg-red-700 transition-all duration-300 group/btn"
          >
            창업 상담 신청
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
