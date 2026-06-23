import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-slate-50 pt-8 pb-16 md:pt-12 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-4 py-1.5 rounded-full">
            Komentar & Kepuasan Pelanggan
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Mereka Tentang Kami?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kepercayaan Anda adalah prioritas nomor satu kami. Berikut testimonial murni tanpa rekayasa dari para pemilik rumah, ruko dan mitra kontraktor kami.
          </p>
        </div>

        {/* Testimonials Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
            >
              
              {/* Star Rating & Quote Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-amber-400 text-sm"></i>
                  ))}
                </div>
                
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative">
                  <span className="text-3xl text-orange-300 font-serif absolute -top-5 -left-1 opacity-20 pointer-events-none">“</span>
                  {test.comment}
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-slate-50">
                <img
                  src={test.avatarUrl}
                  alt={`Foto dari pelanggan las ${test.name}`}
                  className="w-11 h-11 rounded-full object-cover border border-slate-100 shadow-sm shrink-0"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                      {test.name}
                    </span>
                    <i className="fa-solid fa-circle-check text-emerald-500 text-[10px]" title="Pelanggan Terverifikasi"></i>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5 text-[10px] text-slate-500 font-medium">
                    <span>{test.role}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="text-orange-500">{test.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verified reassurance block */}
        <div className="mt-12 text-center text-slate-500 text-xs flex items-center justify-center gap-2 flex-wrap">
          <i className="fa-solid fa-user-shield text-slate-400 text-sm"></i>
          <span>Seluruh ulasan di atas diverifikasi melalui survei kepuasan nomor WhatsApp pasca-instalasi.</span>
        </div>

      </div>
    </section>
  );
}
