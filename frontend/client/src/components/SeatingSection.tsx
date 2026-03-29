/**
 * SeatingSection - 좌석 구성 안내
 * 1인석, 커플석, 팀룸 3~6인석 (업계 최초 6인석)
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Users, Crown, ArrowRight } from "lucide-react";

const SOLO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/solo-gaming-booth-kWFFiLSyAp6sHAAz5J2Jhv.webp";
const COUPLE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/couple-booth-TcrD4EmtQj2nx99mKJ7xJr.webp";
const TEAM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/team-room-hidden-pc-kTCzWQNu2GprbYuUzX8i4Z.webp";

const seats = [
  {
    icon: Gamepad2,
    title: "1인석",
    desc: "집중 게이밍을 위한 프라이빗 부스. 개인 파티션과 LED 조명으로 몰입감을 극대화합니다.",
    image: SOLO,
    capacity: "1인",
    features: ["개인 파티션 완비", "LED 무드 조명", "USB 충전 포트"],
  },
  {
    icon: Users,
    title: "커플석",
    desc: "둘이 함께 즐기는 프라이빗 공간. 나란히 앉아 게임을 즐길 수 있는 넓은 부스입니다.",
    image: COUPLE,
    capacity: "2인",
    features: ["넓은 듀얼 부스", "프라이빗 파티션", "공유 테이블"],
  },
  {
    icon: Crown,
    title: "팀룸 (3~6인)",
    desc: "업계 최초 6인석 완비! 3인부터 6인까지 단체 게이밍에 최적화된 독립 공간입니다.",
    image: TEAM,
    capacity: "3~6인",
    highlight: true,
    features: ["독립 공간 제공", "대형 공유 모니터", "업계 최초 6인석"],
  },
];

export default function SeatingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="seating" ref={ref} className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase">Seating</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 tracking-tight leading-tight">
            프리미엄 좌석 구성
          </h2>
          <p className="text-gray-400 mt-3 max-w-md text-sm">
            1인석부터 업계 최초 6인 팀룸까지, 모든 상황에 맞는 좌석을 제공합니다.
          </p>
        </motion.div>

        {/* Seat Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {seats.map((seat, i) => (
            <motion.div
              key={seat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group overflow-hidden bg-white ${
                seat.highlight ? "ring-2 ring-red-600" : "border border-gray-200"
              }`}
            >
              {seat.highlight && <div className="h-1 bg-red-600" />}

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={seat.image}
                  alt={seat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {seat.highlight && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
                    업계 최초
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-red-600 flex items-center justify-center">
                    <seat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{seat.title}</h3>
                    <p className="text-[10px] text-white/60 font-semibold tracking-wider">{seat.capacity}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{seat.desc}</p>
                <ul className="space-y-2 mb-5">
                  {seat.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-red-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-red-600 font-bold text-sm hover:text-red-700 transition-colors group/link"
                >
                  자세히 보기
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
