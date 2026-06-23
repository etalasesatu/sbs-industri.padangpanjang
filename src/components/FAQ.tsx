import { useState } from 'react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first item

  const toggleFAQ = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="inline-block text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-4 py-1.5 rounded-full">
            Tanya Jawab Layanan
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Punya pertanyaan mengenai bengkel las kami? Temukan jawaban cepat mengenai proses survey, pemesanan, bahan baku tebal, garansi, maupun metode pengerjaan di bawah ini.
          </p>
        </div>

        {/* Accordions Stack (10 Q&As) */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-orange-500 bg-orange-50/20 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                
                {/* Accordion Toggle Bar */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  type="button"
                  className="w-full flex justify-between items-center text-left p-5 sm:p-6 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-slate-900 text-sm sm:text-base pr-4 hover:text-orange-500 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {/* Collapsible Content Area */}
                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-orange-100/30' : 'max-h-0 pointer-events-none'}`}
                >
                  <div className="p-5 sm:p-6 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Ask Bar helper */}
        <div className="mt-12 bg-slate-50 border border-slate-100 p-6 rounded-3xl text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-display font-semibold text-slate-900 text-base">
            Masih memiliki pertanyaan yang belum terjawab?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Jangan sungkan bertanya langsung via WhatsApp. Customer support kami siap merespon konsultasi pertanyaan custom apa saja dengan cepat dan membantu ramah.
          </p>
          <div>
            <a
              href="https://wa.me/6281357372678?text=Halo%20SBS%20Industri,%20saya%20punya%20pertanyaan%20mengenai%20survey%20atau%20pengerjaan%20las"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center gap-2 text-xs shadow-md transition-all cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Tanyakan Melalui WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
