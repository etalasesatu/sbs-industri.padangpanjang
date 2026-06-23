import React from 'react';
import { BASE_WHATSAPP_LINK } from '../data';

export default function Hero() {
  const handleScrollToPackages = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#harga");
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-28 pb-16 md:py-24 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.05rem,transparent_0.05rem)] [background-size:1.5rem_1.5rem] opacity-20 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Copy details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Promo Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-orange-200/50 shadow-sm">
              <i className="fa-solid fa-certificate text-orange-500 animate-pulse"></i>
              <span>Survey Lokasi Gratis & Bonus Garansi 3 Bulan</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bikin Rumah <span className="text-orange-500 relative">Aman</span>, Adem, & Estetis Dengan <span className="underline decoration-orange-400 decoration-wavy">Jasa Las Ahli</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Jasa fabrikasi pagar minimalis, teralis, kanopi premium, railing, ruko folding gate kualitas terjamin. Material besi hollow galvanis tebal standar SNI, antikarat, dipotong presisi & bergaransi resmi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <a
                href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20dengan%20Jasa%20Bengkel%20Las%20Anda.%20Bisa%20survey%20gratis%20untuk%20lokasi%20saya?`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-base group"
              >
                <i className="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
                <div className="text-left">
                  <span className="block font-bold leading-tight">Konsultasi Desain Gratis</span>
                  <span className="block text-[11px] text-emerald-100 font-normal mt-0.5">Tanya Model & Estimasi Biaya</span>
                </div>
              </a>

              <button
                onClick={handleScrollToPackages}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow flex items-center justify-center gap-2 transform hover:-translate-y-1 text-base cursor-pointer"
              >
                <span>Lihat Pilihan Paket</span>
                <i className="fa-solid fa-arrow-down text-sm animate-bounce"></i>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div className="border-r border-slate-200">
                <span className="block text-2xl font-extrabold text-slate-900 font-display">100%</span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Survey Gratis</span>
              </div>
              <div className="border-r border-slate-200">
                <span className="block text-2xl font-extrabold text-slate-900 font-display">SNI</span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Bahan Pilihan</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-slate-900 font-display">6 - 12m</span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Garansi Kerja</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Premium Interactive Illustration Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Border styling */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur-md opacity-25"></div>
              
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                
                {/* Main Welder Image */}
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800&h=700"
                  alt="Proses Pengelasan Las Bengkel Las Pagar, Teralis & Kanopi"
                  className="rounded-2xl object-cover w-full h-[350px] sm:h-[400px] md:h-[450px]"
                  loading="eager"
                />

                {/* Sparkling weld effect overlays */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white py-1.5 px-3 rounded-full text-xs font-medium flex items-center gap-2 border border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span>Workshop Sedang Produksi</span>
                </div>

                {/* Floating Card: Trust Banner */}
                <div className="absolute bottom-6 right-6 left-6 sm:right-10 sm:left-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-orange-100 flex items-center gap-4">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-lg flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-shield-halved text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Pemasangan Presisi & Kokoh</h3>
                    <p className="text-xs text-slate-600 mt-1">Setiap pesanan dielas matang & difinishing dempul rapi anti karat.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
