
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Automatická extrakcia dát a posielanie formulárov",
      description: "automatizujte manuálne hľadanie dát a ich následné pracné vypĺňanie do formulárov pre stavebné úrady ",
      expandedDescription: "extrahujte dáta jedným klikom a majte pod kontrolou všetky Vaše žiadosti k scháleniu Vašej stavby. Ušetrite nie len čas, ale aj prostriedky, ktoré by ste minuli na komunikáciu s úradmi",
      icon: (
        <Layers size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Dynamická správa dokumentácie a dát",
      description: "Majte kompletný a End2End zabezpečený prehľad o všetkých dokumentoch a dátach k Vašej stavbe.",
      expandedDescription: "Sledujte a upravujte všetky dáta o Vašej stavbe dynamicky a bez nutnosti manuálneho odosielania formulárov",
      icon: (
        <Grid3x3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Integrácia v nástrojoch, ktoré už používate",
      description: "Prepojte svoju stavbu pomocou pluginov s nástrojmi, ktoré používate",
      expandedDescription: "automaticky extrahujte dáta nie len z dokumentácie, ale aj z nástrojov, ktoré už používate. Povolean sa integruje s vašimi obľúbenými nástrojmi ako sú Google Drive, Dropbox, OneDrive a ďalšie.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Generovanie sprievodných správ a technickej dokumentácie",
      description: "Na základe vyplnených dát môžete zároveň generovať dokumentáciu presne podľa pravidelne aktualizovaných stanovených štruktúr",
      expandedDescription: "Už nestrácajte čas prehľadávaním nutných štruktúr, pretože náš nástroj Vám umožní generovať všetky potrebné dokumenty a správy priamo z vyplnených dát. Všetko je automatizované a pripravené na odoslanie.",
      icon: (
        <ListCheck size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Multiplatformová aplikácia",
      description: "Spravujte svoje stavby, interagujte s úradmi bezpečne, pohodlne a rýchlo z akéhokoľvek zariadenia.",
      expandedDescription: "Vďaka jednotnej platforme môžete pristupovať k Vašim stavbám z akéhokoľvek zariadenia. Naše multiplatformové riešenie zabezpečuje, že Vaše dáta sú vždy dostupné a bezpečné.",
      icon: (
        <Star size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "AI asistent MILO",
      description: "Potrebujete pomôcť? Potrebujte automatizovať ešte viac?",
      expandedDescription: "Žiaden problém! MILO je tu pre Vás a najmodernejšími technológiami pomáha prepájať jednotlivé nástroje v rámci Povolean ekosystému, ako aj orientovať sa vpoužívaní platformy",
      icon: (
        <BookOpen size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">
            Šetrite čas minutý na administratívu a sústreďte sa na rast
          </h2>
          <p className="text-cosmic-muted text-lg text-white">
            Automatizujte, zjednodušte a majte o všetkom prehľad s veľkým dôrazom na bezpečnosť Vašich dát
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-white">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-gray-700 dark:text-white">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Zistite viac →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
