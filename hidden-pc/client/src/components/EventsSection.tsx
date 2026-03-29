/**
 * EventsSection - 오픈 이벤트 & 프로모션
 * 첫 방문 1시간 무료, SNS 인증 추가 1시간, 챌린지 이벤트
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Camera, Trophy, ArrowRight, Sparkles } from "lucide-react";

const events = [
  {
    icon: Gift,
    num: "01",
    title: "첫 방문 1시간 무료",
    desc: "HIDDEN PC CAFE에 처음 방문하시는 모든 고객님께 1시간 무료 이용권을 드립니다. 최고급 장비를 부담 없이 체험해보세요.",
    tag: "신규 고객",
  },
  {
    icon: Camera,
    num: "02",
    title: "SNS 인증 시 +1시간",
    desc: "인스타그램, 블로그 등 SNS에 매장 방문 인증샷을 올려주시면 추가 1시간을 무료로 제공합니다.",
    tag: "SNS 이벤트",
  },
  {
    icon: Trophy,
    num: "03",
    title: "챌린지 이벤트",
    desc: "매주 진행되는 게임 챌린지에 참여하세요! 상위 랭커에게는 무료 이용권과 특별 상품을 드립니다.",
    tag: "매주 진행",
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="events" ref={ref} className="py-28 md:py-36 bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase">Events</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 tracking-tight leading-tight">
            오픈 이벤트
          </h2>
          <p className="text-gray-500 mt-3 max-w-md text-sm">
            HIDDEN PC CAFE 오픈을 기념하여 특별한 이벤트를 준비했습니다.
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] p-8 hover:border-red-500/30 transition-all duration-500"
            >
              {/* Number */}
              <span className="text-[80px] font-black text-white/[0.03] absolute top-4 right-6 leading-none select-none">
                {event.num}
              </span>

              {/* Tag */}
              <div className="inline-block bg-red-600 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase mb-6">
                {event.tag}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <event.icon className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-white mb-3">{event.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{event.desc}</p>

              <a href="#contact" className="inline-flex items-center gap-2 text-red-500 font-bold text-sm hover:text-red-400 transition-colors group/link">
                참여하기
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] px-8 py-4">
            <Sparkles className="w-4 h-4 text-red-500" />
            <p className="text-white/80 font-semibold text-sm">
              최대 <span className="text-red-500 font-black text-lg">2시간 무료</span> 이용 가능
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
