import React from 'react';
import { Play } from 'lucide-react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';

interface HeroProps {
  onShowWorkflow?: () => void;
  onShowFreeTrial?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowWorkflow, onShowFreeTrial }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-turf/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-turf animate-pulse"></span>
            <span className="text-xs font-medium text-turf tracking-wide uppercase">New: AI 기반 코스 분석</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-6">
            골프장의 모든 운영을 <br className="hidden md:block" />
            하나의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-turf to-blue-400">클라우드</span>에서 관리하세요
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed break-keep">
            예약부터 필드 관제, 체크인, 결제까지. ClubManager는 귀하에게 필요한 유일한 SaaS ERP입니다.
          </p>
        </FadeIn>

        <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" withArrow onClick={onShowFreeTrial}>
            무료 체험 시작
          </Button>
          {/* Changed logic: If onShowWorkflow is provided, use it. Otherwise behave as link (fallback) */}
          <Button 
            variant="outline" 
            size="lg" 
            className="group" 
            onClick={onShowWorkflow}
          >
            작동 방식 보기
          </Button>
        </FadeIn>
        
        {/* Trusted By Strip */}
        <FadeIn delay={500} className="mt-20 pt-10 border-t border-white/5 w-full">
          <p className="text-sm text-gray-500 mb-6 font-medium">전 세계 프리미엄 골프장이 신뢰하는 파트너</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold font-display text-white">PEBBLE<span className="font-light text-gray-400">CREEK</span></span>
            <span className="text-xl font-bold font-display text-white">AUGUSTA<span className="font-light text-gray-400">TECH</span></span>
            <span className="text-xl font-bold font-display text-white">PINE<span className="font-light text-gray-400">VALLEY</span></span>
            <span className="text-xl font-bold font-display text-white">CYPRESS<span className="font-light text-gray-400">POINT</span></span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;