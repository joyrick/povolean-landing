import React from 'react';

const Contact = () => (
  <section id="kontakt" className="w-full py-16 px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-2xl md:text-3xl font-medium text-white">Kontakt</h2>
      <p className="text-lg text-white/85">Obráťte sa na nás priamo, radi pomôžeme.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="text-center p-6">
          <div className="w-28 h-28 rounded-full mx-auto flex items-center justify-center mb-4 overflow-hidden border border-border">
            <img src="/tony.jpeg" alt="Anton Kuchťák" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-1">Anton Kuchťák</h4>
          <a href="tel:+421907240463" className="text-lg md:text-xl text-white hover:underline font-medium">+421 907 240 463</a>
        </div>

        <div className="text-center p-6">
          <div className="w-28 h-28 rounded-full mx-auto flex items-center justify-center mb-4 overflow-hidden border border-border">
            <img src="/Jorik.jpeg" alt="Jorik Veselko" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-1">Jorik Veselko</h4>
          <a href="tel:+421918721160" className="text-lg md:text-xl text-white hover:underline font-medium">+421 918 721 160</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
