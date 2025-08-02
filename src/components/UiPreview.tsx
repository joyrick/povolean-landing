import React, { useState, useEffect } from 'react';

const UiPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('dashboard');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="dashboard" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-cosmic-darker/70 shadow-[0_0_15px_rgba(203,255,77,0.15)] transition-all duration-1000 delay-300 flex items-center justify-center" style={{ height: 500 }}>
          <img 
            src="/UI_preview.png" 
            alt="UI Preview" 
            className="object-cover w-full h-full" 
            style={{ borderRadius: 'inherit' }}
          />
        </div>
      </div>
    </section>
  );
};

export default UiPreview;
