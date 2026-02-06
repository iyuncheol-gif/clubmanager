import React from 'react';
import { LayoutGrid, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-turf to-turf-dark p-2 rounded-lg">
                <LayoutGrid className="w-5 h-5 text-midnight" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Club<span className="text-turf">Manager</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 break-keep">
              차세대 기술로 골프장에 힘을 실어줍니다. 운영을 간소화하고, 자동화하며, 자신 있게 성장하세요.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">제품</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-turf transition-colors">기능</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">하드웨어</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">요금</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">데모 요청</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">리소스</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-turf transition-colors">지원</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">API 문서</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">시스템 상태</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">법적 고지</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-turf transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">이용 약관</a></li>
              <li><a href="#" className="hover:text-turf transition-colors">쿠키 정책</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2026 ClubManager Inc. 판권 소유.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>골프를 향한 ❤️로 만들었습니다</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;