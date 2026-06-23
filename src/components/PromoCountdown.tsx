import { useState, useEffect } from 'react';
import { BASE_WHATSAPP_LINK } from '../data';

export default function PromoCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 45,
    seconds: 30
  });

  // Self-repairing daily auto-count down to next midnight
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 0, 0); // Target is tonight 23:59:59

      const difference = nextMidnight.getTime() - now.getTime();
      
      let hours = Math.floor(difference / (1000 * 60 * 60));
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      return {
        hours: hours < 0 ? 0 : hours,
        minutes: minutes < 0 ? 0 : minutes,
        seconds: seconds < 0 ? 0 : seconds
      };
    };

    // Initial update
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Pad numbers with leading zero
  const padZero = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white py-12 relative overflow-hidden">
      
      {/* Visual background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.05rem,transparent_0.05rem)] [background-size:1rem_1rem] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Promo Text Details */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-3">
            <span className="bg-white/20 backdrop-blur-md text-white border border-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block animate-bounce">
              PROMO INSTALASI TERBATAS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Diskon Pemasangan 10% Khusus Hari Ini!
            </h2>
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto lg:mx-0">
              Pesan dan jadwalkan survey ukur gratis sekarang juga. Klaim voucher promo potongan pengerjaan ini sebelum batas waktu terlampaui!
            </p>
          </div>

          {/* Time Countdown Boxes & CTA */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-8">
            
            {/* Timer boxes */}
            <div className="flex items-center gap-3">
              
              {/* Hours Box */}
              <div className="text-center">
                <div className="bg-slate-900/90 text-white rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center font-display text-xl sm:text-2xl font-extrabold shadow-md border border-white/10">
                  {padZero(timeLeft.hours)}
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-100 block mt-1.5">Jam</span>
              </div>

              <span className="text-2xl font-bold text-white font-display mb-6 animate-pulse">:</span>

              {/* Minutes Box */}
              <div className="text-center">
                <div className="bg-slate-900/90 text-white rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center font-display text-xl sm:text-2xl font-extrabold shadow-md border border-white/10">
                  {padZero(timeLeft.minutes)}
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-100 block mt-1.5">Menit</span>
              </div>

              <span className="text-2xl font-bold text-white font-display mb-6 animate-pulse">:</span>

              {/* Seconds Box */}
              <div className="text-center">
                <div className="bg-slate-900/90 text-orange-400 rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center font-display text-xl sm:text-2xl font-extrabold shadow-md border border-orange-500/20">
                  {padZero(timeLeft.seconds)}
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-100 block mt-1.5 font-semibold">Detik</span>
              </div>

            </div>

            {/* Quick claim button */}
            <a
              href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20mengklaim%20Voucher%20Promo%20Diskon%2010%25%20untuk%20pembuatan%20pagar/kanopi.%20Bisa%20jadwalkan%20survey?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-slate-950 hover:text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm text-center cursor-pointer font-sans"
            >
              <i className="fa-solid fa-gift text-base"></i>
              <span>Klaim Voucher Diskon</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
