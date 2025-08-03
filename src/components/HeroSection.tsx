import React, { useState, useEffect, useRef } from 'react';
// ...existing code...
import { Button } from '@/components/ui/button';
import TaskBoard from './TaskBoard';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isPipelineVisible, setIsPipelineVisible] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);

  const dynamicLines = [
    "...podať žiadosť o záväzné stanovisko",
    "...efektívne generovať dokumentáciu podľa zákona",
    "...nahrať dokumentáciu k mojej stavbe",
    "...získať doložku k súladu o zmene stavby",
    "...AI asistenta k normám a stavebnému zákonu",
    "...mať bezpečne usporiadanú dokumentáciu",
    "...plugin pre automatickú tvorbu sprievodných správ",
    "...získať prehľad o stavebnom konaní",
    "...automaticky generovať sprievodnú správu",
    "...vypĺňať formuláre pre úrad jedným klikom",
    "...prepojiť Revit, Archicad alebo Autocad s Povoleanom"
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPipelineVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (pipelineRef.current) {
      observer.observe(pipelineRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden min-h-screen">
      {/* Logo above heading */}
      <div className="mb-8 flex justify-center">
        <img src="/logo_povolean.png" alt="Povolean Logo" className="h-16 w-auto drop-shadow-lg" />
      </div>
      {/* Dynamic Text Effect - Main Heading */}
      <div className={`hero-dynamic-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="hero-static">Potrebujem...&nbsp;</span>
        <span className="hero-dynamic">
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
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-white"></span>
            AI platforma pre celý stavebný sektor
            <Loader className="h-3 w-3 animate-spin text-white" />
          </span>
        </div>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance">
        pomáhame všetkým účastníkom stavebného priemyslu šetriť čas a urýchľovať schvaľovacie procesy, ako aj adaptovať sa na nový stavebný zákon.
         </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button 
            className="bg-white text-black hover:bg-white/90 text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
            onClick={() => window.open('https://povolean.vercel.app', '_blank')}
          >
            Začnime
          </Button>
          <Button variant="outline" className="border-white/30 bg-white text-black hover:bg-white/90 text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
          onClick={() => window.open('https://www.linkedin.com/company/povolean', '_blank')}>
            Kontakt
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-white/60">
          Demo na vyžiadanie • Pridajte sa k testovaniu MVP
        </div>
      </div>
      
      {/* Task Manager UI integrated in hero section with glassmorphic effect */}
      <div 
        ref={pipelineRef}
        className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isPipelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg flex items-center justify-center" style={{ height: 600 }}>
          <img 
            src="/UI_preview.png" 
            alt="UI Preview" 
            className="max-w-full max-h-full" 
            style={{ borderRadius: 'inherit', display: 'block', margin: 'auto' }}
          />
        </div>
      </div>
    </section>;
};
export default HeroSection;