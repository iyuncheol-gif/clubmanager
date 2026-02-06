import React, { useState } from 'react';
import { X, CreditCard, Receipt, Split, CheckCircle2, Wallet, ArrowRight, User, MousePointerClick } from 'lucide-react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';

interface PaymentPageProps {
  onBack: () => void;
}

const PaymentSimulator = () => {
  const [mode, setMode] = useState<'bill' | 'split' | 'success'>('bill');
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const billItems = [
    { name: '그린피 (18홀)', price: 180000 },
    { name: '카트비 (1/4)', price: 25000 },
    { name: '그늘집 (수박화채)', price: 8500 },
    { name: '그늘집 (아메리카노)', price: 3000 },
  ];
  
  const totalAmount = billItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col relative overflow-hidden select-none font-sans">
      {/* Phone Status Bar */}
      <div className="bg-slate-950 px-6 py-3 flex justify-between items-center text-[10px] text-gray-400 z-10">
         <span>17:30</span>
         <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-white/20 rounded-full"/>
            <div className="w-3 h-3 bg-white/20 rounded-full"/>
            <div className="w-4 h-3 bg-white/20 rounded-[2px]"/>
         </div>
      </div>

      <div className="flex-1 relative overflow-hidden flex flex-col">
        {mode !== 'success' && (
          <>
            {/* Header */}
            <div className="px-6 pt-4 pb-2">
               <div className="text-gray-400 text-sm mb-1">10월 24일 (토)</div>
               <h2 className="text-2xl font-bold text-white">결제하실 금액</h2>
            </div>

            {/* Bill Card */}
            <div className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-xl text-slate-900 relative z-10 animate-in slide-in-from-bottom-4 duration-500">
               <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4">
                  <div>
                     <div className="text-xs text-gray-500 mb-1">총 청구 금액</div>
                     <div className="text-3xl font-bold tracking-tight">
                        {mode === 'split' ? (totalAmount).toLocaleString() : (totalAmount * 4).toLocaleString()}
                        <span className="text-base font-normal text-gray-400 ml-1">원</span>
                     </div>
                  </div>
                  {mode === 'split' && (
                     <div className="bg-turf/10 text-turf-dark px-2 py-1 rounded text-xs font-bold">
                        1/N 적용됨
                     </div>
                  )}
               </div>

               <div className="space-y-3">
                  {billItems.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                       <span className="text-gray-600">{item.name}</span>
                       <span className="font-medium">{item.price.toLocaleString()}원</span>
                    </div>
                  ))}
               </div>

               {mode === 'bill' && (
                  <div className="mt-6 pt-4 border-t border-gray-100 border-dashed">
                     <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => setMode('split')}>
                        <div className="flex items-center gap-3">
                           <div className="bg-slate-200 p-2 rounded-full">
                              <Split size={16} className="text-slate-600" />
                           </div>
                           <div className="text-sm font-bold text-slate-700">더치페이(N빵) 하기</div>
                        </div>
                        <ArrowRight size={16} className="text-gray-400" />
                     </div>
                  </div>
               )}
               
               {mode === 'split' && (
                  <div className="mt-4 flex -space-x-2 overflow-hidden py-2">
                     {[1,2,3,4].map(i => (
                        <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white flex items-center justify-center text-xs font-bold text-white ${i === 1 ? 'bg-turf z-10' : 'bg-gray-300'}`}>
                           {i === 1 ? '나' : <User size={14} />}
                        </div>
                     ))}
                     <div className="h-8 flex items-center pl-4 text-xs text-gray-500">
                        홍길동님 외 3명과 함께 결제
                     </div>
                  </div>
               )}
            </div>

            {/* Payment Methods */}
            <div className="mt-6 px-6 space-y-3 animate-in slide-in-from-bottom-8 duration-700 delay-100">
               <div className="text-sm font-bold text-white mb-2">결제 수단 선택</div>
               
               {['ClubPay (자동결제)', '신용/체크카드', '카카오페이'].map((method) => (
                  <button 
                     key={method}
                     onClick={() => setSelectedMethod(method)}
                     className={`w-full p-4 rounded-xl flex items-center justify-between border transition-all ${
                        selectedMethod === method 
                           ? 'bg-turf/20 border-turf text-white' 
                           : 'bg-slate-800 border-white/5 text-gray-400 hover:bg-slate-700'
                     }`}
                  >
                     <span className="font-medium">{method}</span>
                     {selectedMethod === method && <CheckCircle2 size={18} className="text-turf" />}
                  </button>
               ))}
            </div>
          </>
        )}

        {mode === 'success' && (
           <div className="flex-1 flex flex-col items-center justify-center text-center p-8 animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-turf rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                 <CheckCircle2 size={40} className="text-midnight" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">결제가 완료되었습니다</h2>
              <p className="text-gray-400 mb-8">전자 영수증이 카카오톡으로 발송되었습니다.</p>
              
              <div className="bg-slate-800 p-6 rounded-2xl w-full border border-white/10">
                 <div className="flex justify-between mb-4">
                    <span className="text-gray-400">결제 금액</span>
                    <span className="text-white font-bold text-lg">216,500원</span>
                 </div>
                 <div className="flex justify-between mb-4">
                    <span className="text-gray-400">결제 수단</span>
                    <span className="text-white">ClubPay</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-gray-400">승인 일시</span>
                    <span className="text-white text-sm">10.24 17:32:45</span>
                 </div>
              </div>

              <button 
                 onClick={() => { setMode('bill'); setSelectedMethod(null); }}
                 className="mt-12 text-gray-500 hover:text-white text-sm underline"
              >
                 처음으로 돌아가기
              </button>
           </div>
        )}

        {/* Bottom Action Button */}
        {mode !== 'success' && (
           <div className="mt-auto p-6 bg-slate-900/50 backdrop-blur-lg border-t border-white/5">
              <button 
                 disabled={!selectedMethod}
                 onClick={() => setMode('success')}
                 className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
                    selectedMethod 
                       ? 'bg-turf text-midnight hover:bg-turf-dark hover:shadow-turf/20' 
                       : 'bg-slate-700 text-gray-500 cursor-not-allowed'
                 }`}
              >
                 {selectedMethod ? '결제하기' : '결제 수단을 선택해주세요'}
              </button>
           </div>
        )}
      </div>
    </div>
  );
};

const PaymentPage: React.FC<PaymentPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col">
       {/* Header */}
       <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
             <span className="font-display font-bold text-lg">통합 결제 시스템</span>
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
                   복잡한 정산은 이제 그만, <br/> <span className="text-turf">원터치 통합 결제</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep">
                   그린피, 카트비, 식음료, 프로샵 구매 내역까지. <br/>
                   모든 비용이 하나의 청구서로 통합되어 터치 한 번으로 정산됩니다.
                </p>

                <div className="space-y-4">
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-green-500/20 p-3 rounded-xl text-green-400">
                         <Receipt size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">모든 내역 통합</div>
                         <div className="text-sm text-gray-400 leading-relaxed">라운딩 중 발생하는 모든 비용을 실시간으로 합산하여 보여줍니다.</div>
                      </div>
                   </div>

                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                         <Split size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">똑똑한 더치페이 (N빵)</div>
                         <div className="text-sm text-gray-400 leading-relaxed">복잡한 계산기 없이, 인원수에 맞춰 정확하게 나누어 결제하세요.</div>
                      </div>
                   </div>

                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400">
                         <Wallet size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">비대면 자동 결제</div>
                         <div className="text-sm text-gray-400 leading-relaxed">프론트를 거칠 필요 없이, 앱에 등록된 카드로 자동 정산하고 귀가하세요.</div>
                      </div>
                   </div>
                </div>
             </FadeIn>
          </div>

          {/* Right Side: Simulator */}
          <div className="order-1 lg:order-2 flex justify-center">
             <FadeIn direction="up" delay={200} className="relative w-full max-w-md aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                
                {/* Interactive Badge */}
                <div className="absolute top-20 right-[-10px] z-40 pointer-events-none animate-bounce">
                   <div className="bg-turf/90 backdrop-blur-sm text-midnight text-xs font-bold px-3 py-1.5 rounded-l-full shadow-lg flex items-center gap-1.5 border border-white/20 border-r-0">
                      <MousePointerClick size={14} className="text-white" />
                      직접 결제해보세요
                   </div>
                </div>

                {/* Device Speaker */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
                
                {/* Simulator Container */}
                <PaymentSimulator />
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
             </FadeIn>
          </div>

       </div>
    </div>
  );
};

export default PaymentPage;