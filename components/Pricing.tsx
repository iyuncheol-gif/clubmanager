import React from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
       {/* Background Decor */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turf/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">간편하고 투명한 요금제</h2>
            <p className="text-gray-400">성장에 맞춰 확장하세요. 숨겨진 구축 비용은 없습니다.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <FadeIn delay={0} className="bg-slate-850 p-8 rounded-3xl border border-white/5 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">스타터</h3>
            <p className="text-gray-400 text-sm mb-6">소규모 클럽을 위한 필수 도구.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₩250,000</span>
              <span className="text-gray-500">/월</span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              {['티시트 관리', '기본 CRM', 'POS 라이트', '이메일 지원'].map(f => (
                <li key={f} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-turf" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full" href="#contact">시작하기</Button>
          </FadeIn>

          {/* Pro */}
          <FadeIn delay={100} className="bg-gradient-to-b from-slate-850 to-midnight p-8 rounded-3xl border border-turf/50 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-turf/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-turf text-midnight text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              인기
            </div>
            <h3 className="text-xl font-bold text-white mb-2">프로</h3>
            <p className="text-gray-400 text-sm mb-6">바쁜 골프장을 위한 완전 자동화.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₩650,000</span>
              <span className="text-gray-500">/월</span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              {['스타터의 모든 기능', '고급 CRM 및 분석', '전체 POS 및 재고 관리', '회원용 모바일 앱', '우선 지원'].map(f => (
                <li key={f} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-turf" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="primary" className="w-full" href="#contact">무료 체험 시작</Button>
          </FadeIn>

          {/* Enterprise */}
          <FadeIn delay={200} className="bg-slate-850 p-8 rounded-3xl border border-white/5 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">엔터프라이즈</h3>
            <p className="text-gray-400 text-sm mb-6">다중 코스 그룹을 위한 맞춤 솔루션.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">별도 문의</span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              {['다지점 관리', 'API 액세스', '전담 매니저 배정', '커스텀 연동', '서비스 수준 협약(SLA)'].map(f => (
                <li key={f} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-turf" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full" href="#contact">영업팀 문의</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Pricing;