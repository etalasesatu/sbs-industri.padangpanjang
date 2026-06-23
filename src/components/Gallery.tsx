import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

  const categories = [
    { value: 'semua', label: 'Semua Proyek' },
    { value: 'pagar', label: 'Pagar' },
    { value: 'kanopi', label: 'Kanopi' },
    { value: 'teralis', label: 'Teralis Jendela' },
    { value: 'railing', label: 'Railing' }
  ];

  // Filter items
  const filteredItems = activeCategory === 'semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(it => it.category === activeCategory);

  const handleNext = () => {
    if (selectedItemIdx === null) return;
    const nextIdx = (selectedItemIdx + 1) % filteredItems.length;
    setSelectedItemIdx(nextIdx);
  };

  const handlePrev = () => {
    if (selectedItemIdx === null) return;
    const prevIdx = (selectedItemIdx - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItemIdx(prevIdx);
  };

  return (
    <section id="galeri" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-4 py-1.5 rounded-full">
            Portofolio Hasil Kerja Real
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Galeri Proyek Bengkel Las Kami
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Foto asli hasil pemasangan tuntas di lapangan. Estetis, presisi, kokoh, dan disukai pemilik rumah. Rasakan bedanya pengerjaan premium kami.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 md:mt-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setSelectedItemIdx(null); // Reset index selection on filter change
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${activeCategory === cat.value ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIdx(index)}
              className="group cursor-pointer bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo Area */}
              <div className="relative overflow-hidden h-60 sm:h-64">
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <div className="bg-white/90 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                    <span>Perbesar Foto</span>
                  </div>
                </div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Specific Category Indicator */}
                <span className="absolute bottom-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-slate-700/50">
                  {item.category}
                </span>
              </div>

              {/* Text Description Block */}
              <div className="p-5 space-y-1 bg-white">
                <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base group-hover:text-orange-500 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed truncate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox popup */}
        {selectedItemIdx !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4">
            
            {/* Close trigger layer */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedItemIdx(null)}></div>

            <div className="relative bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-800 flex flex-col z-10">
              
              {/* Inner Close Button */}
              <button
                onClick={() => setSelectedItemIdx(null)}
                className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Galeri"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>

              {/* Main Image Slider with controller overlays */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[250px] sm:min-h-[400px]">
                
                {/* Visual Arrow PREV */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-20 bg-black/45 hover:bg-orange-500 text-white w-10 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
                  aria-label="Sebelumnya"
                >
                  <i className="fa-solid fa-chevron-left text-lg"></i>
                </button>

                <img
                  src={filteredItems[selectedItemIdx].imageUrl}
                  alt={filteredItems[selectedItemIdx].title}
                  className="max-w-full max-h-[60vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Visual Arrow NEXT */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-20 bg-black/45 hover:bg-orange-500 text-white w-10 h-12 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
                  aria-label="Berikutnya"
                >
                  <i className="fa-solid fa-chevron-right text-lg"></i>
                </button>
              </div>

              {/* Content Overlay Footer */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 text-white space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white text-[10px] sm:text-xs uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-md">
                    {filteredItems[selectedItemIdx].category}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">
                    Proyek {selectedItemIdx + 1} dari {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-xl text-white">
                  {filteredItems[selectedItemIdx].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {filteredItems[selectedItemIdx].description}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
