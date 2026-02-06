import React from 'react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';
import Counter from './ui/Counter';
import { X, Check, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onShowSuccessStory?: () => void;
  onShowSwitchToCloud?: () => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onShowSuccessStory, onShowSwitchToCloud }) => {
  return (
    <section id="solutions" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-turf/5 -skew-y-6 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            소프트웨어 관리는 그만두고, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turf to-blue-500">클럽 관리를 시작하세요.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto break-keep">
             레거시 시스템은 숨겨진 비용과 낡은 인터페이스로 발목을 잡습니다. 
             더 빠르고, 저렴하고, 똑똑한 운영을 위해 클라우드로 전환하세요.
          </p>
        </FadeIn>

        {/* Comparison Table */}
        <FadeIn delay={100} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
             
             {/* Legacy Column */}
             <div className="lg:col-span-4 bg-slate-800/50 rounded-2xl p-8 border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider text-center">기존 레거시 시스템</h3>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <X className="w-6 h-6 text-red-500 shrink-0" />
                      <div>
                         <div className="text-white font-semibold">높은 구축 비용</div>
                         <div className="text-sm text-gray-500 break-keep">비싼 로컬 서버 및 IT 팀 필요.</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <X className="w-6 h-6 text-red-500 shrink-0" />
                      <div>
                         <div className="text-white font-semibold">수동 업데이트</div>
                         <div className="text-sm text-gray-500 break-keep">패치를 위한 중단 시간. 보안 위험.</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <X className="w-6 h-6 text-red-500 shrink-0" />
                      <div>
                         <div className="text-white font-semibold">Windows 전용</div>
                         <div className="text-sm text-gray-500 break-keep">백오피스 데스크에 묶여있음.</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <X className="w-6 h-6 text-red-500 shrink-0" />
                      <div>
                         <div className="text-white font-semibold">파편화된 데이터</div>
                         <div className="text-sm text-gray-500 break-keep">POS와 티시트가 연동되지 않음.</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* VS Divider */}
             <div className="lg:col-span-1 flex justify-center py-4 lg:py-0">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-500 font-bold italic">VS</div>
             </div>

             {/* ClubManager Column */}
             <div className="lg:col-span-7 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 border border-turf/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden transform md:scale-105 z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-turf/10 rounded-full blur-[40px]" />
                <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-turf animate-pulse" />
                   ClubManager SaaS
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex items-start gap-4">
                      <div className="p-1 bg-turf/20 rounded-full">
                         <Check className="w-5 h-5 text-turf" />
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg">서버 비용 0원</div>
                         <div className="text-sm text-gray-400 break-keep">안전한 클라우드 구동. 인프라 비용 제로.</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-1 bg-turf/20 rounded-full">
                         <Check className="w-5 h-5 text-turf" />
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg">자동 업데이트</div>
                         <div className="text-sm text-gray-400 break-keep">항상 최신 버전. 새로운 기능 즉시 사용.</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-1 bg-turf/20 rounded-full">
                         <Check className="w-5 h-5 text-turf" />
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg">웹 / 모바일 접속</div>
                         <div className="text-sm text-gray-400 break-keep">집이나 필드 어디서든 코스 모니터링.</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-1 bg-turf/20 rounded-full">
                         <Check className="w-5 h-5 text-turf" />
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg">통합 데이터</div>
                         <div className="text-sm text-gray-400 break-keep">모든 운영에 대한 단일 데이터 소스.</div>
                      </div>
                   </div>
                </div>

                <div className="mt-10 text-center">
                   <Button size="lg" className="w-full md:w-auto" onClick={onShowSwitchToCloud}>클라우드로 전환</Button>
                </div>
             </div>

          </div>
        </FadeIn>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-white/5">
           <FadeIn delay={200} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                 <Counter end={30} suffix="%" />
              </div>
              <div className="text-turf font-medium mb-2">운영 비용 절감</div>
              <p className="text-xs text-gray-500">서버 유지보수 및 수동 관리 제거.</p>
           </FadeIn>
           <FadeIn delay={300} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                 <Counter end={20} suffix="%" />
              </div>
              <div className="text-turf font-medium mb-2">체크인 시간 단축</div>
              <p className="text-xs text-gray-500">키오스크 및 모바일 앱 연동.</p>
           </FadeIn>
           <FadeIn delay={400} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                 <Counter end={100} suffix="%" />
              </div>
              <div className="text-turf font-medium mb-2">데이터 정확도</div>
              <p className="text-xs text-gray-500">자동 동기화로 인적 오류 제거.</p>
           </FadeIn>
        </div>

        {/* Case Study Placeholder */}
        <FadeIn delay={500} className="mt-16 bg-gradient-to-r from-turf/20 to-blue-500/20 rounded-2xl p-1 border border-white/10">
           <div className="bg-midnight rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                 <div className="text-turf font-bold uppercase tracking-wider text-sm mb-2">성공 사례</div>
                 <h3 className="text-2xl font-bold text-white mb-4">군산 CC가 ClubManager로 운영을 최적화한 방법을 확인하세요.</h3>
                 <button 
                    onClick={onShowSuccessStory}
                    className="inline-flex items-center text-white hover:text-turf transition-colors font-semibold group"
                 >
                    스토리 읽기 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
              <div className="flex -space-x-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-midnight bg-gray-700 overflow-hidden">
                       <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-midnight bg-turf flex items-center justify-center text-midnight font-bold text-xs">
                    +500
                 </div>
              </div>
           </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Solutions;