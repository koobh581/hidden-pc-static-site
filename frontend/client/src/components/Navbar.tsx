/**
 * Navbar - 최신 트렌드 미니멀 네비게이션
 * 히어로 위에서 투명 → 스크롤 시 화이트 배경
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/hidden-pc-logo-optimized_17491e11.png";

const navLinks = [
  { label: "홈", href: "#hero" },
  { label: "PC 사양", href: "#specs" },
  { label: "좌석 안내", href: "#seating" },
  { label: "이벤트", href: "#events" },
  { label: "서비스", href: "#services" },
  { label: "창업", href: "#franchise" },
  { label: "문의", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="shrink-0">
          <img
            src={LOGO_URL}
            alt="HIDDEN PC CAFE"
            className={`h-8 w-auto transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-90 drop-shadow-lg"}`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-semibold tracking-wide transition-colors relative group ${
                scrolled ? "text-gray-500 hover:text-black" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:18661508"
            className={`text-sm font-bold tracking-wide transition-colors ${
              scrolled ? "text-red-600" : "text-red-400"
            }`}
          >
            1866-1508
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
          >
            상담 신청
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-black" : "text-white"}`}
          aria-label="메뉴"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40"
          >
            <div className="flex flex-col items-center pt-12 gap-6 pb-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-lg font-bold text-black tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:18661508"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-red-600 font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                1866-1508
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-10 py-3 bg-red-600 text-white font-bold tracking-wider"
              >
                상담 신청
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
