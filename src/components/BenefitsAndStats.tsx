import { BENEFITS, STATS } from '../data';

export default function BenefitsAndStats() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
      
      {/* Absolute design accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-4 py-1.5 rounded-full">
            Komitmen Kepuasan Total
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keunggulan & Benefit Menggunakan Jasa Kami
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kami bukan sekadar tukang las panggilan acak. Kami berkomitmen memberikan standar instalasi sipil bersertifikasi industri demi menghadirkan peace of mind bagi hunian impian Anda.
          </p>
        </div>

        {/* Benefits Grid (6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
          {BENEFITS.map((ben, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex gap-4 group"
            >
              <div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-orange-100/30 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <i className={`${ben.icon} text-xl`}></i>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-orange-500 transition-colors">
                  {ben.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {ben.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Banner area (4 Items) */}
        <div className="mt-16 md:mt-24 bg-slate-900 rounded-[32px] p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.05rem,transparent_0.05rem)] [background-size:2.5rem_2.5rem] opacity-5"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-3 p-2">
                <div className="text-orange-500 text-2xl mb-1">
                  <i className={stat.icon}></i>
                </div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
