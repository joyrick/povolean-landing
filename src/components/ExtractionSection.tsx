import React from 'react';
import { Button } from '@/components/ui/button';

const ExtractionSection = () => (
  <section id="extrakcia" className="w-full py-28 md:py-32 px-6 md:px-12 bg-card transition-colors">
    <div className="max-w-8xl mx-auto space-y-16">
      {/* Section: Extrakcia formulárov */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Extrakcia formulárov</h3>
          <p className="text-muted-foreground mb-6">
            Automatizovaná extrakcia dát z formulárov a tabuliek – bez nutnosti manuálneho prepisovania.
            Naše modely rozpoznávajú polia, hodnoty a kontext i v rôzne štrukturovaných dokumentoch.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-foreground">Rozpoznávanie polí a tabuliek</h4>
              <p className="text-muted-foreground">
                Extrahujeme štruktúrované polia (názvy, množstvá, jednotky, poznámky) z PDF alebo naskenovaných formulárov
                a vraciame ich vo formáte pripravenom na import do systémov alebo ďalšie spracovanie.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground">Normalizácia a validácia</h4>
              <p className="text-muted-foreground">
                Dáta normalizujeme (formáty dátumov, jednotky, číselne hodnoty) a poskytujeme základnú validáciu pre
                okamžitú použiteľnosť v pracovných procesoch.
              </p>
            </div>
          </div>

   
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-xl rounded-xl overflow-hidden border border-border shadow-sm bg-card" style={{ aspectRatio: '16/10' }}>
            <img src="/UI2.png" alt="Extrakcia formulárov" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Section: Generovanie textovej dokumentácie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1 flex justify-center">
          <div className="w-full max-w-xl rounded-xl overflow-hidden border border-border shadow-sm bg-card" style={{ aspectRatio: '16/10' }}>
            <img src="/UI3.png" alt="Generovanie dokumentácie" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="order-2 md:order-2">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Generovanie textovej dokumentácie</h3>
          <p className="text-muted-foreground mb-6">
            Na základe extrahovaných dát automaticky vytvárame zrozumiteľnú technickú a administratívnu dokumentáciu —
            od krátkych súhrnov po kompletné zápisky pripravené na tlač alebo archiváciu.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-foreground">Súhrny a reporty</h4>
              <p className="text-muted-foreground">
                Generujeme koncové súhrny, pracovné reporty a kontrolné zoznamy prispôsobené vašim interným štandardom.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground">Kompletné protokoly</h4>
              <p className="text-muted-foreground">
                Vytvoríme kompletné protokoly a zápisky, ktoré môžete priamo zdieľať, tlačiť alebo ukladať do archivácie.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a href="#kontakt">
              <Button variant="default" className="!text-white hover:!text-black dark:hover:!text-white">Požiadať o demo</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExtractionSection;
