import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main About Section */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6">
                  Kto sme
                </h1>
                <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
                  <p>
                    Sme tím odborníkov z oblasti stavebníctva, technológií a legislatívy, ktorí sa rozhodli revolucionizovať spôsob, akým funguje stavebný sektor na Slovensku.
                  </p>
                  <p>
                    Naša vízia je jasná: vytvoriť platformu, ktorá eliminuje zbytočnú byrokraciu a umožní všetkým účastníkom stavebného procesu sústrediť sa na to, čo je skutočne dôležité - kvalitné a efektívne stavebníctvo.
                  </p>
                  <p>
                    Povolean vznikol z frustrácie z neefektívnych procesov a endless papierovaní, ktoré každodenne spomaľujú stavebné projekty. Veríme, že technológie môžu dramaticky zlepšiť túto situáciu.
                  </p>
                  <p>
                    Náš tím kombinuje hlboké znalosti stavebnej legislatívy s najmodernejšími AI technológiami, aby sme vytvorili riešenie, ktoré skutočne funguje v praxi.
                  </p>
                </div>
              </div>
              
              {/* Team Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-foreground">Naše hodnoty</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Efektívnosť</h4>
                    <p className="text-sm text-foreground/70">Automatizujeme všetko, čo sa dá automatizovať</p>
                  </div>
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Transparentnosť</h4>
                    <p className="text-sm text-foreground/70">Všetky procesy sú jasné a sledovateľné</p>
                  </div>
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Bezpečnosť</h4>
                    <p className="text-sm text-foreground/70">Vaše dáta sú v bezpečí na prvom mieste</p>
                  </div>
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Inovácia</h4>
                    <p className="text-sm text-foreground/70">Neustále hľadáme lepšie riešenia</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image/Visual Content */}
            <div className="relative">
              <div className="cosmic-glow rounded-2xl overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {/* Placeholder for team photo - you can replace this with an actual image */}
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/30 mx-auto flex items-center justify-center">
                      <span className="text-3xl">👥</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-medium text-foreground">Povolean Team</h4>
                      <p className="text-foreground/60">Architekt budúcnosti stavebníctva</p>
                    </div>
                  </div>
                  {/* 
                  Replace the above placeholder with:
                  <img 
                    src="/team-photo.jpg" 
                    alt="Povolean Team" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center cosmic-glass rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-foreground/60">Projektov</div>
                </div>
                <div className="text-center cosmic-glass rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">80%</div>
                  <div className="text-sm text-foreground/60">Úspora času</div>
                </div>
                <div className="text-center cosmic-glass rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-foreground/60">Podpora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="w-full py-16 px-6 md:px-12 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Naša misia
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Transformovať stavebný sektor prostredníctvom inteligentnej automatizácie a vytvoriť ekosystém, 
            kde sa každý projekt realizuje efektívne, transparentne a v súlade s najnovšími predpismi.
          </p>
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              Budujeme budúcnosť stavebníctva dnes
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
