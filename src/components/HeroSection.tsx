import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const dynamicLines = [
    "...tvoríme AI riešenia na mieru",
    "...optimalizujeme tvorbu dokumentácie podľa akejkoľvek štruktúry",
    "...automaticky extrahujeme informácie a zabezpečujeme korešpondenciu v dátach",
    "...pomáhame automaticky zlepšovať formulácie a štruktúry dokumentov",
    "...pomáhame adaptácii na nové legislatívne zmeny",
    "...redukujeme čas minutý na byrokraciu",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % dynamicLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [dynamicLines.length]);

  return <section id="domov" className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden min-h-screen">
      {/* Logo above heading
      <div className="mb-8 flex justify-center">
        <img src="/logo_povolean.png" alt="Povolean Logo" className="h-16 w-auto drop-shadow-lg" />
      </div>  */}
      {/* Dynamic Text Effect - Main Heading */}
      <div className={`hero-dynamic-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="hero-static text-3xl md:text-4xl">Meníme stavebný sektor a <br /> šetríme čas jeho účastníkom...&nbsp;</span>
        <span className="hero-dynamic text-sm md:text-base">
          {dynamicLines.map((line, index) => (
            <span 
              key={index}
              className={`hero-line ${
                index === currentLine ? 'active' : 
                index < currentLine ? 'prev' : 'next'
              }`}
            >
              {line}
            </span>
          ))}
        </span>
      </div>

      {/* Secondary content below */}
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform mt-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
       
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance">
        Najmodernejšie riešenia na mieru s platformou pre optimalizáciu schvaľovacích procesov a stavebných povolení.
         </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">

          <Button variant="outline" className="border-white/30 bg-white text-black hover:bg-white/90 hover:!text-black dark:hover:!text-white text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
          onClick={() => window.open('https://www.linkedin.com/company/povolean', '_blank')}>
            Kontakt
          </Button>
          <Button
            variant="default"
            className="text-white bg-white/10 hover:bg-white/20 hover:!text-black dark:hover:!text-white text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Zavolajte nám"
          >
            Zavolajte nám!
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-white/60">
          
        </div>
      </div>
    </section>
};

export default HeroSection;