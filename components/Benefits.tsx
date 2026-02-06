import React from 'react';
import { Cloud, RefreshCw, Globe } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-midnight to-slate-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">왜 ClubManager SaaS인가?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            골프 관리의 미래는 클라우드 네이티브입니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <FadeIn delay={0} className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6 border border-blue-500/20">
              <Cloud className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">서버 비용 제로</h3>
            <p className="text-gray-400 leading-relaxed break-keep">
              비싼 전산실, 냉각 시스템, IT 유지보수는 잊으세요. 안전한 클라우드에서 운영되며 필요에 따라 자동으로 확장됩니다.
            </p>
          </FadeIn>

          <FadeIn delay={100} className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-turf/20 to-green-600/20 flex items-center justify-center mb-6 border border-turf/20">
              <RefreshCw className="w-8 h-8 text-turf" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">항상 최신 상태</h3>
            <p className="text-gray-400 leading-relaxed break-keep">
              업그레이드 비용을 더 이상 지불하지 마세요. 최신 기능, 보안 패치, 성능 개선이 수동 설치 없이 자동으로 적용됩니다.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-6 border border-purple-500/20">
              <Globe className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">어디서나 접속 가능</h3>
            <p className="text-gray-400 leading-relaxed break-keep">
              어디서든 완벽하게 제어하세요. 집, 이동 중, 혹은 모바일로 코스 상태를 모니터링하고 매출을 확인하며 직원을 관리하세요.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Benefits;