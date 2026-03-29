/**
 * Footer - 미니멀 푸터
 */
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/hpc-signboard_e3d5b3e5.png";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={LOGO_URL} alt="HIDDEN PC CAFE" className="h-7 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              프리미엄 PC 카페 프랜차이즈. RTX 5060/5090 사양과 1인석부터 업계 최초 6인 팀룸까지, 최상의 게이밍 경험을 제공합니다.
            </p>
            <p className="text-gray-600 text-xs mt-4">M.O.F Partners 운영</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-4">바로가기</h4>
            <ul className="space-y-2.5">
              {[
                { label: "PC 사양", href: "#specs" },
                { label: "좌석 안내", href: "#seating" },
                { label: "이벤트", href: "#events" },
                { label: "부가 서비스", href: "#services" },
                { label: "창업 안내", href: "#franchise" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-4">연락처</h4>
            <div className="space-y-3">
              <a href="tel:18661508" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-red-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                1866-1508
              </a>
              <a href="mailto:mofpartners@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-red-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                mofpartners@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                인천광역시 중구 서해대로 476, 2층
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} HIDDEN PC CAFE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">이용약관</a>
            <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
