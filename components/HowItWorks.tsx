import React from 'react';
import { CreditCard, BarChart3, ArrowRight, Smartphone, Monitor } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: '스마트 예약',
      desc: '고객은 전용 모바일 앱이나 웹사이트에서 실시간 티타임을 확인하고 즉시 예약합니다. AI가 최적의 요금을 제안합니다.',
      icon: Smartphone,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20'
    },
    {
      id: '02',
      title: '키오스크 체크인',
      desc: '프론트 방문 없이 도착 즉시 키오스크에서 QR 코드를 스캔합니다. 락커 배정과 카트 배정이 30초 안에 완료됩니다.',
      icon: Monitor,
      color: 'text-turf',
      bg: 'bg-turf/10',
      border: 'border-turf/20'
    },
    {
      id: '03',
      title: '통합 결제',
      desc: '그린피, 카트비, 그늘집 식음료까지. 모든 이용 내역이 하나로 통합되어 라운딩 종료 후 원터치로 정산됩니다.',
      icon: CreditCard,
      color: 'text-orange-400',
      bg: 'bg-orange-400/10',
      border: 'border-orange-400/20'
    },
    {
      id: '04',
      title: '데이터 분석',
      desc: '모든 데이터는 실시간으로 클라우드에 저장됩니다. 관리자 대시보드에서 매출, 내장객 추이, 재방문율을 분석하세요.',
      icon: BarChart3,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-24">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-turf/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-turf font-semibold tracking-wide uppercase text-sm mb-3">워크플로우</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            복잡한 운영을 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turf to-blue-500">단순한 흐름으로</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg break-keep">
            고객의 예약부터 관리자의 데이터 분석까지. <br />
            ClubManager는 끊김 없는(Seamless) 디지털 경험을 제공합니다.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-turf/20 to-purple-500/20 transform translate-y-4" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <FadeIn key={step.id} delay={index * 150} className="relative group">
                
                {/* Step Number Badge */}
                <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 border border-white/10 rounded-full items-center justify-center text-xs font-bold text-gray-500 z-10 group-hover:border-turf group-hover:text-turf transition-colors">
                  {step.id}
                </div>

                {/* Card */}
                <div className="h-full bg-slate-850/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 group-hover:border-white/10 relative overflow-hidden">
                  
                  {/* Hover Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${step.bg} rounded-full blur-[40px] -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100`} />

                  <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.border} border flex items-center justify-center mb-6 ${step.color}`}>
                    <step.icon size={24} />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    {step.title}
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 md:hidden" />
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed break-keep">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-700">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <FadeIn delay={600} className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 p-1 pl-4 pr-1 bg-white/5 rounded-full border border-white/10 hover:border-turf/50 transition-colors cursor-default">
            <span className="text-sm text-gray-300">이 모든 과정이 하나의 플랫폼에서</span>
            <span className="bg-turf text-midnight text-xs font-bold px-2 py-1 rounded-full">All-in-One</span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default HowItWorks;