import { PRICE_PACKAGES } from '../data';
import { PricePackage } from '../types';

interface PriceTableProps {
  onSelectPackage: (packageName: string) => void;
}

export default function PriceTable({ onSelectPackage }: PriceTableProps) {
  return (
    <section id="harga" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-4 py-1.5 rounded-full">
            Daftar Estimasi Biaya
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Paket Bengkel Las Yang Transparan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Harga bersahabat dihitung per meter persegi (m²) dengan spesifikasi bahan tebal yang terjamin jujur. Silakan pilih sesuai budget rencana pembangunan Anda.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 md:mt-16 items-stretch">
          {PRICE_PACKAGES.map((pkg: PricePackage, idx: number) => (
            <div
              key={idx}
              className={`rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${pkg.isPopular ? 'border-orange-500 bg-orange-50/50 shadow-xl scale-100 lg:scale-[1.03] lg:-translate-y-2' : 'border-slate-100 bg-white shadow-sm hover:shadow-lg'}`}
            >
              
              {/* Recommended Badge */}
              {pkg.isPopular && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {pkg.badge}
                </span>
              )}

              {/* Package Header details */}
              <div className="p-6 sm:p-8 space-y-4 flex-1">
                <h3 className="font-display text-xl font-extrabold text-slate-900 leading-tight">
                  {pkg.name}
                </h3>
                
                {/* Price Label */}
                <div className="py-2 border-b border-slate-200/50">
                  <span className="text-slate-400 text-xs font-semibold block uppercase">Mulai Dari</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                      {pkg.priceStart}
                    </span>
                    <span className="text-slate-500 text-sm font-semibold">
                      / {pkg.unit}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pkg.description}
                </p>

                {/* Materials Bullet Grid */}
                <div className="space-y-3 pt-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-widest block">Fitur & Material:</span>
                  <ul className="space-y-2.5">
                    {pkg.materials.map((mat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                        <i className={`fa-solid fa-circle-check text-xs mt-0.5 shrink-0 ${pkg.isPopular ? 'text-orange-500' : 'text-slate-400'}`}></i>
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Selection interactive trigger button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow cursor-pointer text-center flex items-center justify-center gap-2 ${pkg.isPopular ? 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg' : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow'}`}
                >
                  <span>{pkg.ctaText}</span>
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Informative transparency warning note */}
        <div className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs leading-relaxed flex items-center justify-center gap-2 flex-wrap">
            <i className="fa-solid fa-memo-circle-info text-orange-400 text-sm shrink-0"></i>
            <span><strong>Catatan Penting:</strong> Estimasi harga riil bervariasi bergantung pada detail ukuran volume, tingkat kerumitan motif ornamen, serta jenis atap pelindung/finishing yang dipesan. Hubungi kami untuk survey lapangan dan mendapatkan kepastian RAB tertulis gratis.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
