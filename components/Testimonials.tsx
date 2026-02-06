import React from 'react';
import FadeIn from './ui/FadeIn';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "ClubManager는 우리 운영을 완전히 바꿨습니다. 관리 업무에서만 주당 20시간을 절약했고, 회원들은 새로운 예약 앱을 정말 좋아합니다.",
      author: "김*수",
      role: "총지배인, 파인 힐스 골프 클럽",
      image: "https://picsum.photos/60/60?random=1"
    },
    {
      quote: "우리 골프장을 위한 최고의 선택이었습니다. 도입 과정은 매끄러웠고, 지원팀은 정말 훌륭합니다.",
      author: "이*철",
      role: "골프 디렉터, 더 듄스",
      image: "https://picsum.photos/60/60?random=2"
    },
    {
      quote: "드디어 현대적인 느낌의 소프트웨어를 만났습니다. 데이터 인사이트 덕분에 3개월 만에 프로샵 매출이 15% 증가했습니다.",
      author: "황*수",
      role: "오너, 오크우드 컨트리 클럽",
      image: "https://picsum.photos/60/60?random=3"
    }
  ];

  return (
    <section className="py-24 bg-midnight relative">
      <div className="absolute inset-0 bg-slate-850/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            업계 리더들의 선택
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            수백 개의 선진 골프장들이 선택한 혁신적인 관리 경험을 만나보세요.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 100} className="bg-slate-850 p-8 rounded-2xl border border-white/5 relative">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
              <p className="text-gray-300 text-lg mb-8 leading-relaxed break-keep">"{review.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <div className="text-white font-semibold">{review.author}</div>
                  <div className="text-turf text-sm">{review.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;