import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, Home, Map as MapIcon, Flag, MessageSquare, AlertTriangle, Navigation, Trophy, Battery, Signal, Coffee, MousePointerClick, List } from 'lucide-react';
import FadeIn from './ui/FadeIn';

interface CartControlPageProps {
  onBack: () => void;
}

const CartTabletSimulator = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'score' | 'message'>('map');
  const [distance, setDistance] = useState(145);
  const [message, setMessage] = useState<string | null>(null);

  // Simulate GPS distance changes
  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        return prev + change;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate incoming message
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("앞 팀 플레이가 지연되고 있습니다. 잠시 대기 부탁드립니다.");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-slate-900 flex flex-col relative overflow-hidden select-none font-sans">
      {/* Tablet Status Bar */}
      <div className="bg-slate-950 px-4 py-1 flex justify-between items-center text-xs text-gray-400 border-b border-white/5">
         <div className="flex items-center gap-2">
            <Signal size={12} className="text-turf" />
            <span>ClubManager GPS</span>
         </div>
         <div className="flex items-center gap-3">
            <span>오전 10:42</span>
            <div className="flex items-center gap-1">
               <span>82%</span>
               <Battery size={12} className="text-white" />
            </div>
         </div>
      </div>

      {/* Main Tablet Content */}
      <div className="flex-1 flex flex-col relative">
        
        {/* Top Info Bar */}
        <div className="bg-slate-900/90 backdrop-blur p-4 flex justify-between items-center shadow-lg z-10">
           <div className="flex items-center gap-4">
              <div className="bg-turf text-midnight font-bold px-3 py-1 rounded text-lg">Hole 4</div>
              <div className="text-white text-sm">PAR 4 / 340m</div>
           </div>
           <div className="text-right">
              <div className="text-xs text-gray-400">핀까지 남은 거리</div>
              <div className="text-3xl font-bold text-white leading-none">{distance}<span className="text-sm font-normal text-gray-400 ml-1">m</span></div>
           </div>
        </div>

        {/* View Content */}
        <div className="flex-1 relative bg-[#1e293b] overflow-hidden">
           {activeTab === 'map' && (
              <div className="w-full h-full relative animate-in fade-in duration-300">
                 {/* Pseudo Map Graphics */}
                 <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 500" preserveAspectRatio="none">
                    <rect width="100%" height="100%" fill="#0f172a" />
                    {/* Fairway */}
                    <path d="M 100 450 C 200 400, 300 450, 400 300 S 600 200, 700 100" fill="none" stroke="#064e3b" strokeWidth="120" strokeLinecap="round" opacity="0.5" />
                    <path d="M 100 450 C 200 400, 300 450, 400 300 S 600 200, 700 100" fill="none" stroke="#10b981" strokeWidth="80" strokeLinecap="round" opacity="0.2" />
                    {/* Green */}
                    <circle cx="700" cy="100" r="40" fill="#10b981" opacity="0.4" />
                    {/* Bunker */}
                    <ellipse cx="550" cy="250" rx="30" ry="20" fill="#d97706" opacity="0.6" />
                 </svg>

                 {/* Pin Position */}
                 <div className="absolute top-[20%] right-[12%] flex flex-col items-center">
                    <Flag className="text-red-500 w-8 h-8 drop-shadow-lg fill-current animate-bounce" />
                    <div className="w-2 h-2 bg-black/50 rounded-full blur-[2px]" />
                 </div>

                 {/* Cart Position */}
                 <div className="absolute bottom-[20%] left-[20%]">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center z-10 relative">
                       <Navigation className="text-blue-600 w-6 h-6 transform rotate-45" fill="currentColor" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
                 </div>

                 {/* Message Overlay */}
                 {message && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-red-500/50 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-top-4 z-50 max-w-[90%]">
                       <div className="p-2 bg-red-500/20 rounded-full animate-pulse">
                          <AlertTriangle className="text-red-500 w-6 h-6" />
                       </div>
                       <div>
                          <div className="font-bold text-red-400 text-sm mb-0.5">관제실 메시지</div>
                          <div className="text-sm">{message}</div>
                       </div>
                       <button onClick={() => setMessage(null)} className="ml-2 text-gray-400 hover:text-white">
                          <X size={18} />
                       </button>
                    </div>
                 )}
              </div>
           )}

           {activeTab === 'score' && (
              <div className="w-full h-full relative animate-in slide-in-from-right duration-300">
                 {/* Close Button */}
                 <button 
                   onClick={() => setActiveTab('map')}
                   className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 backdrop-blur rounded-full text-gray-400 hover:text-white border border-white/10 transition-colors"
                   aria-label="코스맵으로 돌아가기"
                 >
                   <X size={20} />
                 </button>

                 <div className="w-full h-full p-6 pb-12 overflow-y-auto">
                    <div className="bg-slate-800 rounded-xl border border-white/5 overflow-hidden mt-8">
                       <table className="w-full text-sm">
                          <thead className="bg-slate-900 text-gray-400">
                             <tr>
                                <th className="p-3 text-left">플레이어</th>
                                <th className="p-3 text-center">H1</th>
                                <th className="p-3 text-center">H2</th>
                                <th className="p-3 text-center">H3</th>
                                <th className="p-3 text-center bg-white/5 text-turf">H4</th>
                                <th className="p-3 text-center text-white font-bold">Total</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                             {[
                                { name: '김철수', scores: [4, 5, 3, 4], total: 16 },
                                { name: '이영희', scores: [5, 4, 4, 5], total: 18 },
                                { name: '박민수', scores: [4, 4, 3, 4], total: 15 },
                                { name: '최지훈', scores: [6, 5, 4, 5], total: 20 },
                             ].map((player, i) => (
                                <tr key={i} className="text-gray-300 hover:bg-white/5">
                                   <td className="p-3 font-medium text-white flex items-center gap-2">
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i===2 ? 'bg-yellow-500 text-black' : 'bg-slate-700'}`}>{i+1}</div>
                                      {player.name}
                                   </td>
                                   {player.scores.map((s, idx) => (
                                      <td key={idx} className={`p-3 text-center ${idx === 3 ? 'bg-white/5 font-bold text-turf' : ''}`}>{s}</td>
                                   ))}
                                   <td className="p-3 text-center font-bold text-white">{player.total}</td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                    
                    <div className="mt-4 bg-turf/10 border border-turf/20 rounded-xl p-4 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <Trophy className="text-turf w-6 h-6" />
                          <div>
                             <div className="font-bold text-white text-sm">현재 1위: 박민수</div>
                             <div className="text-xs text-turf">2언더파 진행 중</div>
                          </div>
                       </div>
                       <button className="bg-turf text-midnight font-bold px-4 py-2 rounded-lg text-xs hover:bg-turf-dark transition-colors">
                          스코어 입력
                       </button>
                    </div>
                 </div>
              </div>
           )}

           {activeTab === 'message' && (
              <div className="w-full h-full relative animate-in slide-in-from-right duration-300">
                 {/* Close Button */}
                 <button 
                   onClick={() => setActiveTab('map')}
                   className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 backdrop-blur rounded-full text-gray-400 hover:text-white border border-white/10 transition-colors"
                   aria-label="코스맵으로 돌아가기"
                 >
                   <X size={20} />
                 </button>

                 <div className="w-full h-full p-6 flex flex-col justify-center items-center text-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                       <Coffee className="text-gray-400 w-8 h-8" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">주문 하시겠습니까?</h3>
                    <p className="text-gray-400 text-sm mb-6 max-w-xs">그늘집 도착 15분 전입니다. 미리 주문하시면 대기 없이 식사하실 수 있습니다.</p>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                       <button className="bg-slate-800 hover:bg-slate-700 border border-white/10 p-4 rounded-xl text-left transition-colors">
                          <div className="font-bold text-white mb-1">아메리카노</div>
                          <div className="text-xs text-gray-400">HOT / ICE</div>
                       </button>
                       <button className="bg-slate-800 hover:bg-slate-700 border border-white/10 p-4 rounded-xl text-left transition-colors">
                          <div className="font-bold text-white mb-1">수박 화채</div>
                          <div className="text-xs text-gray-400">계절 메뉴</div>
                       </button>
                    </div>
                 </div>
              </div>
           )}
        </div>

        {/* Bottom Navigation */}
        <div className="bg-slate-900 border-t border-white/10 p-2 flex justify-around items-center h-16 z-20">
           <button 
             onClick={() => setActiveTab('map')}
             className={`flex flex-col items-center gap-1 w-full py-1 rounded-lg transition-colors ${activeTab === 'map' ? 'text-turf bg-white/5' : 'text-gray-400 hover:text-white'}`}
           >
              <MapIcon size={20} />
              <span className="text-[10px] font-medium">코스맵</span>
           </button>
           <button 
             onClick={() => setActiveTab('score')}
             className={`flex flex-col items-center gap-1 w-full py-1 rounded-lg transition-colors ${activeTab === 'score' ? 'text-turf bg-white/5' : 'text-gray-400 hover:text-white'}`}
           >
              <List size={20} />
              <span className="text-[10px] font-medium">스코어</span>
           </button>
           <button 
             onClick={() => setActiveTab('message')}
             className={`flex flex-col items-center gap-1 w-full py-1 rounded-lg transition-colors ${activeTab === 'message' ? 'text-turf bg-white/5' : 'text-gray-400 hover:text-white'}`}
           >
              <Coffee size={20} />
              <span className="text-[10px] font-medium">그늘집 주문</span>
           </button>
        </div>

      </div>
    </div>
  );
};

const CartControlPage: React.FC<CartControlPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col">
       {/* Header */}
       <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
             <span className="font-display font-bold text-lg">스마트 카트 관제 시스템</span>
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
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                   필드 위의 <br/> <span className="text-turf">똑똑한 비서</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep">
                   정확한 GPS 거리 측정부터 스코어 기록, 그늘집 주문까지. <br/>
                   캐디 없는 라운딩도 문제없는 완벽한 가이드를 제공합니다.
                </p>

                <div className="space-y-4">
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                         <Navigation size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">핀포인트 GPS</div>
                         <div className="text-sm text-gray-400 leading-relaxed">핀까지의 정확한 거리와 고저차 정보를 실시간으로 제공합니다.</div>
                      </div>
                   </div>

                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                         <AlertTriangle size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">안전 및 진행 관리</div>
                         <div className="text-sm text-gray-400 leading-relaxed">앞 팀과의 거리 유지 알림 및 위험 구역(Geofence) 진입 경고 시스템.</div>
                      </div>
                   </div>

                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400">
                         <Trophy size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">실시간 리더보드</div>
                         <div className="text-sm text-gray-400 leading-relaxed">동반자는 물론 단체 팀 간의 실시간 스코어 순위 공유.</div>
                      </div>
                   </div>
                </div>
             </FadeIn>
          </div>

          {/* Right Side: Simulator */}
          <div className="order-1 lg:order-2 flex justify-center">
             <FadeIn direction="up" delay={200} className="relative w-full max-w-2xl aspect-[4/3] bg-slate-900 rounded-[2rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Simulator Container */}
                <CartTabletSimulator />
             </FadeIn>
          </div>

       </div>
    </div>
  );
};

export default CartControlPage;