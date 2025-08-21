import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <img src="/logo_povolean.png" alt="Povolean Logo" className="h-8 w-auto" />
            <p className="text-muted-foreground max-w-xs">
              Povolean © AI platforma od stavebníkov, pre stavebníkov • Menej hľadania, viac kreativity.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/108007018" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/povolean/" aria-label="Instagram" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="18.2" cy="5.8" r="0.6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Produkt</h4>
            <ul className="space-y-3">
              <li><a href="#extrakcia" className="text-muted-foreground hover:text-foreground transition-colors">Funkcie</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Pluginy a integrácie</a></li>
              <li><a href="#sluzby" className="text-muted-foreground hover:text-foreground transition-colors">Služby</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Aktualizuácie</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Naša roadmapa</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Spoločnosť</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">O nás</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Kariéra</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Novinky</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Zdroje</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Dokumentácia</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Kontakt</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Nápovedy a návody</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors coming-soon">Komunita</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© Povolean 2025 Všetky práva vyhradené</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors coming-soon">Súkromie</a>
            <a href="#" className="hover:text-foreground transition-colors coming-soon">Podmienky</a>
            <a href="#" className="hover:text-foreground transition-colorscoming-soon">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
