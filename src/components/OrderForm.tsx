import React, { useState, useEffect } from 'react';
import { BASE_WHATSAPP_LINK } from '../data';
import { OrderData } from '../types';

interface OrderFormProps {
  selectedService: string;
}

export default function OrderForm({ selectedService }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderData>({
    name: '',
    phone: '',
    address: '',
    serviceType: '',
    additionalNotes: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-populate when user clicks "Pesan Paket"
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: selectedService
      }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Form inputs validation
    if (!formData.name.trim()) {
      setErrorMessage('Silakan isi Nama Lengkap Anda terlebih dahulu.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Nomor WhatsApp wajib diisi.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMessage('Alamat lokasi survey wajib diisi lengkap.');
      return;
    }
    if (!formData.serviceType) {
      setErrorMessage('Pilih salah satu Jenis Layanan kami.');
      return;
    }

    setLoading(true);

    // Build perfect Indonesian WhatsApp custom notification template
    const titleHeader = "📋 FORMULIR PENGEMBANGAN / SURVEY ESTIMASI BENGKEL LAS";
    const bodyText = `Halo admin SBS Industri,\n\nSaya ingin berkonsultasi mengenai rencana pengerjaan las bangunan dengan rincian berikut:\n\n👤 *Nama Lengkap:* ${formData.name}\n📱 *Nomor WhatsApp:* ${formData.phone}\n📍 *Alamat Lokasi Survey:* ${formData.address}\n🛠️ *Jenis Layanan:* ${formData.serviceType}\n\n📝 *Pesan/Catatan Tambahan:* ${formData.additionalNotes || '-'}\n\nMohon bantu dihubungi untuk konfirmasi jadwal survey serta konsultasi awal. Terimakasih!`;

    // URI encoding
    const encodedText = encodeURIComponent(bodyText);
    const finalWhatsAppURL = `${BASE_WHATSAPP_LINK}?text=${encodedText}`;

    // Redirect to wa.me opening a broad new secure tab
    setTimeout(() => {
      setLoading(false);
      
      const newTab = window.open(finalWhatsAppURL, '_blank', 'noopener,noreferrer');
      if (newTab) {
        newTab.focus();
      } else {
        // Fallback standard location redirection if popup prevented
        window.location.href = finalWhatsAppURL;
      }
    }, 600);
  };

  return (
    <section id="order" className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
      
      {/* Visual glowing frame elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Copy Side Column */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-block text-orange-500 font-bold text-xs uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              Formulir Penjadwalan Cepat
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Kirim Formulir Untuk Jadwalkan <span className="text-orange-500">Survey Gratis</span>
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Tim engineering las kami yang berpengalaman siap meluncur ke lokasi Anda, mengukur presisi milimeter, membawakan sampel material solid, serta mengalkulasi RAB transparan. Tanpa risiko, tanpa biaya survey sepeser pun.
            </p>

            {/* Quick validation bullet items */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-emerald-500/20 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="text-slate-300 text-sm">Respon Cepat Tim CS (Kurang dari 15 Menit)</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-emerald-500/20 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="text-slate-300 text-sm">Petugas Survey Lapangan Ramah & Rapi</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-emerald-500/20 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="text-slate-300 text-sm">Kebebasan Membatalkan Setelah Ditaksir Biayanya</span>
              </div>
            </div>

          </div>

          {/* Actual Form interactive Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/80 rounded-[32px] border border-slate-700/60 p-6 sm:p-10 shadow-2xl relative">
              <h3 className="font-display font-medium text-lg text-slate-100 mb-6 text-center sm:text-left border-b border-slate-700/50 pb-4">
                Informasi Pemilik Rumah / Pemesan
              </h3>

              {/* Submission error message overlay wrapper */}
              {errorMessage && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex items-center gap-3 text-red-400 text-xs sm:text-sm">
                  <i className="fa-solid fa-circle-exclamation text-base"></i>
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Two field row for Name and WhatsApp contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide block">
                      Nama Lengkap Anda
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <i className="fa-solid fa-user text-sm"></i>
                      </div>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-900 border border-slate-700 rounded-xl w-full pl-10 pr-4 py-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all placeholder:text-slate-500"
                        placeholder="Contoh: Budi Gunawan"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide block">
                      Nomor WhatsApp Aktif
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <i className="fa-solid fa-phone text-sm"></i>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-900 border border-slate-700 rounded-xl w-full pl-10 pr-4 py-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all placeholder:text-slate-500"
                        placeholder="Contoh: 0812345xxxx"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Select Type dropdown field */}
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide block">
                    Pekerjaan Jasa Las Yang Dibutuhkan
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <i className="fa-solid fa-wrench text-sm"></i>
                    </div>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="bg-slate-900 border border-slate-700 rounded-xl w-full pl-10 pr-4 py-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all text-slate-300 cursor-pointer appearance-none"
                    >
                      <option value="">-- Silakan Pilih Jasa Las --</option>
                      <option value="Pagar Minimalis Custom">Pagar Minimalis Custom</option>
                      <option value="Kanopi Premium (Alderon / Glass)">Kanopi Premium (Alderon / Glass)</option>
                      <option value="Teralis Jendela Pengaman Jendela">Teralis Jendela Pengaman Jendela</option>
                      <option value="Railing Tangga & Balkon">Railing Tangga & Balkon</option>
                      <option value="Pintu Besi & Folding Gate Ruko">Pintu Besi & Folding Gate Ruko</option>
                      <option value="Paket Ekonomis (Rp 350rb/m²)">Paket Ekonomis (Rp 350.000 / m²)</option>
                      <option value="Paket Standar (Rp 500rb/m²)">Paket Standar (Rp 500.000 / m²)</option>
                      <option value="Paket Premium (Rp 750rb/m²)">Paket Premium (Rp 750.000 / m²)</option>
                      <option value="Pekerjaan Las Custom / Ornamen Dinamis">Konstruksi Besi Custom Lainnya</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                {/* Address string input field */}
                <div className="space-y-2">
                  <label htmlFor="address" className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide block">
                    Alamat Lengkap Lokasi Survey
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <i className="fa-solid fa-location-dot text-sm"></i>
                    </div>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="bg-slate-900 border border-slate-700 rounded-xl w-full pl-10 pr-4 py-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all placeholder:text-slate-500"
                      placeholder="Contoh: Jl. Sudirman No. 12, Kel. Silaing Bawah, Padang Panjang"
                    />
                  </div>
                </div>

                {/* Additional notes textarea field */}
                <div className="space-y-2">
                  <label htmlFor="additionalNotes" className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide block">
                    Pesan Khusus / Ukuran / Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={3}
                    className="bg-slate-900 border border-slate-700 rounded-xl w-full p-4 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-all placeholder:text-slate-500"
                    placeholder="Contoh: Saya butuh kanopi carport ukuran panjang 6 meter x lebar 4 meter tebal cat hitam doff."
                  />
                </div>

                {/* Form submit button triggers WA action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        <span>Kirim Ke WhatsApp Utama</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
