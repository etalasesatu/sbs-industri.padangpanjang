import React from 'react';
import { BASE_WHATSAPP_LINK } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      
      {/* Visual abstract details */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand and identity */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 text-white p-2 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-fire-burner text-lg"></i>
              </div>
              <span className="font-display font-extrabold text-white text-xl tracking-tight block">
                SBS INDUSTRI
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Jasa bengkel las Padang Panjang untuk pagar minimalis, teralis jendela, kanopi baja ringan, railing tangga & konstruksi besi. Gratis survey dan bergaransi resmi untuk area Padang Panjang, Batipuh, X Koto, Tanah Datar, Batusangkar, Bukittinggi dan sekitarnya.
            </p>

            {/* Quick Contact Icons */}
            <div className="space-y-3">
              <div className="flex items-center gap-3.5 text-slate-300 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>0813-5737-2678</span>
              </div>
              
              <div className="flex items-center gap-3.5 text-slate-300 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>info@sbsindustri.com</span>
              </div>

              <div className="flex items-center gap-3.5 text-slate-300 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Jl. RA. Kartini No. 37, Kel. Tanah Hitam, Padang Panjang</span>
              </div>
            </div>
          </div>

          {/* Quick links directory */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-orange-500 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" onClick={(e) => handleSmoothScroll(e, '#layanan')} className="hover:text-orange-500 transition-colors">
                  Solusi Layanan
                </a>
              </li>
              <li>
                <a href="#galeri" onClick={(e) => handleSmoothScroll(e, '#galeri')} className="hover:text-orange-500 transition-colors">
                  Portofolio Proyek
                </a>
              </li>
              <li>
                <a href="#harga" onClick={(e) => handleSmoothScroll(e, '#harga')} className="hover:text-orange-500 transition-colors">
                  Daftar Biaya Paket
                </a>
              </li>
              <li>
                <a href="#carakerja" onClick={(e) => handleSmoothScroll(e, '#carakerja')} className="hover:text-orange-500 transition-colors">
                  Cara Pemesanan Jasa
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')} className="hover:text-orange-500 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Map and social proof visual */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Wilayah Operasional
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Kami melayani survey lokasi gratis langsung ke wilayah Padang Panjang, Batipuh X Koto, Batusangkar, dan Bukittinggi dengan armada transportasi khusus.
            </p>

            {/* Static Simulated visual map outline */}
            <div className="p-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shrink-0 mt-3 group relative h-40">
              <div className="absolute inset-x-0 bottom-0 bg-slate-900/90 backdrop-blur-sm p-2 text-center text-[10px] text-white z-10 font-medium pointer-events-none">
                <i className="fa-solid fa-map-location mr-1"></i>
                Workshop: SBS Industri Utama
              </div>
              <iframe
                title="Peta Lokasi SBS Industri Padang Panjang"
                src="https://maps.google.com/maps?q=Padang%20Panjang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Legal copyright fine print bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} SBS Industri. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-4 text-slate-500">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
