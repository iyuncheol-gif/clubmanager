import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  onShowFreeTrial?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowFreeTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '기능', id: 'features' },
    { label: '솔루션', id: 'solutions' },
    { label: '요금', id: 'pricing' },
    { label: '하드웨어', id: 'hardware' },
    { label: '문의', id: 'contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed header (approx 100px)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-midnight/90 backdrop-blur-lg border-b border-white/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={scrollToTop}
        >
          <div className="bg-gradient-to-br from-turf to-turf-dark p-2 rounded-lg group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <LayoutGrid className="w-6 h-6 text-midnight" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Club<span className="text-turf">Manager</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-turf transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-semibold text-white hover:text-turf transition-colors">로그인</a>
          <Button size="sm" variant="primary" onClick={onShowFreeTrial}>무료 체험 시작</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-midnight border-b border-white/10 md:hidden animate-in slide-in-from-top-5 shadow-2xl">
          <div className="p-4 flex flex-col gap-4">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5 last:border-0"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <a href="#" className="text-center py-2 text-white font-semibold">로그인</a>
            <Button className="w-full" onClick={() => {
              onShowFreeTrial?.();
              setIsMobileMenuOpen(false);
            }}>무료 체험 시작</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;