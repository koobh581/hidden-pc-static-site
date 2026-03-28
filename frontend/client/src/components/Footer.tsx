/**
 * Footer - 하단 푸터
 * 네온 느와르: 다크 배경 + 미니멀 정보 + 네온 악센트
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663453599650/UizotXspeWC3Pd35AYLYR8/logo-transparent_d324da76.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[rgba(5,3,12,1)]" />

      <div className="container relative z-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="HIDDEN PC"
              className="h-8 w-auto mb-4 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]"

            />
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              게임과 미식의 프리미엄 공간,
              <br />
              히든 피씨방에서 새로운 경험을 시작하세요.
            </p>
            <p className="text-xs text-gray-600">
              Operated by M.O.F Partners
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2.5">
              {[
                { label: "브랜드 소개", href: "#about" },
                { label: "시설 안내", href: "#facilities" },
                { label: "먹거리", href: "#food" },
                { label: "인테리어", href: "#interior" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Franchise */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">창업 안내</h4>
            <ul className="space-y-2.5">
              {[
                { label: "창업 프로세스", href: "#franchise" },
                { label: "창업 혜택", href: "#franchise" },
                { label: "무료 상담 신청", href: "#contact" },
                { label: "자주 묻는 질문", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">연락처</h4>
            <div className="space-y-3 text-sm text-gray-500">
              <p>
                <span className="text-gray-400">전화:</span> 1866-1508
              </p>
              <p>
                <span className="text-gray-400">이메일:</span> mofpartners@gmail.com
              </p>
              <p>
                <span className="text-gray-400">주소:</span> 인천광역시 중구 서해대로 476, 2층
              </p>
              <p>
                <span className="text-gray-400">상담시간:</span> 평일 10:00~18:00
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="neon-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} HIDDEN PC. All rights reserved. Operated by M.O.F Partners.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              이용약관
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
