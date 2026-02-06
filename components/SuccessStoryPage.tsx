import React, { useEffect } from 'react';
import { X, TrendingUp, Users, Clock, Quote, CheckCircle2 } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

interface SuccessStoryPageProps {
  onBack: () => void;
}

const SuccessStoryPage: React.FC<SuccessStoryPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col font-sans">
       {/* Header */}
       <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-turf animate-pulse"/>
             <span className="font-display font-bold text-lg">성공 사례: 군산 CC</span>
          </div>
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <span>닫기</span>
            <X className="w-5 h-5" />
          </button>
       </div>

       <div className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <FadeIn>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-turf/10 border border-turf/20 mb-6">
                    <span className="text-xs font-bold text-turf tracking-wide uppercase">Case Study</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                      디지털 전환으로 <br/>
                      <span className="text-turf">연간 2억 원의 운영 비용</span>을 절감하다
                  </h1>
                  <p className="text-xl text-gray-400 max-w-3xl leading-relaxed break-keep">
                      국내 최대 규모인 81홀을 자랑하는 '군산 CC'는 노후화된 레거시 시스템으로 인한 비효율성과 싸우고 있었습니다. ClubManager 도입 후, 그들은 운영 방식을 완전히 혁신했습니다.
                  </p>
              </FadeIn>
          </section>

          {/* Metrics Grid */}
          <section className="border-y border-white/5 bg-white/[0.02]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <FadeIn delay={100} className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                          <div className="w-12 h-12 bg-turf/10 rounded-xl flex items-center justify-center mb-4 text-turf">
                              <TrendingUp size={24} />
                          </div>
                          <div className="text-4xl font-bold text-white mb-2">+30%</div>
                          <div className="text-gray-400">프로샵 및 F&B 매출 증가</div>
                      </FadeIn>
                      <FadeIn delay={200} className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                              <Clock size={24} />
                          </div>
                          <div className="text-4xl font-bold text-white mb-2">-90%</div>
                          <div className="text-gray-400">체크인 대기 시간 단축</div>
                      </FadeIn>
                      <FadeIn delay={300} className="p-6 rounded-2xl bg-slate-900 border border-white/5">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                              <Users size={24} />
                          </div>
                          <div className="text-4xl font-bold text-white mb-2">4.8/5.0</div>
                          <div className="text-gray-400">고객 만족도 점수 (도입 전 3.2)</div>
                      </FadeIn>
                  </div>
              </div>
          </section>

          {/* Narrative Content */}
          <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
              {/* Challenge */}
              <FadeIn>
                  <h3 className="text-turf font-bold uppercase tracking-wider mb-4 text-sm">The Challenge</h3>
                  <h2 className="text-3xl font-bold text-white mb-6">파편화된 시스템과 수작업의 한계</h2>
                  <div className="prose prose-invert prose-lg text-gray-400">
                      <p className="mb-4 text-lg leading-relaxed">
                          군산 CC의 프론트 데스크는 주말마다 전쟁터 같았습니다. 예약 시스템, POS, 그리고 락커 관리 시스템이 서로 연동되지 않아 직원들은 엑셀 시트에 수기로 정보를 옮겨 적어야 했습니다.
                      </p>
                      <ul className="space-y-4 list-none pl-0 mt-6">
                          <li className="flex gap-3 items-start bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <X className="text-red-500 mt-1 shrink-0" size={20} /> 
                            <span><strong className="text-white">긴 대기 시간:</strong> 고객 도착 시 예약 확인에만 평균 3분 소요, 주말 오전 로비 혼잡 극심</span>
                          </li>
                          <li className="flex gap-3 items-start bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <X className="text-red-500 mt-1 shrink-0" size={20} /> 
                            <span><strong className="text-white">예약 손실:</strong> 전화 예약 폭주로 인한 통화 연결 실패율 40%에 육박</span>
                          </li>
                          <li className="flex gap-3 items-start bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <X className="text-red-500 mt-1 shrink-0" size={20} /> 
                            <span><strong className="text-white">정산 오류:</strong> 라운딩 종료 후 그늘집 이용 내역 누락 및 정산 대기 줄 발생</span>
                          </li>
                      </ul>
                  </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn>
                  <h3 className="text-turf font-bold uppercase tracking-wider mb-4 text-sm">The Solution</h3>
                  <h2 className="text-3xl font-bold text-white mb-6">ClubManager 올인원 플랫폼 도입</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      경영진은 부분적인 수정이 아닌, 클라우드 기반의 전면적인 디지털 전환을 결정했습니다. ClubManager 도입은 단 2주 만에 완료되었으며, 별도의 하드웨어 교체 없이 진행되었습니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-turf/30 transition-colors">
                          <h4 className="font-bold text-white mb-2 text-lg">무인 키오스크 배치</h4>
                          <p className="text-sm text-gray-400 leading-relaxed">로비에 10대의 키오스크를 설치하여 100% 셀프 체크인/체크아웃 환경을 구축했습니다.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-turf/30 transition-colors">
                          <h4 className="font-bold text-white mb-2 text-lg">통합 모바일 앱</h4>
                          <p className="text-sm text-gray-400 leading-relaxed">회원들이 예약부터 스코어 기록, 결제까지 하나의 앱으로 처리하도록 통합했습니다.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-turf/30 transition-colors">
                          <h4 className="font-bold text-white mb-2 text-lg">스마트 카트 관제</h4>
                          <p className="text-sm text-gray-400 leading-relaxed">태블릿 GPS를 통해 경기 진행 속도를 실시간 모니터링하고 병목 구간을 해소했습니다.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-turf/30 transition-colors">
                          <h4 className="font-bold text-white mb-2 text-lg">자동 정산 시스템</h4>
                          <p className="text-sm text-gray-400 leading-relaxed">모든 비용이 실시간으로 합산되어 퇴장 시 원클릭(One-Click) 결제를 구현했습니다.</p>
                      </div>
                  </div>
              </FadeIn>
              
              {/* Quote Block */}
              <FadeIn className="my-12">
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-white/10 shadow-2xl">
                      <Quote className="absolute top-8 left-8 text-turf/20 w-16 h-16" />
                      <blockquote className="relative z-10 text-xl md:text-2xl font-medium text-white leading-relaxed text-center mb-8 break-keep">
                          "ClubManager 도입 후 가장 큰 변화는 직원들의 표정입니다. 단순 반복 업무에서 해방되어, 고객 서비스에 집중할 수 있게 되었습니다. 이것이 바로 우리가 찾던 혁신입니다."
                      </blockquote>
                      <div className="text-center">
                          <div className="font-bold text-white text-lg">James Kim</div>
                          <div className="text-turf text-sm font-medium">군산 CC 총지배인</div>
                      </div>
                  </div>
              </FadeIn>

              {/* Result */}
              <FadeIn>
                  <h3 className="text-turf font-bold uppercase tracking-wider mb-4 text-sm">The Result</h3>
                  <h2 className="text-3xl font-bold text-white mb-6">놀라운 성과와 미래</h2>
                  <div className="prose prose-invert prose-lg text-gray-400">
                      <p className="mb-6 text-lg leading-relaxed">
                          도입 3개월 후, 군산 CC는 '지역 내 가장 편리한 골프장'으로 선정되었습니다. 노쇼(No-Show) 비율은 선결제 시스템 도입으로 0%에 가깝게 줄어들었고, 자동화된 마케팅 메시지 덕분에 재방문율이 급상승했습니다.
                      </p>
                      <ul className="space-y-3 list-none pl-0">
                          <li className="flex items-center gap-4 bg-slate-900/30 p-3 rounded-lg border border-white/5">
                            <div className="bg-turf/20 p-2 rounded-full"><CheckCircle2 className="text-turf shrink-0" size={18} /></div>
                            <div>
                                <span className="text-white font-bold block">운영 인력 효율화</span>
                                <span className="text-sm">프론트 인원 2명 감축 및 서비스 부서로 재배치</span>
                            </div>
                          </li>
                          <li className="flex items-center gap-4 bg-slate-900/30 p-3 rounded-lg border border-white/5">
                            <div className="bg-turf/20 p-2 rounded-full"><CheckCircle2 className="text-turf shrink-0" size={18} /></div>
                            <div>
                                <span className="text-white font-bold block">매출 증대</span>
                                <span className="text-sm">스마트 오더 시스템으로 그늘집 매출 45% 상승</span>
                            </div>
                          </li>
                          <li className="flex items-center gap-4 bg-slate-900/30 p-3 rounded-lg border border-white/5">
                            <div className="bg-turf/20 p-2 rounded-full"><CheckCircle2 className="text-turf shrink-0" size={18} /></div>
                            <div>
                                <span className="text-white font-bold block">데이터 자산화</span>
                                <span className="text-sm">고객 행동 데이터 기반의 맞춤형 프로모션 진행</span>
                            </div>
                          </li>
                      </ul>
                  </div>
              </FadeIn>
          </section>

          {/* CTA Footer */}
          <section className="py-20 bg-gradient-to-b from-slate-900 to-midnight border-t border-white/5">
              <div className="max-w-4xl mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">다음 성공 사례의 주인공이 되어보세요</h2>
                  <p className="text-gray-400 mb-8 text-lg break-keep">
                      ClubManager가 귀하의 골프장을 어떻게 변화시킬 수 있는지 보여드리겠습니다. <br/>
                      지금 바로 무료 데모를 신청하고 맞춤형 컨설팅을 받아보세요.
                  </p>
                  <Button size="lg" onClick={onBack}>
                      지금 무료 상담 신청하기
                  </Button>
              </div>
          </section>
       </div>
    </div>
  );
};

export default SuccessStoryPage;