import React, { useState } from 'react';
import { 
  X, Hotel, Key, CalendarCheck, MapPin, Wifi, Star, MousePointerClick, 
  ChevronRight, BedDouble, Unlock, User, Utensils, Droplets, ShoppingBag, 
  Settings, CreditCard, LogOut, Phone, Map 
} from 'lucide-react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';

interface GolftelPageProps {
  onBack: () => void;
}

const GolftelSimulator = () => {
  const [currentTab, setCurrentTab] = useState<'trip' | 'facilities' | 'profile'>('trip');
  const [showKey, setShowKey] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
        setIsUnlocked(false);
        // Automatically close overlay after successful unlock simulation if desired
        // setShowKey(false);
    }, 3000);
  };

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col relative overflow-hidden select-none font-sans text-slate-900">
      
      {/* App Header */}
      <div className="bg-white px-6 pt-12 pb-4 flex justify-between items-center shadow-sm z-10">
         <div className="font-display font-bold text-xl text-slate-900">
            {currentTab === 'trip' && 'Concierge'}
            {currentTab === 'facilities' && 'Facilities'}
            {currentTab === 'profile' && 'My Info'}
         </div>
         <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
            <img src="https://picsum.photos/100/100?random=user" alt="User" className="w-full h-full object-cover" />
         </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 pb-20">
         
         {/* VIEW: TRIP (My Trip) */}
         {currentTab === 'trip' && (
            <div className="animate-in fade-in duration-300">
                {/* Welcome Section */}
                <div className="px-6 py-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">안녕하세요, 홍길동님</h2>
                    <p className="text-gray-500 text-sm">군산 CC 스테이 앤 플레이 패키지 이용 중입니다.</p>
                </div>

                {/* Itinerary Cards */}
                <div className="px-6 space-y-4">
                    
                    {/* Today's Round */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 opacity-60 grayscale">
                        <div className="bg-gray-100 p-3 rounded-xl text-gray-400">
                            <CalendarCheck size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-gray-900">1라운드 (18홀)</span>
                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">종료</span>
                            </div>
                            <div className="text-xs text-gray-500">10.24 (토) 13:00 • 레이크 코스</div>
                        </div>
                    </div>

                    {/* Hotel Stay (Active) */}
                    <div className="bg-white p-5 rounded-2xl shadow-lg border border-purple-100 relative overflow-hidden ring-2 ring-purple-500 transition-all">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full -mr-6 -mt-6" />
                        
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                                <Hotel size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-slate-900">골프텔 숙박</span>
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold">체크인 가능</span>
                                </div>
                                <div className="text-xs text-gray-500 mb-2">10.24 (토) - 10.25 (일) • 로얄 스위트</div>
                                <div className="flex gap-2">
                                    <span className="text-[10px] flex items-center gap-1 text-gray-400 bg-gray-50 px-2 py-1 rounded"><BedDouble size={10} /> 킹베드</span>
                                    <span className="text-[10px] flex items-center gap-1 text-gray-400 bg-gray-50 px-2 py-1 rounded"><Wifi size={10} /> 무료 와이파이</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Key Button */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <button 
                                onClick={() => setShowKey(true)}
                                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                            >
                                <Key size={16} /> 모바일 키 열기
                            </button>
                        </div>
                    </div>

                    {/* Tomorrow's Round */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="bg-green-50 p-3 rounded-xl text-green-600">
                            <CalendarCheck size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-slate-900">2라운드 (18홀)</span>
                                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">D-1</span>
                            </div>
                            <div className="text-xs text-gray-500">10.25 (일) 07:30 • 밸리 코스</div>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>
                </div>
            </div>
         )}

         {/* VIEW: FACILITIES */}
         {currentTab === 'facilities' && (
             <div className="animate-in slide-in-from-right duration-300 px-6 py-6 space-y-6">
                {/* Map Preview */}
                <div className="bg-slate-200 rounded-2xl h-48 w-full relative overflow-hidden group cursor-pointer shadow-inner">
                    <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center">
                        <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-2 text-slate-700">
                            <Map size={14} /> 전체 지도 보기
                        </span>
                    </div>
                    {/* Mock map graphic */}
                    <svg className="w-full h-full opacity-20" viewBox="0 0 400 200" preserveAspectRatio="none">
                        <rect width="100%" height="100%" fill="#cbd5e1" />
                        <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#94a3b8" strokeWidth="40" />
                        <circle cx="100" cy="80" r="20" fill="#64748b" />
                        <circle cx="300" cy="120" r="30" fill="#64748b" />
                    </svg>
                </div>

                {/* Facility List */}
                <div className="space-y-4">
                    {[
                        { name: '클럽 하우스 레스토랑', icon: Utensils, desc: '조식 뷔페 및 셰프 특선 요리', status: '영업중', time: '06:00 - 21:00' },
                        { name: '사우나 & 스파', icon: Droplets, desc: '천연 암반수 사우나', status: '영업중', time: '06:00 - 22:00' },
                        { name: '프로샵', icon: ShoppingBag, desc: '프리미엄 골프 웨어 및 장비', status: '영업 종료', time: '07:00 - 19:00' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-500">
                                <item.icon size={20} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                                <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
                                <div className="flex items-center gap-2">
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${item.status === '영업중' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                        {item.status}
                                    </span>
                                    <span className="text-[10px] text-gray-400">{item.time}</span>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-300" />
                        </div>
                    ))}
                </div>
                
                {/* Contact */}
                <button className="w-full bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-center gap-2 text-slate-600 font-medium hover:bg-gray-50 transition-colors text-sm">
                    <Phone size={16} /> 프론트 데스크 연결
                </button>
             </div>
         )}

         {/* VIEW: PROFILE */}
         {currentTab === 'profile' && (
             <div className="animate-in slide-in-from-right duration-300 px-6 py-6">
                 {/* Profile Card */}
                 <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl mb-6 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                     <div className="flex items-center gap-4 mb-6 relative z-10">
                         <div className="w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden bg-gray-700">
                             <img src="https://picsum.photos/100/100?random=user" alt="User" className="w-full h-full object-cover" />
                         </div>
                         <div>
                             <h2 className="text-xl font-bold">홍길동</h2>
                             <div className="text-sm text-gray-400 flex items-center gap-1">
                                <Star size={12} className="text-yellow-400 fill-yellow-400" /> VIP 회원 (Gold)
                             </div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                         <div>
                             <div className="text-xs text-gray-400 mb-1">보유 포인트</div>
                             <div className="text-lg font-bold text-turf">12,500 P</div>
                         </div>
                         <button className="text-xs px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">내역 보기</button>
                     </div>
                 </div>

                 {/* Menu Links */}
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                     {[
                         { name: '나의 쿠폰함', icon: CreditCard, badge: '2장' },
                         { name: '라운딩 기록', icon: CalendarCheck, badge: null },
                         { name: '결제 수단 관리', icon: Settings, badge: null },
                     ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors">
                             <div className="flex items-center gap-3">
                                 <div className="bg-gray-50 p-2 rounded-lg text-gray-500">
                                    <item.icon size={18} />
                                 </div>
                                 <span className="text-slate-900 font-medium text-sm">{item.name}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                 {item.badge && <span className="text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-bold">{item.badge}</span>}
                                 <ChevronRight size={16} className="text-gray-300" />
                             </div>
                         </div>
                     ))}
                 </div>

                 <button className="flex items-center justify-center gap-2 text-gray-400 text-sm mx-auto hover:text-gray-600 w-full py-2">
                     <LogOut size={16} /> 로그아웃
                 </button>
             </div>
         )}

      </div>

      {/* Mobile Key Overlay */}
      {showKey && (
         <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex flex-col justify-end animate-in fade-in duration-300">
            <div className="bg-white rounded-t-[2rem] p-8 pb-12 animate-in slide-in-from-bottom-full duration-500 shadow-2xl">
               <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8" />
               
               <div className="flex justify-between items-center mb-8">
                  <div>
                     <h3 className="text-2xl font-bold text-slate-900">304호</h3>
                     <p className="text-gray-500 text-sm">로얄 스위트 객실</p>
                  </div>
                  <button onClick={() => setShowKey(false)} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200">
                     <X size={20} />
                  </button>
               </div>

               <div className="flex flex-col items-center justify-center gap-6">
                  <button 
                     onClick={handleUnlock}
                     className={`w-48 h-48 rounded-full flex flex-col items-center justify-center gap-4 shadow-2xl transition-all duration-500 ${
                        isUnlocked 
                           ? 'bg-green-500 shadow-green-500/30 scale-105' 
                           : 'bg-gradient-to-br from-slate-800 to-slate-900 shadow-slate-900/30 hover:scale-105'
                     }`}
                  >
                     <div className={`p-4 rounded-full transition-colors duration-500 ${isUnlocked ? 'bg-white/20' : 'bg-white/10'}`}>
                        {isUnlocked ? <Unlock size={40} className="text-white" /> : <Key size={40} className="text-white" />}
                     </div>
                     <span className="text-white font-bold tracking-widest uppercase text-sm">
                        {isUnlocked ? '잠금 해제됨' : '터치하여 열기'}
                     </span>
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center max-w-[200px]">
                     {isUnlocked 
                        ? '문이 열렸습니다. 3초 후 자동으로 잠깁니다.' 
                        : '휴대폰을 도어락 가까이 대고 버튼을 눌러주세요.'}
                  </p>
               </div>
            </div>
         </div>
      )}

      {/* Bottom Nav */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 py-4 px-6 flex justify-around text-xs font-medium text-gray-400 z-40">
         <button 
            onClick={() => setCurrentTab('trip')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'trip' ? 'text-slate-900' : 'text-gray-400'}`}
         >
            <Star size={20} fill={currentTab === 'trip' ? "currentColor" : "none"} className={currentTab === 'trip' ? "text-purple-500" : ""} />
            <span>나의 여행</span>
         </button>
         <button 
            onClick={() => setCurrentTab('facilities')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'facilities' ? 'text-slate-900' : 'text-gray-400'}`}
         >
            <MapPin size={20} fill={currentTab === 'facilities' ? "currentColor" : "none"} className={currentTab === 'facilities' ? "text-blue-500" : ""} />
            <span>시설 안내</span>
         </button>
         <button 
            onClick={() => setCurrentTab('profile')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentTab === 'profile' ? 'text-slate-900' : 'text-gray-400'}`}
         >
            <User size={20} fill={currentTab === 'profile' ? "currentColor" : "none"} className={currentTab === 'profile' ? "text-gray-900" : ""} />
            <span>내 정보</span>
         </button>
      </div>

    </div>
  );
};

const GolftelPage: React.FC<GolftelPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col">
       {/* Header */}
       <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
             <span className="font-display font-bold text-lg">골프텔 & 컨시어지 시스템</span>
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
                   라운딩 후의 휴식까지, <br/> <span className="text-turf">완벽한 여정 관리</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep">
                   골프텔 예약부터 체크인, 룸서비스, 시설 이용까지. <br/>
                   별도의 호텔 앱 없이 ClubManager 하나로 충분합니다.
                </p>

                <div className="space-y-4">
                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400">
                         <Key size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">모바일 키리스 체크인</div>
                         <div className="text-sm text-gray-400 leading-relaxed">프론트 방문 없이 스마트폰으로 객실 문을 열 수 있습니다.</div>
                      </div>
                   </div>

                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                         <CalendarCheck size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">통합 일정 관리</div>
                         <div className="text-sm text-gray-400 leading-relaxed">티타임과 숙박 일정을 한눈에 확인하고 동반자와 공유하세요.</div>
                      </div>
                   </div>

                   <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turf/20 transition-colors flex items-start gap-4">
                      <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                         <Star size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white text-lg mb-1">VIP 컨시어지</div>
                         <div className="text-sm text-gray-400 leading-relaxed">레스토랑 예약, 사우나 이용 현황 등 리조트의 모든 시설을 손안에서.</div>
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
                      직접 체험해보세요
                   </div>
                </div>

                {/* Device Speaker */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
                
                {/* Simulator Container */}
                <GolftelSimulator />
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
             </FadeIn>
          </div>

       </div>
    </div>
  );
};

export default GolftelPage;