import React, { useEffect, useState, useRef } from 'react';
import { Smartphone, QrCode, Utensils, Hotel, CreditCard, MessageCircle, X, ArrowDown, Check } from 'lucide-react';
import Button from './ui/Button';

interface WorkflowPageProps {
  onBack: () => void;
}

const WorkflowPage: React.FC<WorkflowPageProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      title: "모바일 예약",
      time: "D-7 09:00",
      desc: "고객이 전용 앱에서 티타임을 예약합니다. AI가 선호하는 시간대와 최적의 요금을 제안합니다.",
      icon: Smartphone,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      alert: "예약 확정 알림"
    },
    {
      id: 2,
      title: "키오스크 체크인",
      time: "D-Day 08:30",
      desc: "골프장 도착 시 프론트를 거치지 않고 키오스크에서 QR 체크인을 완료합니다. 락커와 카트가 자동 배정됩니다.",
      icon: QrCode,
      color: "text-turf",
      bg: "bg-turf/10",
      alert: "락커번호: 104 발송"
    },
    {
      id: 3,
      title: "식당 & 그늘집 주문",
      time: "09:30 & 11:30",
      desc: "대기 시간 없이 앱이나 태블릿으로 미리 주문합니다. 식사 내역은 락커 키나 앱으로 자동 적립됩니다.",
      icon: Utensils,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      alert: "주문 접수 완료"
    },
    {
      id: 4,
      title: "골프텔 숙박",
      time: "14:00 체크인",
      desc: "1박 2일 패키지 고객을 위한 원스톱 체크인. 라운딩 후 별도 절차 없이 바로 객실로 이동합니다.",
      icon: Hotel,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      alert: "모바일 객실 키 전송"
    },
    {
      id: 5,
      title: "원터치 결제",
      time: "라운딩 종료",
      desc: "프론트 대기 없이 앱에서 '모두 결제'를 누르거나 키오스크에서 정산합니다. N분의 1 정산도 지원합니다.",
      icon: CreditCard,
      color: "text-green-500",
      bg: "bg-green-500/10",
      alert: "결제 완료"
    },
    {
      id: 6,
      title: "알림톡 발송",
      time: "귀가 후",
      desc: "전자 영수증이 카카오톡으로 발송되며, 스코어 분석 리포트가 앱에 업데이트됩니다.",
      icon: MessageCircle,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      alert: "전자 영수증 도착"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.6;
      
      stepsRef.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < triggerPoint) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-midnight text-white relative z-50 animate-in fade-in duration-500">
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
             <span className="font-display font-bold text-lg">ClubManager 시뮬레이션</span>
          </div>
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <span>닫기</span>
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-32 pb-32">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
            고객의 하루를 <br/> <span className="text-turf">경험해보세요</span>
          </h1>
          <p className="text-gray-400 text-lg">스크롤하여 여정을 따라가세요</p>
          <div className="mt-8 flex justify-center animate-bounce text-gray-500">
            <ArrowDown />
          </div>
        </div>

        {/* Use flex-col to ensure container height includes margins, preventing timeline gap */}
        <div className="relative flex flex-col">
          {/* Vertical Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2 rounded-full" />
          
          {/* Active Line (Progress) */}
          <div 
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-turf to-turf-dark transform md:-translate-x-1/2 rounded-full transition-all duration-500 ease-out"
            style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step, index) => {
            const isActive = index <= activeStep;
            const isLast = index === steps.length - 1;

            return (
              <div 
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 transition-all duration-700 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'
                } ${isLast ? 'mb-12' : 'mb-24 md:mb-32'}`}
              >
                {/* Left Side (Time/Meta) */}
                <div className="md:w-1/2 md:text-right pl-16 md:pl-0 md:pr-12 order-2 md:order-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 border ${isActive ? 'bg-white/10 border-turf/50 text-white' : 'border-white/10 text-gray-500'}`}>
                    {step.time}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-500'}`}>{step.title}</h3>
                  <p className="text-gray-400 text-sm break-keep leading-relaxed hidden md:block">
                    {step.desc}
                  </p>
                </div>

                {/* Center Icon Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center justify-center z-10 order-1">
                  <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'bg-midnight border-turf shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110' 
                      : 'bg-slate-900 border-gray-700 grayscale'
                  }`}>
                    <step.icon className={`w-6 h-6 ${isActive ? step.color : 'text-gray-600'}`} />
                  </div>
                </div>

                {/* Right Side (Visual Card) */}
                <div className="w-full md:w-1/2 pl-16 md:pl-12 order-3">
                  <div className="md:hidden mb-4">
                     <p className="text-gray-400 text-sm break-keep leading-relaxed">
                        {step.desc}
                     </p>
                  </div>

                  {/* Mockup Card */}
                  <div className={`bg-slate-800/80 backdrop-blur border rounded-2xl p-5 transition-all duration-500 ${
                    isActive ? 'border-turf/30 shadow-xl' : 'border-white/5'
                  }`}>
                    {/* Simulated Notification / UI */}
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? step.bg || 'bg-white/10' : 'bg-gray-700'}`}>
                         {index === 5 ? <MessageCircle size={20} className={isActive ? 'text-yellow-400' : 'text-gray-500'} /> : 
                          <step.icon size={20} className={isActive ? step.color : 'text-gray-500'} />
                         }
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <span className="text-xs font-bold text-gray-300">ClubManager App</span>
                           <span className="text-[10px] text-gray-500">방금 전</span>
                        </div>
                        <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>
                          {step.alert}
                        </div>
                        {isActive && (
                          <div className="mt-2 text-xs text-turf flex items-center gap-1">
                            <Check size={10} /> 처리 완료
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Final Call to Action - Changed pt-0 to pt-12 to add spacing between line and text */}
        <div className={`text-center pt-12 pb-20 transition-all duration-1000 ${activeStep === steps.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            이 모든 과정이 <br/> <span className="text-turf">자동으로</span> 이루어집니다.
          </h2>
          <Button size="lg" onClick={onBack}>
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowPage;