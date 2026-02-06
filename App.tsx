import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FeatureDeepDive from './components/FeatureDeepDive';
import Benefits from './components/Benefits';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import HardwareContact from './components/HardwareContact';
import Footer from './components/Footer';
import WorkflowPage from './components/WorkflowPage';
import KioskPage from './components/KioskPage';
import CartControlPage from './components/CartControlPage';
import PaymentPage from './components/PaymentPage';
import GolftelPage from './components/GolftelPage';
import SuccessStoryPage from './components/SuccessStoryPage';
import FreeTrialPage from './components/FreeTrialPage';
import SwitchToCloudPage from './components/SwitchToCloudPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'workflow' | 'kiosk' | 'cartControl' | 'payment' | 'golftel' | 'successStory' | 'freeTrial' | 'switchToCloud'>('landing');

  // If workflow view is active, render only the workflow page
  if (currentView === 'workflow') {
    return <WorkflowPage onBack={() => setCurrentView('landing')} />;
  }

  // If kiosk view is active, render only the kiosk page
  if (currentView === 'kiosk') {
    return <KioskPage onBack={() => setCurrentView('landing')} />;
  }

  // If cart control view is active, render only the cart control page
  if (currentView === 'cartControl') {
    return <CartControlPage onBack={() => setCurrentView('landing')} />;
  }

  // If payment view is active, render only the payment page
  if (currentView === 'payment') {
    return <PaymentPage onBack={() => setCurrentView('landing')} />;
  }

  // If golftel view is active, render only the golftel page
  if (currentView === 'golftel') {
    return <GolftelPage onBack={() => setCurrentView('landing')} />;
  }

  // If success story view is active, render only the success story page
  if (currentView === 'successStory') {
    return <SuccessStoryPage onBack={() => setCurrentView('landing')} />;
  }

  // If free trial view is active, render only the free trial page
  if (currentView === 'freeTrial') {
    return <FreeTrialPage onBack={() => setCurrentView('landing')} />;
  }

  // If switch to cloud view is active, render only the switch to cloud page
  if (currentView === 'switchToCloud') {
    return <SwitchToCloudPage onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-midnight text-white overflow-x-hidden selection:bg-turf selection:text-white">
      <Navbar onShowFreeTrial={() => setCurrentView('freeTrial')} />
      <main>
        {/* Pass the handler to Hero to trigger workflow view and free trial */}
        <Hero 
          onShowWorkflow={() => setCurrentView('workflow')} 
          onShowFreeTrial={() => setCurrentView('freeTrial')}
        />
        
        <DashboardPreview />
        {/* Workflow Visualization (Summary on Landing Page) */}
        <HowItWorks />
        {/* High level overview (Bento Grid) - Pass handlers */}
        <Features 
          onShowKiosk={() => setCurrentView('kiosk')} 
          onShowCartControl={() => setCurrentView('cartControl')}
          onShowPayment={() => setCurrentView('payment')}
          onShowGolftel={() => setCurrentView('golftel')}
        />
        {/* Detailed feature breakdown */}
        <FeatureDeepDive />
        {/* Why Cloud / SaaS benefits */}
        <Benefits />
        {/* ROI and Comparison */}
        <Solutions 
          onShowSuccessStory={() => setCurrentView('successStory')} 
          onShowSwitchToCloud={() => setCurrentView('switchToCloud')}
        />
        <Testimonials />
        <Pricing />
        {/* Hardware & Contact Form */}
        <HardwareContact />
      </main>
      <Footer />
    </div>
  );
};

export default App;