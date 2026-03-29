/**
 * FoodSection - 먹거리/분식 메뉴 섹션
 * 네온 느와르: 다크 푸드 포토그래피 + 메뉴 카드 + 네온 악센트
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Clock, ThumbsUp } from "lucide-react";

const FOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/food-menu-realistic-jWVdwSDdPqhPTH5Kg5cfBC.webp";

const menuCategories = [
  {
    name: "시그니처 분식",
    items: ["히든 떡볶이", "치즈 퐁듀 떡볶이", "로제 떡볶이", "매운 라볶이"],
    highlight: true,
  },
  {
    name: "사이드 메뉴",
    items: ["모짜렐라 핫도그", "바삭 치킨", "김밥 세트", "순대 모듬"],
    highlight: false,
  },
  {
    name: "라면 & 밥류",
    items: ["히든 스페셜 라면", "치즈 라면", "볶음밥", "컵밥 세트"],
    highlight: false,
  },
  {
    name: "음료 & 디저트",
    items: ["수제 에이드", "버블티", "아이스크림", "과일 스무디"],
    highlight: false,
  },
];

export default function FoodSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="food" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgba(30,5,15,0.3)] to-background" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-pink-400 mb-4">
            Food & Beverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            게임하면서 즐기는
            <br />
            <span className="gradient-text">프리미엄 분식</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            히든 피씨방만의 엄선된 분식 메뉴로 게이밍의 즐거움을 두 배로 만들어 드립니다.
            신선한 재료와 특별한 레시피로 준비한 메뉴를 만나보세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Food Image - 3 columns */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden neon-border-pink">
              <img
                src={FOOD_IMG}
                alt="히든 피씨방 분식 메뉴"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,15,0.7)] to-transparent" />
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Flame, text: "매일 신선한 재료", color: "text-orange-400" },
                { icon: Clock, text: "빠른 조리 시간", color: "text-cyan-400" },
                { icon: ThumbsUp, text: "고객 만족도 98%", color: "text-green-400" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-gray-300"
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Menu Categories - 2 columns */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {menuCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                className={`rounded-xl p-5 transition-all duration-300 ${
                  cat.highlight
                    ? "glass-card border-purple-500/30 neon-border-purple"
                    : "glass-card glass-card-hover"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <h3 className={`text-base font-bold ${cat.highlight ? "text-purple-300" : "text-white"}`}>
                    {cat.name}
                  </h3>
                  {cat.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      BEST
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <div key={item} className="text-sm text-gray-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-500/60 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.p
              className="text-xs text-gray-600 text-center pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              * 메뉴 및 가격은 매장별로 상이할 수 있습니다
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
