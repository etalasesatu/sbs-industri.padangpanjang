import { BASE_WHATSAPP_LINK } from '../data';

export default function ProblemAgitation() {
  const problems = [
    {
      title: "Rumah Kurang Aman & Rawan Maling",
      desc: "Kejahatan pengintaian rumah kosong meningkat. Tanpa pagar depan yang kokoh dan teralis jendela, rumah Anda menjadi target empuk pelaku pencurian.",
      agitation: "Sekali dibobol, kerugian materi dan psikologis trauma keluarga berbulan-bulan melampaui harga pasang pintu besi pengaman.",
      icon: "fa-solid fa-house-lock"
    },
    {
      title: "Carport Panas & Kendaraan Rusak",
      desc: "Teras rumah tanpa kanopi terpapar langsung radiasi sinar UV ekstrem matahari siang hari, lalu diguyur mendadak air hujan malam hari.",
      agitation: "Cat mobil kesayangan Anda cepat pudar, interior kulit retak-retak, headlamp menguning, dan harga jual kendaraan jatuh bebas.",
      icon: "fa-solid fa-temperature-arrow-up"
    },
    {
      title: "Teras Becek Tampias Air Hujan",
      desc: "Saat musim hujan datang, air hujan terdorong angin merembes membasahi seluruh lantai teras depan, membuat licin dan berbahaya bagi anak kecil.",
      agitation: "Air hujan merusak kusen pintu utama kayu seharga jutaan rupiah, jamur tumbuh subur di tembok lembab menyebabkan kerak mengelupas.",
      icon: "fa-solid fa-cloud-showers-heavy"
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Absolute decorative background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-orange-900/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with high-contrast label */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
            Kekhawatiran Utama Pemilik Rumah
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Apakah Rumah Anda Mengalami <span className="text-red-500">Masalah Ini</span>?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Membangun rumah impian sudah memakan biaya besar, tapi membiarkan hal-hal berikut terbengkalai justru mengundang kerugian yang jauh lebih fatal.
          </p>
        </div>

        {/* Problem & Agitate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-slate-800/80 rounded-2xl border border-slate-700/60 p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/40 hover:bg-slate-800 transition-all duration-300 relative group">
              <div className="space-y-4">
                
                {/* Hazard indicator badge */}
                <span className="absolute top-4 right-4 bg-red-500/10 text-red-500 border border-red-500/20 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                  RISIKO TINGGI
                </span>

                <div className="bg-red-500/10 text-red-500 p-4 rounded-xl inline-flex justify-center items-center">
                  <i className={`${prob.icon} text-2xl`}></i>
                </div>
                
                <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-white transition-colors">
                  {prob.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {prob.desc}
                </p>

              </div>

              {/* Agitation Phase (PAS Copywriting) */}
              <div className="mt-6 pt-5 border-t border-slate-700/50">
                <p className="text-xs text-red-400/90 italic font-medium leading-relaxed flex gap-2">
                  <i className="fa-solid fa-triangle-exclamation text-xs text-red-500 mt-0.5 shrink-0"></i>
                  <span><strong>Efek Buruk: </strong>{prob.agitation}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Transition Banner to the Solution */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-6 sm:p-10 shadow-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.05rem,transparent_0.05rem)] [background-size:1rem_1rem] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              STOP Cemas! Serahkan Masalah Las Rumah Anda Pada Ahlinya
            </h3>
            <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium">
              Kami sedia material hollow galvanis anti karat bersertifikat SNI dengan las kokoh rapi yang didesain estetik, menjadikan rumah Anda aman, sejuk, dan terlihat menawan.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20konsultasi%20untuk%20membuat%20pagar/kanopi%20agar%20rumah%20saya%20lebih%20aman.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-slate-50 font-bold py-3.5 px-6 rounded-xl shadow transition-transform duration-200 hover:scale-105 inline-flex items-center gap-2 text-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Hubungi Ahli Las Sekarang</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
