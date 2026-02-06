import React, { useState } from 'react';
import { X, QrCode, CreditCard, Clock, ShieldCheck, Zap, ChevronLeft, Home, Check, LayoutGrid, MousePointerClick } from 'lucide-react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';

interface KioskPageProps {
  onBack: () => void;
}

// Internal component for the interactive kiosk screen
const KioskSimulator = () => {
  const [screen, setScreen] = useState<'home' | 'phone' | 'list' | 'detail' | 'success'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('010');

  const handleKeypad = (key: string) => {
    if (key === 'back') {
      setPhoneNumber(prev => prev.slice(0, -1));
    } else if (key === 'reset') {
      setPhoneNumber('010');
    } else if (phoneNumber.length < 11) {
      setPhoneNumber(prev => prev + key);
    }
  };

  const formattedPhone = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

  // Common Header for inner screens
  const ScreenHeader = ({ title, showNav = true, showBack = true }: { title?: string, showNav?: boolean, showBack?: boolean }) => (
    <div className="flex justify-between items-center mb-6 h-8">
       {showNav ? (
         showBack ? (
           <button 
             onClick={() => setScreen(prev => {
               if (prev === 'phone') return 'home';
               if (prev === 'list') return 'phone';
               if (prev === 'detail') return 'list';
               return 'phone';
             })}
             className="flex items-center gap-1 text-xs text-gray-400 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
           >
             <ChevronLeft size={12} /> 이전으로
           </button>
         ) : <div className="w-[88px]" /> /* Spacer to maintain center alignment */
       ) : <div className="w-[88px]" />}

       {title && <div className="text-sm font-bold text-white whitespace-nowrap">{title}</div>}
       
       {showNav ? (
         <button 
           onClick={() => {
             setScreen('phone');
             setPhoneNumber('010');
           }}
           className="flex items-center gap-1 text-xs text-gray-400 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
         >
           <Home size={12} /> 처음으로
         </button>
       ) : <div className="w-[88px]" />}
    </div>
  );

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col relative overflow-hidden select-none">
      {/* Kiosk Status Bar */}
      <div className="bg-slate-800 px-6 py-2 flex justify-between items-center text-[10px] text-gray-400">
         <span>ClubManager v2.4</span>
         <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
      </div>

      <div className="flex-1 p-6 flex flex-col relative">
        
        {/* SCREEN: HOME (Hidden/Legacy Menu) */}
        {screen === 'home' && (
          <div className="flex-1 flex flex-col animate-in fade-in zoom-in duration-300">
             <div className="bg-blue-600 rounded-2xl p-6 text-center mb-8 shadow-lg shadow-blue-900/20">
                <h2 className="text-2xl font-bold text-white mb-1">ClubManager CC</h2>
                <p className="text-blue-200 text-sm">무인 체크인 시스템</p>
             </div>
             
             <div className="space-y-4 flex-1 flex flex-col justify-center">
                <button 
                  onClick={() => setScreen('phone')}
                  className="bg-white hover:bg-gray-50 transition-colors p-8 rounded-2xl flex flex-col items-center gap-4 group shadow-lg"
                >
                   <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <QrCode className="w-8 h-8 text-blue-600" />
                   </div>
                   <div className="text-center">
                      <div className="text-slate-900 font-bold text-xl mb-1">체크인</div>
                      <div className="text-slate-500 text-sm">예약 문자/알림톡 번호 입력</div>
                   </div>
                </button>

                <button className="bg-white hover:bg-gray-50 transition-colors p-8 rounded-2xl flex flex-col items-center gap-4 group shadow-lg">
                   <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CreditCard className="w-8 h-8 text-slate-600" />
                   </div>
                   <div className="text-center">
                      <div className="text-slate-900 font-bold text-xl mb-1">현장 결제 / 정산</div>
                      <div className="text-slate-500 text-sm">카드 및 간편 결제</div>
                   </div>
                </button>
             </div>
          </div>
        )}

        {/* SCREEN: PHONE INPUT */}
        {screen === 'phone' && (
          <div className="flex-1 flex flex-col animate-in slide-in-from-right duration-300">
             <ScreenHeader showBack={false} />
             
             <div className="flex-1 flex flex-col items-center">
                <div className="mb-8">
                   <div className="w-12 h-12 bg-turf/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <LayoutGrid className="text-turf w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white text-center">예약 조회를 위해<br/>정보를 입력해주세요</h3>
                </div>

                {/* Tabs */}
                <div className="flex bg-slate-800 p-1 rounded-xl w-full mb-6">
                   <div className="flex-1 py-2 text-center text-sm font-bold bg-slate-700 text-white rounded-lg shadow-sm">전화번호</div>
                   <div className="flex-1 py-2 text-center text-sm font-medium text-gray-500">이름</div>
                </div>

                {/* Input Display */}
                <div className="w-full text-center border-b-2 border-turf pb-2 mb-8">
                   <span className="text-3xl font-bold text-white tracking-widest">{phoneNumber}</span>
                   <span className="animate-pulse text-turf ml-1">|</span>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-[280px] mb-6">
                   {[1,2,3,4,5,6,7,8,9].map(num => (
                      <button 
                        key={num} 
                        onClick={() => handleKeypad(num.toString())}
                        className="h-12 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xl active:scale-95 transition-transform"
                      >
                        {num}
                      </button>
                   ))}
                   <button onClick={() => handleKeypad('reset')} className="h-12 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 font-medium text-sm">초기화</button>
                   <button onClick={() => handleKeypad('0')} className="h-12 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xl">0</button>
                   <button onClick={() => handleKeypad('back')} className="h-12 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 flex items-center justify-center">
                      <ChevronLeft className="w-6 h-6" />
                   </button>
                </div>

                <button 
                   onClick={() => setScreen('list')}
                   className="w-full bg-turf hover:bg-turf-dark text-midnight font-bold py-4 rounded-xl mt-auto transition-colors"
                >
                   예약 조회
                </button>
             </div>
          </div>
        )}

        {/* SCREEN: LIST */}
        {screen === 'list' && (
           <div className="flex-1 flex flex-col animate-in slide-in-from-right duration-300">
              <ScreenHeader title="고객님의 예약을 선택해주세요" />
              
              <div className="space-y-3 flex-1 overflow-y-auto">
                 {[1, 2, 3].map((i) => (
                    <button 
                      key={i}
                      onClick={() => setScreen('detail')}
                      className="w-full bg-slate-800 hover:bg-slate-700 border border-white/5 p-4 rounded-xl flex items-center justify-between group transition-all"
                    >
                       <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${i === 1 ? 'border-turf' : 'border-gray-600'}`}>
                             {i === 1 && <div className="w-2 h-2 bg-turf rounded-full" />}
                          </div>
                          <div className="text-left">
                             <div className="text-white font-bold text-lg">홍*동 {i}</div>
                             <div className="text-gray-400 text-xs">예약번호: 782{i}</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-turf font-bold text-lg">06:35</div>
                          <div className="text-gray-500 text-xs">OUT 코스</div>
                       </div>
                    </button>
                 ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                 <p className="text-gray-500 text-xs mb-4">예약이 보이지 않으시나요? <span className="underline cursor-pointer">직원 호출</span></p>
                 <button 
                   onClick={() => setScreen('detail')}
                   className="w-full bg-slate-700 hover:bg-slate-600 text-gray-300 font-bold py-4 rounded-xl transition-colors"
                 >
                    선택 완료
                 </button>
              </div>
           </div>
        )}

        {/* SCREEN: DETAIL */}
        {screen === 'detail' && (
           <div className="flex-1 flex flex-col animate-in slide-in-from-right duration-300">
              <ScreenHeader title="본인의 정보를 선택해주세요" />

              {/* Summary Header */}
              <div className="grid grid-cols-3 gap-2 mb-6 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                 <div className="text-center border-r border-white/10">
                    <div className="text-xs text-gray-500">코스</div>
                    <div className="font-bold text-white">OUT</div>
                 </div>
                 <div className="text-center border-r border-white/10">
                    <div className="text-xs text-gray-500">타임</div>
                    <div className="font-bold text-turf">06:35</div>
                 </div>
                 <div className="text-center">
                    <div className="text-xs text-gray-500">인원</div>
                    <div className="font-bold text-white">3명</div>
                 </div>
              </div>
              
              <div className="bg-slate-800 rounded-t-xl p-3 flex items-center gap-2 border-b border-white/10">
                 <Check size={16} className="text-turf" />
                 <span className="text-sm font-bold text-white">전체 선택</span>
              </div>
              
              <div className="flex-1 bg-slate-800 rounded-b-xl overflow-hidden mb-6">
                 {/* Active Item */}
                 <div className="bg-white p-4 border-l-4 border-turf">
                    <div className="flex justify-between items-start mb-2">
                       <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center">
                             <Check size={12} className="text-white" />
                          </div>
                          <span className="text-slate-900 font-bold text-lg">홍*동</span>
                       </div>
                       <span className="text-slate-900 font-bold text-lg">220,000원</span>
                    </div>
                    <div className="pl-7 space-y-1">
                       <div className="flex justify-between text-xs text-slate-500">
                          <span>그린피</span>
                          <span>180,000원</span>
                       </div>
                       <div className="flex justify-between text-xs text-slate-500">
                          <span>카트비</span>
                          <span>40,000원</span>
                       </div>
                    </div>
                 </div>

                 {/* Inactive Items */}
                 {['김*수', '이*민'].map((name, i) => (
                    <div key={i} className="p-4 border-b border-white/5 last:border-0 opacity-50">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full border border-gray-500" />
                              <span className="text-white font-medium">{name}</span>
                           </div>
                           <span className="text-white font-medium">0원</span>
                        </div>
                    </div>
                 ))}
              </div>

              <button 
                 onClick={() => setScreen('success')}
                 className="w-full bg-turf hover:bg-turf-dark text-midnight font-bold py-4 rounded-xl mt-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                 체크인 하기
              </button>
           </div>
        )}

        {/* SCREEN: SUCCESS */}
        {screen === 'success' && (
           <div className="flex-1 flex flex-col animate-in zoom-in duration-300 text-center">
              <div className="w-24 h-24 bg-turf rounded-full flex items-center justify-center mb-6 animate-bounce">
                 <Check className="w-12 h-12 text-midnight" strokeWidth={4} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">홍*동님 체크인 완료</h2>
              <p className="text-gray-400 mb-8">락커번호 104번이 배정되었습니다.</p>
              
              <div className="bg-slate-800 p-4 rounded-xl w-full mb-8 border border-white/10">
                 <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">티오프</span>
                    <span className="text-white font-bold">06:35</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-gray-400">카트번호</span>
                    <span className="text-turf font-bold">08호</span>
                 </div>
              </div>

              <button 
                 onClick={() => {
                    setScreen('phone');
                    setPhoneNumber('010');
                 }}
                 className="w-full bg-white hover:bg-gray-100 text-midnight font-bold py-4 rounded-xl transition-colors"
              >
                 다음 사람 체크인하기
              </button>
           </div>
        )}

      </div>
    </div>
  );
};

const KioskPage: React.FC<KioskPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col">
       {/* Header */}
       <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
             <span className="font-display font-bold text-lg">무인 키오스크 데모</span>
          </div>
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <span>닫기</span>
            <X className="w-5 h-5" />
          </button>
       </div>

       <div className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Features */}
          <div className="space-y-8 order-2 lg:order-1">
             <FadeIn>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                   기다림 없는 <br/> <span className="text-turf">체크인 혁명</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep">
                   도착하자마자 30초 만에 락커를 배정받으세요. <br/>
                   프론트 데스크의 긴 줄은 이제 과거의 이야기입니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                      <Clock className="w-6 h-6 text-turf mb-2" />
                      <div className="font-bold text-white mb-1">시간 절약</div>
                      <div className="text-sm text-gray-400">평균 체크인 시간 90% 단축</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                      <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                      <div className="font-bold text-white mb-1">실시간 연동</div>
                      <div className="text-sm text-gray-400">락커/카트 배정 즉시 동기화</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                      <ShieldCheck className="w-6 h-6 text-blue-400 mb-2" />
                      <div className="font-bold text-white mb-1">보안 인증</div>
                      <div className="text-sm text-gray-400">안전한 본인 확인 시스템</div>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                      <CreditCard className="w-6 h-6 text-purple-400 mb-2" />
                      <div className="font-bold text-white mb-1">셀프 결제</div>
                      <div className="text-sm text-gray-400">빠른 삼성페이, 애플페이 결제지원</div>
                   </div>
                </div>
             </FadeIn>
          </div>

          {/* Right Side: Simulator */}
          <div className="order-1 lg:order-2 flex justify-center">
             <FadeIn direction="up" delay={200} className="relative w-full max-w-md aspect-[9/16] max-h-[800px] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                
                {/* Interactive Badge */}
                <div className="absolute top-14 right-6 z-40 pointer-events-none animate-bounce">
                   <div className="bg-turf/90 backdrop-blur-sm text-midnight text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white/20">
                      <MousePointerClick size={14} className="text-white" />
                      버튼을 눌러보세요
                   </div>
                </div>

                {/* Simulator Container */}
                <KioskSimulator />
                
                {/* Device Frame Details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
             </FadeIn>
          </div>

       </div>
    </div>
  );
};

export default KioskPage;