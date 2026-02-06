import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, CreditCard, Calendar, TrendingUp, MoreHorizontal, Bell, Tablet, Smartphone, Monitor } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const data = [
  { name: '월', value: 4000 },
  { name: '화', value: 3000 },
  { name: '수', value: 5000 },
  { name: '목', value: 2780 },
  { name: '금', value: 7890 },
  { name: '토', value: 9390 },
  { name: '일', value: 8490 },
];

const DashboardPreview: React.FC = () => {
  return (
    <section className="relative -mt-10 pb-20 md:pb-32 px-4 z-10 perspective-1000">
      <div className="max-w-6xl mx-auto relative group">
        
        {/* Floating Satellite Modules - visual only */}
        <div className="absolute -left-12 top-20 z-20 hidden lg:block animate-[bounce_5s_infinite]">
            <div className="bg-slate-850/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl transform -rotate-6 w-48">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-turf/10 rounded-lg text-turf"><Monitor size={16} /></div>
                    <span className="text-xs font-semibold text-white">키오스크 활성</span>
                </div>
                <div className="text-xs text-gray-400">체크인 원활. <br/>평균 대기: 0분</div>
            </div>
            {/* Glowing line connector simulation */}
            <div className="absolute top-1/2 right-0 w-12 h-[1px] bg-gradient-to-r from-transparent to-turf translate-x-12 opacity-50" />
        </div>

        <div className="absolute -right-8 top-40 z-20 hidden lg:block animate-[bounce_6s_infinite] animation-delay-1000">
            <div className="bg-slate-850/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl transform rotate-3 w-48">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Tablet size={16} /></div>
                    <span className="text-xs font-semibold text-white">카트 온라인</span>
                </div>
                <div className="text-xs text-gray-400">42/50 카트 운행 중. <br/>GPS 추적 ON.</div>
            </div>
             {/* Glowing line connector simulation */}
             <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-gradient-to-l from-transparent to-blue-400 -translate-x-8 opacity-50" />
        </div>

        <div className="absolute right-20 -bottom-8 z-20 hidden lg:block animate-[bounce_7s_infinite] animation-delay-500">
            <div className="bg-slate-850/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl transform rotate-1 w-48">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Smartphone size={16} /></div>
                    <span className="text-xs font-semibold text-white">모바일 앱</span>
                </div>
                <div className="text-xs text-gray-400">새 예약: <br/>김철수 @ 09:00 AM</div>
            </div>
        </div>

        <FadeIn direction='up' delay={200} className="transform transition-transform duration-700 hover:scale-[1.01]">
          {/* Main Glass Container */}
          <div className="relative rounded-2xl bg-slate-850/60 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10">
            
            {/* Mock Window Header */}
            <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="bg-white/5 px-3 py-1 rounded-md border border-white/5 shadow-inner">clubmanager.app/dashboard</span>
              </div>
              <div className="flex gap-4 text-gray-400">
                <Bell className="w-4 h-4" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-turf to-blue-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Sidebar Mock */}
              <div className="hidden md:flex flex-col gap-6 md:col-span-2 text-gray-400 text-sm font-medium border-r border-white/5 pr-4">
                <div className="text-white font-semibold">대시보드</div>
                <div className="hover:text-turf cursor-pointer transition-colors">티시트</div>
                <div className="hover:text-turf cursor-pointer transition-colors">회원 관리</div>
                <div className="hover:text-turf cursor-pointer transition-colors">프로샵</div>
                <div className="hover:text-turf cursor-pointer transition-colors">F&B 식음료</div>
                <div className="hover:text-turf cursor-pointer transition-colors">코스 관리</div>
                <div className="mt-auto flex items-center gap-2 text-xs bg-turf/10 text-turf p-2 rounded-lg border border-turf/20">
                  <div className="w-2 h-2 rounded-full bg-turf animate-pulse" />
                  실시간 동기화
                </div>
              </div>

              {/* Main Area */}
              <div className="md:col-span-10 flex flex-col gap-6">
                
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: '오늘의 매출', value: '₩32,500,000', sub: '+12.5%', icon: CreditCard },
                    { label: '입장객 수', value: '142', sub: '수용률 98%', icon: Users },
                    { label: '티타임 점유율', value: '92%', sub: '+8%', icon: Calendar },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col gap-2 hover:bg-white/10 transition-colors group">
                      <div className="flex justify-between items-start">
                        <stat.icon className="w-5 h-5 text-gray-400 group-hover:text-turf transition-colors" />
                        <span className="text-xs font-bold text-turf bg-turf/10 px-2 py-0.5 rounded-full">{stat.sub}</span>
                      </div>
                      <div className="text-xl lg:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Section */}
                <div className="bg-white/5 border border-white/5 p-6 rounded-xl flex-1 min-h-[300px] flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-turf" />
                      실시간 매출 현황
                    </h3>
                    <button className="text-gray-400 hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                  </div>
                  <div className="flex-1 w-full h-full min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                        <XAxis 
                          dataKey="name" 
                          stroke="#94A3B8" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false} 
                        />
                        <YAxis 
                          stroke="#94A3B8" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false} 
                          tickFormatter={(value) => `${value}`} 
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#10B981" 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill="url(#colorValue)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Decorative Gradients inside glass */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-turf/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DashboardPreview;