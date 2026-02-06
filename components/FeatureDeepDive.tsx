import React from 'react';
import FadeIn from './ui/FadeIn';
import { Smartphone, QrCode, Map as MapIcon, AlertTriangle, MessageSquare, BarChart3, PieChart, TrendingUp, Hotel, CalendarCheck, CheckCircle2, Tablet, UserPlus, Share2 } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const FeatureDeepDive: React.FC = () => {
  return (
    <section className="py-24 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Section 1: The Booking Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-turf/10 border border-turf/20 mb-6">
              <span className="text-xs font-bold text-turf tracking-wide uppercase">매끄러운 경험</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              앱 예약부터 <br /> <span className="text-turf">키오스크 체크인까지</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep">
              골퍼에게 막힘없는 여정을 제공하세요. 폰으로 예약하고, 동반자를 초대하여 QR 코드를 공유하면 키오스크에서 몇 초 만에 체크인이 완료됩니다.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 max-w-sm">
               <div className="p-3 bg-turf/20 rounded-lg text-turf">
                 <TrendingUp size={24} />
               </div>
               <div>
                 <div className="text-2xl font-bold text-white">40%</div>
                 <div className="text-sm text-gray-400">프론트 데스크 업무량 감소</div>
               </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative">
            {/* Visual Mockup */}
            <div className="relative mx-auto w-full max-w-[550px] h-[450px]">
              
              {/* 1. Phone Mockup (Reservation) - Bottom Left */}
              <div className="absolute left-0 bottom-8 w-[190px] h-[360px] bg-slate-850 border-4 border-gray-800 rounded-[2rem] shadow-2xl overflow-hidden z-30 transform -rotate-3 hover:scale-105 transition-transform duration-500">
                <div className="bg-midnight h-full p-4 flex flex-col">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] text-gray-400">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white/20 rounded-full"/>
                        <div className="w-3 h-3 bg-white/20 rounded-full"/>
                      </div>
                   </div>
                   <div className="text-white text-lg font-bold mb-2">티타임 예약</div>
                   <div className="bg-white/10 p-3 rounded-xl mb-3">
                      <div className="text-xs text-gray-400">10월 24일 토요일</div>
                      <div className="text-turf font-bold">08:00 AM</div>
                   </div>
                   <div className="mt-auto bg-turf text-midnight text-center py-3 rounded-xl font-bold text-sm">
                      예약 확정
                   </div>
                </div>
              </div>

              {/* 2. Invite Companion Card (New) - Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] bg-slate-800/95 backdrop-blur border border-white/10 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 transform rotate-0 hover:-rotate-2 transition-transform duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-turf/20 rounded-lg text-turf group-hover:bg-turf group-hover:text-midnight transition-colors">
                          <UserPlus size={18} />
                      </div>
                      <span className="font-bold text-white text-sm">동반자 초대</span>
                  </div>
                  <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-white border border-white/10">나</div>
                          <div className="flex-1">
                             <div className="text-xs text-white font-medium">홍길동</div>
                             <div className="text-[10px] text-turf">예약자</div>
                          </div>
                      </div>
                       <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5 border-dashed hover:bg-white/10 cursor-pointer transition-colors">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/5">
                              <UserPlus size={14} />
                          </div>
                          <span className="text-xs text-gray-400">동반자 추가하기</span>
                      </div>
                  </div>
                  <button className="w-full bg-[#FAE100] hover:bg-[#FDD835] text-[#371D1E] text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                      <Share2 size={14} /> 카카오톡 공유
                  </button>
              </div>

              {/* 3. Kiosk Ticket/QR Mockup - Top Right */}
              <div className="absolute right-4 top-0 w-[200px] h-[280px] bg-white text-midnight rounded-xl shadow-2xl p-5 z-20 transform rotate-6 flex flex-col items-center justify-center border border-gray-200 hover:rotate-3 transition-transform duration-500">
                 <div className="text-center mb-4">
                    <h4 className="font-display font-bold text-lg uppercase tracking-widest text-slate-900">Gunsan CountryClub</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">입장권</p>
                 </div>
                 <div className="bg-slate-900 p-3 rounded-lg mb-4">
                    <QrCode className="w-20 h-20 text-white" />
                 </div>
                 <div className="text-center w-full">
                    <div className="text-sm font-bold border-b border-gray-100 pb-2 mb-2">락커 142번</div>
                    <div className="text-xs text-gray-500 flex justify-between px-2">
                       <span>카트</span>
                       <span className="font-bold">08번</span>
                    </div>
                 </div>
              </div>

              {/* Connecting Arc */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
                 <path d="M 100 360 C 150 250, 280 250, 275 225 S 450 140, 480 140" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
              </svg>
            </div>
          </FadeIn>
        </div>

        {/* Section 2: Field Command Center */}
        <div className="flex flex-col gap-12">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              필드에 대한 완벽한 통제
            </h2>
            <p className="text-gray-400 text-lg break-keep">
              경기 진행 속도를 모니터링하고, GPS로 모든 카트를 추적하며, 플레이어와 즉시 소통하세요.
            </p>
          </FadeIn>

          <FadeIn direction="up">
            <div className="relative bg-slate-850 rounded-3xl border border-white/10 p-2 md:p-4 shadow-2xl overflow-hidden group">
               {/* Dashboard Header */}
               <div className="flex items-center justify-between px-4 py-3 bg-midnight/50 rounded-t-xl border-b border-white/5 mb-4">
                  <div className="flex items-center gap-4">
                     <span className="text-sm font-bold text-white flex items-center gap-2">
                        <MapIcon className="w-4 h-4 text-turf" /> 코스 맵 뷰
                     </span>
                     <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-md border border-red-500/20 flex items-center gap-1">
                        <AlertTriangle size={12} /> 지연 2팀
                     </span>
                  </div>
                  <div className="flex gap-2">
                     <button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors">전체 메시지 전송</button>
                  </div>
               </div>

               {/* Map Visualization */}
               <div className="relative aspect-[16/9] bg-[#0f172a] rounded-xl overflow-hidden border border-white/5">
                  {/* Pseudo Map Graphics */}
                  <svg className="w-full h-full opacity-20" viewBox="0 0 800 450">
                     <path d="M 50 400 Q 150 200 250 350 T 450 300 T 700 400" fill="none" stroke="#334155" strokeWidth="40" strokeLinecap="round" />
                     <path d="M 50 100 Q 200 150 300 50 T 600 100" fill="none" stroke="#334155" strokeWidth="30" strokeLinecap="round" />
                     <circle cx="650" cy="250" r="40" fill="#1e293b" />
                  </svg>
                  
                  {/* Active Carts */}
                  <div className="absolute top-[20%] left-[20%]">
                     <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute" />
                     <div className="w-3 h-3 bg-blue-500 rounded-full relative shadow-[0_0_10px_#3b82f6]" />
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-midnight/80 px-2 py-0.5 rounded text-white border border-white/10">A1 팀</div>
                  </div>

                   <div className="absolute top-[60%] left-[50%]">
                     <div className="w-3 h-3 bg-blue-500 rounded-full relative shadow-[0_0_10px_#3b82f6]" />
                  </div>

                  {/* Slow Play Alert */}
                  <div className="absolute top-[70%] right-[20%]">
                     <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse relative shadow-[0_0_10px_#ef4444]" />
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-red-950/80 px-2 py-0.5 rounded text-red-200 border border-red-500/50 flex items-center gap-1">
                        <AlertTriangle size={8} /> +12분 지연
                     </div>
                  </div>
               </div>

               {/* Features List Overlay */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                     { icon: AlertTriangle, title: "지연 플레이 경고", desc: "속도가 뒤처지는 팀 자동 감지." },
                     { icon: MessageSquare, title: "긴급 메시지", desc: "모든 카트에 날씨 경보 즉시 전송." },
                     { icon: Tablet, title: "디지털 스코어카드", desc: "클럽하우스 리더보드와 실시간 동기화." }
                  ].map((feat, i) => (
                     <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                           <feat.icon className="w-5 h-5 text-turf" />
                           <h4 className="font-bold text-white text-sm">{feat.title}</h4>
                        </div>
                        <p className="text-xs text-gray-400">{feat.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
          </FadeIn>
        </div>

        {/* Section 3: Revenue & Admin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <FadeIn className="order-2 lg:order-1">
              <div className="bg-slate-850 rounded-2xl border border-white/10 p-6 shadow-2xl relative">
                  {/* Decorative blur */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]" />
                  
                  <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-end">
                         <div>
                            <div className="text-sm text-gray-400 mb-1">총 매출 (월간)</div>
                            <div className="text-3xl font-bold text-white">₩628,450,000</div>
                         </div>
                         <div className="flex items-center gap-1 text-green-400 text-sm bg-green-400/10 px-2 py-1 rounded">
                            <TrendingUp size={14} /> +18.2%
                         </div>
                      </div>
                      
                      {/* Chart */}
                      <div className="h-40 w-full bg-midnight/50 rounded-lg border border-white/5 overflow-hidden">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={[
                              {v: 4000}, {v: 3000}, {v: 5000}, {v: 4500}, {v: 6000}, {v: 5500}, {v: 7000}
                            ]}>
                              <defs>
                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="v" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                          </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-3 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                               <PieChart className="w-4 h-4 text-orange-400" />
                               <span className="text-xs text-gray-400">그린피</span>
                            </div>
                            <div className="text-lg font-bold text-white">65%</div>
                         </div>
                         <div className="p-3 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                               <BarChart3 className="w-4 h-4 text-blue-400" />
                               <span className="text-xs text-gray-400">F&B / 샵</span>
                            </div>
                            <div className="text-lg font-bold text-white">35%</div>
                         </div>
                      </div>
                  </div>
              </div>
           </FadeIn>

           <FadeIn className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                 데이터 기반 <br /> <span className="text-purple-400">매니지먼트</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed break-keep">
                 그린피, 캐디피, 레스토랑 비용의 실시간 정산. 회원 유지율과 재정 건전성을 한눈에 파악하세요.
              </p>
              <ul className="space-y-4">
                 {[
                    "통합 회원 계정",
                    "자동 월간 명세서",
                    "재고 관리 및 원가 분석",
                    "직원 성과 추적"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                       <CheckCircle2 className="w-5 h-5 text-purple-400" /> {item}
                    </li>
                 ))}
              </ul>
           </FadeIn>
        </div>

        {/* Section 4: Golf-tel & Facilities */}
        <div className="bg-gradient-to-r from-slate-850 to-midnight rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-turf/5 rounded-full blur-[80px]" />
           <FadeIn className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                 <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                    <Hotel size={28} />
                 </div>
                 <h2 className="text-3xl font-display font-bold text-white mb-4">골프텔 & 패키지상품 관리</h2>
                 <p className="text-gray-400 leading-relaxed mb-6 break-keep">
                    통합 숙박 예약 엔진으로 스테이 앤 플레이(Stay & Play) 패키지를 관리하세요. 최고의 리조트 경험을 위해 객실 현황과 티타임을 동기화합니다.
                 </p>
                 <div className="flex gap-4">
                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                       <CalendarCheck size={16} /> 통합 예약
                    </div>
                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                       <Hotel size={16} /> 숙박 및 식사
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full">
                 <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                       <div>
                          <div className="text-white font-bold">스테이 앤 플레이 패키지</div>
                          <div className="text-xs text-gray-400">디럭스 스위트 + 2라운드</div>
                       </div>
                       <div className="text-orange-400 font-bold">₩580,000</div>
                    </div>
                    <div className="space-y-3">
                       <div className="flex justify-between text-sm">
                          <span className="text-gray-400">체크인</span>
                          <span className="text-white">10월 24일, 14:00</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-gray-400">1차 티타임</span>
                          <span className="text-white">10월 24일, 15:30</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-gray-400">2차 티타임</span>
                          <span className="text-white">10월 25일, 08:00</span>
                       </div>
                    </div>
                 </div>
              </div>
           </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default FeatureDeepDive;