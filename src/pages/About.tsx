import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main About Section */}
      <section className="relative w-full py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Text Content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground mb-6 text-center">
                  Kto sme
                </h1>
                <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
                  <p>
                    Vďaka tomu, že pochádzame z prostredia stavebného sektoru rozumieme potrebám účastníkov stavebných konaní a iných súčastí priemyslu. </p>
                  <p>
                    Náš startup sa venuje prieskumu stavebnému sektoru a následnému vývoju služieb v rámci našej platformy, ktoré pomáhajú stavebníkom nie len s byrokraciou, ale aj bezpečnosťou a prehľadnosťou svojich dát.</p>
                  <p>
                    Sme presvedčení, že moderné technológie a hlavne riešenie tých správnych problémov dokážu zmeniť celý stavebný sektor k lepšiemu. </p>
                  <p>
                    Náš tím kombinuje znalosti stavebnej legislatívy s najmodernejšími AI technológiami a vysokou mierou flexibility, aby sme vytvorili riešenie, ktoré skutočne funguje v praxi.
                  </p>
                </div>
              </div>
               {/* Team Profiles */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-foreground text-center">Náš tím</h3>
            
            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src="/tony.jpeg" 
                    alt="Anton Kuchťák" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">Anton Kuchťák</h4>
                <p className="text-sm text-foreground/60">CEO & Co-founder</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src="/Jorik.jpeg" 
                    alt="Jorik Veselko" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">Jorik Veselko</h4>
                <p className="text-sm text-foreground/60">CEO & Co-Founder</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src="/Zoli.jpeg" 
                    alt="Zoltán Raffay" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-2">Zoltán Raffay</h4>
                <p className="text-sm text-foreground/60">CTO and Innovation specialist</p>
              </div>
            </div>
            
          </div>
              
              {/* Team Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-foreground">Naše hodnoty</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Efektívnosť</h4>
                    <p className="text-sm text-foreground/70">Automatizujeme tam, kde to má zmysel a kde naše prieskumy ukazujú, že je na to najväčší potenciál</p>
                  </div>
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Flexibilita</h4>
                    <p className="text-sm text-foreground/70">Našou prioritou je komunikácia s odborníkmi a hlavne zákazníkmi, pričom sa snažíme adresovať ich problémy a spríjemňovať ich prácu.</p>
                  </div>
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Bezpečnosť</h4>
                    <p className="text-sm text-foreground/70">Súkromie a ochrana Vašich dát sú nevyhnutnou súčasťou všetkých služieb v rámci Povolean platformy</p>
                  </div>
                  <div className="cosmic-glass rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Inovácia</h4>
                    <p className="text-sm text-foreground/70">Majte v rukách najmodernejšie technológie na mieru ušité pre potreby účastníkov stavebného sektoru.</p>
                  </div>
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
            kde sa každý projekt realizuje efektívne, bezpečne a v súlade s najnovšími predpismi.
          </p>
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
             Povolean - menej hľadania, viac kreativity
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
