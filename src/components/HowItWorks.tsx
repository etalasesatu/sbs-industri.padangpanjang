import { WORK_STEPS } from '../data';

export default function HowItWorks() {
  return (
    <section id="carakerja" className="bg-slate-50 pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_0.08rem,transparent_0.08rem)] [background-size:2rem_2rem] opacity-35"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-4 py-1.5 rounded-full">
            Alur Kerja Profesional
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            5 Langkah Mudah Realisasi Pagar & Kanopi Impian
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tidak perlu repot keluar rumah atau menerka ketebalan logam yang digunakan. Kami merancang proses modern yang praktis, transparan, dan aman bagi kenyamanan Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 md:mt-16 relative">
          
          {/* Connector Arrow Line (Visible on md desktop layout) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-dashed bg-slate-200 z-0"></div>

          {WORK_STEPS.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative z-10 hover:shadow-md hover:border-orange-200 transition-all duration-300">
              
              {/* Step indicator block with custom colors */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-display text-4xl font-extrabold text-orange-500/80 leading-none">
                  {step.step}
                </span>
                <div className="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-slate-200/50">
                  {idx + 1}
                </div>
              </div>

              {/* Title & Description details */}
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
