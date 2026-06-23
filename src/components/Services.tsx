import { LAYANAN, BASE_WHATSAPP_LINK } from '../data';

export default function Services() {
  return (
    <section id="layanan" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-4 py-1.5 rounded-full">
            Produk & Solusi Unggulan
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Professional Bengkel Las Kami
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dari renovasi pagar kecil hingga pengerjaan proyek kanopi besar, kami memadukan presisi fabrikasi besi baja hitam maupun galvanis demi mutu dan nilai estetika properti Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
          {LAYANAN.map((lay) => (
            <div
              key={lay.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                
                {/* Product Image Cover */}
                <div className="relative overflow-hidden h-52 sm:h-56">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent z-10"></div>
                  <img
                    src={lay.imageUrl}
                    alt={`Jasa Pembuatan ${lay.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category icon */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <div className="bg-orange-500 text-white p-2.5 rounded-xl flex items-center justify-center shadow-lg">
                      <i className={`${lay.icon} text-base`}></i>
                    </div>
                    <span className="text-white font-display font-bold text-base filter drop-shadow">
                      {lay.title}
                    </span>
                  </div>

                  {/* Warranty Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-slate-700/60 font-semibold">
                    SNI & Bergaransi
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {lay.description}
                  </p>

                  {/* Bullet Spec Highlights */}
                  <div className="space-y-2 pt-1 border-t border-slate-50">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">Spesifikasi Kerja:</span>
                    <ul className="space-y-1.5">
                      {lay.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-tight">
                          <i className="fa-solid fa-circle-check text-orange-500 text-sm shrink-0 mt-0.5"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Card Footer Interaction Bar */}
              <div className="p-6 pt-0">
                <a
                  href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20untuk%20konsultasi%20desain%20dan%20memesan%20layanan%20${encodeURIComponent(lay.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-50 hover:bg-orange-500 hover:text-white text-slate-800 font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 text-xs border border-slate-200/50 hover:border-orange-500"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Minta Penawaran Jasa</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
