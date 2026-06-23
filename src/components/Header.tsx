import React, { useState, useEffect } from 'react';
import { BASE_WHATSAPP_LINK } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Solusi", href: "#layanan" },
    { name: "Galeri", href: "#galeri" },
    { name: "Cara Kerja", href: "#carakerja" },
    { name: "Biaya Paket", href: "#harga" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group">
            <div className="bg-orange-500 text-white p-2 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <i className="fa-solid fa-fire-burner text-lg"></i>
            </div>
            <div>
              <span className="font-display font-extrabold text-slate-900 text-xl tracking-tight leading-none block">SBS INDUSTRI</span>
              <span className="text-[10px] tracking-widest text-orange-500 font-bold block uppercase mt-0.5">BENGKEL LAS PREMIUM</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-medium text-slate-600 hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20untuk%20konsultasi%20desain%20gratis%20dan%20tanya%20harga`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-xl text-sm flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-700 hover:text-orange-500 p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu navigation"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Dropdown menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border-t border-slate-100 mt-3 py-4 bg-white shadow-inner' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block font-medium text-slate-700 hover:text-orange-500 py-2 text-base border-b border-slate-50 transition-colors"
            >
              <i className="fa-solid fa-chevron-right text-[10px] text-orange-400 mr-2"></i>
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20tertarik%20untuk%20konsultasi%20desain%20gratis%20dan%20tanya%20harga`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>Tanya Via WhatsApp (Fast Response)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
