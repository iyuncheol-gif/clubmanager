import React, { useState, FormEvent, useEffect } from 'react';
import { X, Cloud, Database, Server, ArrowRight, CheckCircle2, Shield, RefreshCw, HardDrive, Network } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

interface SwitchToCloudPageProps {
  onBack: () => void;
}

const SwitchToCloudPage: React.FC<SwitchToCloudPageProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("마이그레이션 상담 신청이 접수되었습니다. 기술 팀이 24시간 내에 연락드립니다.");
      onBack();
    }, 1500);
  };

  const migrationSteps = [
    {
      icon: Database,
      title: "1. 데이터 진단",
      desc: "기존 DB 구조를 분석하고 데이터 무결성을 점검합니다."
    },
    {
      icon: Server,
      title: "2. 마이그레이션 설계",
      desc: "다운타임 최소화를 위한 단계별 이전 계획을 수립합니다."
    },
    {
      icon: RefreshCw,
      title: "3. 데이터 이관",
      desc: "암호화된 터널을 통해 안전하게 클라우드로 데이터를 전송합니다."
    },
    {
      icon: CheckCircle2,
      title: "4. 검증 및 오픈",
      desc: "데이터 정합성 검증 후 시스템을 즉시 오픈합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative z-50 animate-in fade-in duration-500 flex flex-col font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-white/10 bg-midnight/50 backdrop-blur-md sticky top-0 z-50">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>
            <span className="font-display font-bold text-lg">ClubManager Cloud Migration</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
             <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Cloud size={14} className="text-blue-400" />
                  <span className="text-xs font-bold text-blue-400 tracking-wide uppercase">Seamless Transition</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  레거시 서버에서 <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-turf">클라우드로의 안전한 이사</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed break-keep">
                  데이터 손실 걱정 없이 ClubManager SaaS로 전환하세요. <br/>
                  전문 엔지니어가 처음부터 끝까지 마이그레이션을 책임집니다.
                </p>
             </FadeIn>
          </div>

          {/* Visual Metaphor */}
          <FadeIn delay={100} className="mb-24">
             <div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                {/* Left: On-Premise */}
                <div className="relative z-10 text-center opacity-60">
                   <div className="w-24 h-24 bg-slate-800 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-white/10">
                      <HardDrive size={40} className="text-gray-500" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-400">On-Premise</h3>
                   <p className="text-sm text-gray-600">로컬 서버 & 수동 백업</p>
                </div>

                {/* Center: Transition Arrow */}
                <div className="relative z-10 flex-1 flex flex-col items-center">
                   <div className="w-full h-1 bg-gradient-to-r from-gray-700 via-blue-500 to-turf rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-4">
                         <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                            <ArrowRight className="text-white" />
                         </div>
                      </div>
                   </div>
                   <div className="mt-4 text-center">
                      <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">데이터 자동 이관</span>
                   </div>
                </div>

                {/* Right: Cloud */}
                <div className="relative z-10 text-center">
                   <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-turf rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl shadow-blue-500/20 border border-white/20">
                      <Cloud size={40} className="text-white" />
                   </div>
                   <h3 className="text-xl font-bold text-white">Cloud SaaS</h3>
                   <p className="text-sm text-gray-400">자동 확장 & 실시간 백업</p>
                </div>

             </div>
          </FadeIn>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
             {migrationSteps.map((step, i) => (
                <FadeIn key={i} delay={200 + (i * 100)} className="bg-white/5 p-6 rounded-2xl border border-white/5 relative group hover:bg-white/10 transition-colors">
                   <div className="absolute top-6 right-6 text-4xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">{i+1}</div>
                   <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                      <step.icon size={24} />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                   <p className="text-sm text-gray-400 leading-relaxed break-keep">{step.desc}</p>
                </FadeIn>
             ))}
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <FadeIn delay={400}>
                <h2 className="text-3xl font-display font-bold text-white mb-6">자주 묻는 질문</h2>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                         <Shield className="text-turf w-5 h-5" /> 데이터는 안전한가요?
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed pl-7">
                         네, 모든 데이터는 이관 중 256비트 암호화 처리되며, 완료 후 원본 데이터와 100% 일치하는지 무결성 검증을 수행합니다.
                      </p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                         <Network className="text-blue-400 w-5 h-5" /> 운영 중단이 발생하나요?
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed pl-7">
                         야간 시간대를 활용하여 다운타임을 제로에 가깝게 최소화합니다. 영업에 지장을 주지 않고 전환이 가능합니다.
                      </p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                         <HardDrive className="text-purple-400 w-5 h-5" /> 과거 데이터도 옮겨지나요?
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed pl-7">
                         최근 10년 치 회원 정보, 내장객 기록, 매출 데이터를 모두 이관해드립니다. 레거시 데이터 분석 서비스도 제공합니다.
                      </p>
                   </div>
                </div>
             </FadeIn>

             <FadeIn delay={500} className="bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">마이그레이션 상담 신청</h3>
                <p className="text-gray-400 text-sm mb-6">현재 시스템 환경을 알려주시면 전환 계획을 제안해드립니다.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">골프장 / 회사명</label>
                      <input required type="text" className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="군산 CC" />
                   </div>
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">담당자 연락처</label>
                      <input required type="text" className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="010-0000-0000" />
                   </div>
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">현재 사용중인 ERP</label>
                      <select className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors appearance-none">
                         <option>선택해주세요</option>
                         <option>자체 구축 (On-Premise)</option>
                         <option>타사 로컬 ERP</option>
                         <option>엑셀 / 수기 관리</option>
                         <option>기타</option>
                      </select>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                   >
                      {isSubmitting ? '접수 중...' : '무료 진단 신청하기'} <ArrowRight size={18} />
                   </button>
                </form>
             </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SwitchToCloudPage;