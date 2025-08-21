import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Sluzby from '@/components/Pricing';
import ExtractionSection from '@/components/ExtractionSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <Header />
      <main>
        <HeroSection />
        
   
        <ExtractionSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
