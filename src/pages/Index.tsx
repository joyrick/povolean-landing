import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Sluzby from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <Header />
      <main>
        <HeroSection />
        
        <Sluzby />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
