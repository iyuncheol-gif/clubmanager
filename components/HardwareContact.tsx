import React, { FormEvent } from 'react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';
import { Monitor, Tablet, Smartphone, Wifi, Zap, CheckCircle2 } from 'lucide-react';

const HardwareContact: React.FC = () => {
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("문의가 성공적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.");
  };

  return (
    <div className="relative bg-midnight overflow-hidden">
      
      {/* Hardware Section */}
      <section id="hardware" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              매끄러운 하드웨어 생태계
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg break-keep">
              ClubManager SaaS와 완벽하게 동기화되는 전용 하드웨어. <br/>
              현대적인 코스를 위한 플러그 앤 플레이 신뢰성.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kiosk Card */}
            <FadeIn delay={0} className="group relative">
              <div className="absolute inset-0 bg-turf/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-slate-850 border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center text-center overflow-hidden hover:border-turf/30 transition-colors">
                
                {/* CSS Kiosk Mockup */}
                <div className="mb-8 relative w-32 h-48 bg-gray-800 rounded-xl border-4 border-gray-700 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute top-0 w-full h-1 bg-gray-600" />
                  <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center gap-2 p-2">
                    <div className="w-8 h-8 rounded-full bg-turf/20 flex items-center justify-center">
                       <CheckCircle2 size={16} className="text-turf" />
                    </div>
                    <div className="w-16 h-2 bg-white/10 rounded-full" />
                    <div className="w-12 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="absolute bottom-2 w-10 h-1 bg-gray-600 rounded-full" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">ClubManager 키오스크</h3>
                <p className="text-gray-400 text-sm mb-4 break-keep">셀프 체크인/아웃. 프론트 대기 시간을 제로로 만드세요.</p>
                <div className="mt-auto flex gap-2 text-xs text-turf bg-turf/10 px-3 py-1 rounded-full border border-turf/20">
                  <Zap size={12} /> 즉시 동기화
                </div>
              </div>
            </FadeIn>

            {/* Tablet Card */}
            <FadeIn delay={100} className="group relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-slate-850 border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center text-center overflow-hidden hover:border-blue-500/30 transition-colors">
                
                {/* CSS Tablet Mockup */}
                <div className="mb-8 relative w-48 h-32 bg-gray-800 rounded-xl border-4 border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-slate-900 p-2 grid grid-cols-2 gap-2">
                      <div className="bg-blue-500/20 rounded border border-blue-500/30" />
                      <div className="bg-white/5 rounded border border-white/5" />
                   </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">관제 태블릿</h3>
                <p className="text-gray-400 text-sm mb-4 break-keep">카트용 러기드 GPS 태블릿. 지오펜싱 및 진행 속도 모니터링.</p>
                <div className="mt-auto flex gap-2 text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                  <Wifi size={12} /> 5G 연결
                </div>
              </div>
            </FadeIn>

            {/* POS Card */}
            <FadeIn delay={200} className="group relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-slate-850 border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center text-center overflow-hidden hover:border-purple-500/30 transition-colors">
                
                {/* CSS POS Mockup */}
                <div className="mb-8 relative w-24 h-40 bg-gray-800 rounded-2xl border-2 border-gray-700 shadow-2xl flex flex-col overflow-hidden">
                   <div className="h-full bg-slate-900 p-2 flex flex-col gap-1">
                      <div className="w-full h-20 bg-white/5 rounded" />
                      <div className="grid grid-cols-3 gap-1">
                         {[1,2,3,4,5,6].map(i => <div key={i} className="aspect-square bg-white/10 rounded-[2px]" />)}
                      </div>
                   </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">직원용 핸드헬드 POS</h3>
                <p className="text-gray-400 text-sm mb-4 break-keep">그린 위나 레스토랑에서 주문을 받으세요. 즉시 결제 처리.</p>
                <div className="mt-auto flex gap-2 text-xs text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                  <Monitor size={12} /> 클라우드 POS
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-midnight to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-850/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative">
            
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-turf/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <FadeIn>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    오늘 당신의 골프장을 혁신하세요
                  </h2>
                  <p className="text-gray-400 break-keep">
                    전문가와의 맞춤형 데모를 예약하세요. <br />
                    ClubManager가 어떻게 매출을 20% 증대시키는지 확인하세요.
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={200}>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">이름</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-turf focus:ring-1 focus:ring-turf transition-all"
                        placeholder="홍길동"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="course" className="text-sm font-medium text-gray-300">골프장명</label>
                      <input 
                        type="text" 
                        id="course" 
                        required
                        className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-turf focus:ring-1 focus:ring-turf transition-all"
                        placeholder="파인 밸리 골프 클럽"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">이메일 주소</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-turf focus:ring-1 focus:ring-turf transition-all"
                        placeholder="hong@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">전화번호</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-turf focus:ring-1 focus:ring-turf transition-all"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-300">주요 관심사</label>
                    <select 
                      id="interest" 
                      className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-turf focus:ring-1 focus:ring-turf transition-all appearance-none"
                    >
                      <option className="bg-slate-900">SaaS 풀 패키지</option>
                      <option className="bg-slate-900">키오스크 & 하드웨어</option>
                      <option className="bg-slate-900">예약 앱 연동</option>
                      <option className="bg-slate-900">일반 문의</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <Button size="lg" className="w-full text-lg" type="submit">
                      맞춤형 데모 요청
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      의무 사항 없음. 개인정보는 안전하게 보호됩니다.
                    </p>
                  </div>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HardwareContact;