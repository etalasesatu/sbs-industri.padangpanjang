import { useState, useEffect } from 'react';
import { BASE_WHATSAPP_LINK } from '../data';

export default function Widgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Sticky Actions container bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        
        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          type="button"
          className={`bg-slate-900/90 backdrop-blur-md hover:bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer focus:outline-none ${showBackToTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-75 pointer-events-none'}`}
          title="Scroll Back To Top"
          aria-label="Kembali ke atas"
        >
          <i className="fa-solid fa-arrow-up text-lg"></i>
        </button>

        {/* Floating WhatsApp Sticky button */}
        <a
          href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20konsultasi%20mengenai%20pagar/kanopi/teralis.%20Boleh%20tanya%20prosedur%20survey?`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba54] text-white p-3.5 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative group"
          title="WhatsApp Hubungi Kami sekarang"
          aria-label="Hubungi WhatsApp Kami"
        >
          {/* Subtle green pulse glow circle */}
          <span className="absolute -inset-1 rounded-3xl bg-[#25D366]/40 blur-md animate-ping opacity-75"></span>
          
          <i className="fa-brands fa-whatsapp text-3xl sm:text-4xl relative z-10"></i>

          {/* Prompt banner tooltip visible on hover */}
          <div className="absolute right-14 bg-slate-900 text-white border border-slate-800 font-sans font-bold text-[11px] sm:text-xs py-2 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap -translate-x-4 group-hover:translate-x-0">
            Ada pertanyaan? Chat via WhatsApp &nbsp;
            <span className="text-orange-400 font-extrabold flex items-center inline-flex gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-ping"></span>
              Online
            </span>
          </div>
        </a>

      </div>
    </>
  );
}
