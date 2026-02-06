import React from 'react';
import { CalendarDays, Monitor, Tablet, CreditCard, Hotel, ArrowUpRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';

interface FeaturesProps {
  onShowKiosk?: () => void;
  onShowCartControl?: () => void;
  onShowPayment?: () => void;
  onShowGolftel?: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onShowKiosk, onShowCartControl, onShowPayment, onShowGolftel }) => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-turf font-semibold tracking-wide uppercase text-sm mb-3">올인원 플랫폼</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              연결된 생태계
            </h3>
            <p className="text-gray-400 text-lg break-keep">
              골프장 운영의 모든 접점을 매끄럽게 통합합니다.
            </p>
          </FadeIn>
        </div>

        {/* 3x2 Bento Grid - 3 Columns, implicit rows based on content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Smart Reservation (Large - Spans 2 cols, 2 rows equiv height) */}
          <FadeIn delay={0} className="md:col-span-2 md:row-span-2 rounded-3xl p-8 bg-slate-850 border border-white/5 hover:border-turf/50 transition-all duration-300 group relative overflow-hidden min-h-[400px] flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-96 h-96 bg-turf/5 rounded-full blur-[80px] group-hover:bg-turf/10 transition-all duration-500" />
             
             <div className="relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-turf/10 flex items-center justify-center mb-6 text-turf group-hover:scale-110 transition-transform duration-300">
                 <CalendarDays className="w-7 h-7" />
               </div>
               <h4 className="text-3xl font-display font-bold text-white mb-4">스마트 예약 시스템</h4>
               <p className="text-gray-400 max-w-md text-lg leading-relaxed break-keep">
                 웹, 앱, 프론트 데스크 간 실시간 동기화. AI 수요 예측과 다이내믹 프라이싱으로 티시트를 최적화하세요.
               </p>
               
               <div className="mt-8 flex gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">웹 예약</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">모바일 앱</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">에이전트 포털</span>
               </div>
             </div>

             {/* Mock UI Visual for Reservation */}
             <div className="relative z-10 mt-8 bg-midnight/80 backdrop-blur border border-white/10 rounded-xl p-4 w-full translate-y-4 group-hover:translate-y-2 transition-transform">
                 <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-white font-semibold">티시트 - 10월 24일 (토)</div>
                    <div className="h-2 w-2 rounded-full bg-turf animate-pulse" />
                 </div>
                 <div className="space-y-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer">
                            <span className="text-sm text-gray-300">08:00 AM</span>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-blue-500 border border-midnight" />
                                <div className="w-6 h-6 rounded-full bg-indigo-500 border border-midnight" />
                                <div className="w-6 h-6 rounded-full bg-purple-500 border border-midnight" />
                                <div className="w-6 h-6 rounded-full bg-gray-600 border border-midnight flex items-center justify-center text-[10px]">+1</div>
                            </div>
                            <span className="text-xs text-turf bg-turf/10 px-2 py-1 rounded">확정</span>
                        </div>
                    ))}
                 </div>
             </div>
          </FadeIn>

          {/* Card 2: Unmanned Kiosk (Interactive) */}
          <FadeIn 
            delay={100} 
            className="md:col-span-1 rounded-3xl p-8 bg-slate-850 border border-white/5 hover:border-turf/30 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
            onClick={onShowKiosk}
          >
             <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
               <Monitor className="w-6 h-6" />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 group-hover:text-turf transition-colors break-keep">무인 키오스크 체크인</h4>
             <p className="text-gray-400 text-sm leading-relaxed break-keep">
               대기 시간 제로. 셀프 체크인, 스코어카드 출력, 락커 배정까지 한 번에.
             </p>
             <div className="mt-4 flex items-center text-turf text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                더 알아보기 <ArrowUpRight className="w-4 h-4 ml-1" />
             </div>
          </FadeIn>

          {/* Card 3: Real-time Score & Cart Control */}
          <FadeIn 
            delay={200} 
            className="md:col-span-1 rounded-3xl p-8 bg-slate-850 border border-white/5 hover:border-turf/30 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
            onClick={onShowCartControl}
          >
             <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400">
               <Tablet className="w-6 h-6" />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 group-hover:text-turf transition-colors break-keep">실시간 스코어 & 카트 관제</h4>
             <p className="text-gray-400 text-sm leading-relaxed break-keep">
               카트용 GPS 태블릿 뷰. 실시간 리더보드, 지오펜싱, 경기 진행 속도 모니터링.
             </p>
             <div className="mt-4 flex items-center text-turf text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                더 알아보기 <ArrowUpRight className="w-4 h-4 ml-1" />
             </div>
          </FadeIn>

          {/* Card 4: Integrated Payment */}
          <FadeIn 
             delay={300} 
             className="md:col-span-1 rounded-3xl p-8 bg-slate-850 border border-white/5 hover:border-turf/30 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
             onClick={onShowPayment}
          >
             <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400">
               <CreditCard className="w-6 h-6" />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 group-hover:text-turf transition-colors break-keep">통합 결제 시스템</h4>
             <p className="text-gray-400 text-sm leading-relaxed break-keep">
               그린피, F&B, 프로샵 결제 통합. 더치페이 및 회원 계정 연동.
             </p>
             <div className="mt-4 flex items-center text-turf text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                더 알아보기 <ArrowUpRight className="w-4 h-4 ml-1" />
             </div>
          </FadeIn>

          {/* Card 5: Golf-tel Management */}
          <FadeIn 
             delay={400} 
             className="md:col-span-1 rounded-3xl p-8 bg-slate-850 border border-white/5 hover:border-turf/30 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
             onClick={onShowGolftel}
          >
             <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
               <Hotel className="w-6 h-6" />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 group-hover:text-turf transition-colors break-keep">골프텔 관리</h4>
             <p className="text-gray-400 text-sm leading-relaxed break-keep">
               스테이 앤 플레이(Stay & Play) 패키지 관리. 리조트를 위한 통합 숙박 예약 엔진.
             </p>
             <div className="mt-4 flex items-center text-turf text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                더 알아보기 <ArrowUpRight className="w-4 h-4 ml-1" />
             </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default Features;