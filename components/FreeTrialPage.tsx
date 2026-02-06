import React, { useState, FormEvent } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

interface FreeTrialPageProps {
  onBack: () => void;
}

const FreeTrialPage: React.FC<FreeTrialPageProps> = ({ onBack }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("무료 체험 신청이 완료되었습니다. 이메일을 확인해주세요.");
      onBack();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
            <span className="font-display font-bold text-lg">ClubManager 무료 체험</span>
         </div>
         <button 
           onClick={onBack}
           className="p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 text-sm text-gray-400 hover:text-white"
         >
           <span>닫기</span>
           <X className="w-5 h-5" />
         </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Value Prop */}
            <div className="space-y-10">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-turf/10 border border-turf/20 mb-6">
                  <span className="text-xs font-bold text-turf tracking-wide uppercase">14일 무료 체험</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  골프장 운영의 미래를 <br/>
                  <span className="text-turf">직접 경험해보세요</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed break-keep">
                  신용카드 등록 없이 모든 프로(Pro) 기능을 2주간 무료로 사용하실 수 있습니다. 
                  지금 바로 ClubManager의 강력한 기능을 확인하세요.
                </p>
              </FadeIn>

              <FadeIn delay={100}>
                <ul className="space-y-6">
                  {[
                    { title: "모든 기능 제한 없음", desc: "티시트, POS, CRM 등 모든 기능을 사용해볼 수 있습니다." },
                    { title: "설치 없는 클라우드", desc: "웹 브라우저만 있으면 어디서든 즉시 접속 가능합니다." },
                    { title: "데모 데이터 제공", desc: "초기 설정 없이도 샘플 데이터로 바로 테스트 가능합니다." },
                    { title: "전담 온보딩 지원", desc: "체험 기간 동안 전문가가 시스템 활용법을 안내해드립니다." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 bg-slate-800 p-2 rounded-lg border border-white/10 h-fit">
                        <CheckCircle2 className="w-5 h-5 text-turf" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={200} className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/40/40?random=${i+20}`} alt="User" className="w-10 h-10 rounded-full border-2 border-midnight" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong className="text-white">500+ 골프장</strong>이 신뢰하고 있습니다
                  </div>
                </div>
                <div className="flex gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Form */}
            <FadeIn delay={300} direction="left">
              <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-turf/5 rounded-full blur-[80px] pointer-events-none" />
                
                <h2 className="text-2xl font-bold text-white mb-2 relative z-10">무료 계정 생성</h2>
                <p className="text-gray-400 text-sm mb-8 relative z-10">1분 안에 시작할 수 있습니다. 결제 정보는 필요하지 않습니다.</p>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">이름</label>
                      <input type="text" required className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-turf focus:ring-1 focus:ring-turf transition-all outline-none" placeholder="홍길동" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">직책</label>
                      <input type="text" required className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-turf focus:ring-1 focus:ring-turf transition-all outline-none" placeholder="총지배인" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">이메일 (업무용)</label>
                    <input type="email" required className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-turf focus:ring-1 focus:ring-turf transition-all outline-none" placeholder="name@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">골프장 / 회사명</label>
                    <input type="text" required className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-turf focus:ring-1 focus:ring-turf transition-all outline-none" placeholder="ClubManager CC" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">휴대폰 번호</label>
                    <input type="tel" required className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-turf focus:ring-1 focus:ring-turf transition-all outline-none" placeholder="010-0000-0000" />
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-turf hover:bg-turf-dark text-midnight font-bold py-4 rounded-xl shadow-lg shadow-turf/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>처리 중...</>
                      ) : (
                        <>무료 체험 시작하기 <ArrowRight size={18} /></>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                      <ShieldCheck size={12} /> 개인정보는 안전하게 암호화되어 보호됩니다.
                    </p>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6 grayscale opacity-50">
                   <div className="font-bold text-white text-sm">ISO 27001 인증</div>
                   <div className="font-bold text-white text-sm">AWS 파트너</div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPage;