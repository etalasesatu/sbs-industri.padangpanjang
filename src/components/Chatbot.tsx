import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ChevronRight, CornerDownLeft, Sparkles, HelpCircle } from 'lucide-react';
import { BASE_WHATSAPP_LINK } from '../data';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
  quickReplies?: Array<{ label: string; payload: string }>;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessageAlert, setHasNewMessageAlert] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome-1',
        sender: 'bot',
        text: 'Halo! Selamat datang di SBS Industri 👋\nSaya asisten SBS, asisten virtual Anda. Ada yang bisa saya bantu hari ini?',
        timestamp: new Date(),
        quickReplies: [
          { label: '🛠️ Pilihan Jasa', payload: 'pilihan_jasa' },
          { label: '💰 Daftar Harga Las', payload: 'daftar_harga' },
          { label: '📍 Alamat & Area Kerja', payload: 'alamat_bengkel' },
          { label: '🎁 Syarat Survey Gratis', payload: 'survey_gratis' },
          { label: '🛡️ Garansi Pekerjaan', payload: 'garansi_las' },
        ],
      },
    ]);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Response mapping logic
  const getBotResponse = (input: string): { text: string; quickReplies?: Array<{ label: string; payload: string }> } => {
    const text = input.toLowerCase();

    // 1. SERVICES / LAYANAN
    if (text.includes('jasa') || text.includes('layanan') || text.includes('pilihan_jasa') || text.includes('produk') || text.includes('bikin')) {
      return {
        text: 'Kami menyediakan jasa pengelasan profesional berkualitas tinggi dengan material tebal berstandar SNI:\n\n' +
          '• 📌 **Pagar & Pintu**: Desain minimalis, WPC/Wood-fiber, modern sliding otomatis.\n' +
          '• 📌 **Kanopi Premium**: Carport adem berbahan Alderon, Solartuff, atau rona mewah Tempered Glass.\n' +
          '• 📌 **Teralis Jendela**: Pengaman fisik kokoh besi nako padat anti maling.\n' +
          '• 📌 **Railing & Tangga**: Railing balkon estetik, tangga putar besi & tangga rebah.\n' +
          '• 📌 **Pintu Besi & Folding Gate**: Proteksi maksimal ruko, garasi & gudang.\n' +
          '• 📌 **Las Custom**: Pembuatan rangka furniture, kandang hewan, konstruksi rak, dll.',
        quickReplies: [
          { label: '💰 Berapa Harganya?', payload: 'daftar_harga' },
          { label: '📏 Mau Survey Gratis', payload: 'survey_gratis' },
          { label: '💬 Chat CS via WhatsApp', payload: 'hubungi_wa' },
        ],
      };
    }

    // 2. PRICING / HARGA
    if (text.includes('harga') || text.includes('biaya') || text.includes('tarif') || text.includes('berapa') || text.includes('daftar_harga') || text.includes('paket') || text.includes('ongkos') || text.includes('permeter')) {
      return {
        text: 'Kami memiliki 3 pilihan Paket Transparan di SBS Industri (harga per m²):\n\n' +
          '1. **Paket Ekonomis** (Mulai Rp 350.000/m²)\n' +
          '   • Besi Hollow Hitam 1.2mm, Atap Spandek/Polycarbonate, Cat Finishing Solid, Garansi 3 Bulan.\n\n' +
          '2. **Paket Standar** (Mulai Rp 500.000/m² - Paling Populer 🌟)\n' +
          '   • Besi Hollow Galvanis Anti Karat 1.4mm, Atap Alderon Single Wall/Solartuff UV, Garansi 6 Bulan, Gratis Survey.\n\n' +
          '3. **Paket Premium** (Mulai Rp 750.000/m²)\n' +
          '   • Besi Hollow Galvanis Tebal 1.8-2.0mm/Stainless SUS-304, Atap Alderon Double Wall/Tempered Glass 8mm, Cat Premium Epoxy, Garansi 12 Bulan (1 Tahun).',
        quickReplies: [
          { label: '📏 Booking Survey Gratis', payload: 'survey_gratis' },
          { label: '🛠️ Lihat Jasa Kami', payload: 'pilihan_jasa' },
          { label: '💬 Tanya custom / WhatsApp', payload: 'hubungi_wa' },
        ],
      };
    }

    // 3. SURVEY
    if (text.includes('survey') || text.includes('pengukuran') || text.includes('ukur') || text.includes('survey_gratis') || text.includes('datang') || text.includes('petugas')) {
      return {
        text: 'Kabar baik! Layanan **Survey, Konsultasi Desain, dan Pengukuran Lokasi adalah 100% GRATIS** (Bebas biaya transportasi) tanpa ikatan apapun!\n\n' +
          'Petugas kami akan membawa contoh bahan potongan besi, katalog model gambar asli, dan alat ukur laser digital langsung ke rumah Anda.\n\n' +
          'Bagaimana? Mau kami jadwalkan kunjungan survey minggu ini?',
        quickReplies: [
          { label: '📅 Jadwalkan Hari Ini', payload: 'booking_survey_langsung' },
          { label: '📍 Cek Area Jangkauan', payload: 'alamat_bengkel' },
        ],
      };
    }

    // 4. BOOKING / SURVEY DIRECT
    if (text.includes('booking_survey') || text.includes('jadwal') || text.includes('mau survey')) {
      return {
        text: 'Untuk menjadwalkan survey gratis, Anda bisa mengisi formulir pemesanan di bagian bawah landing page ini, atau agar jauh lebih cepat dan terhubung dengan bagian penjadwalan tim lapangan, silakan hubungi kami via WhatsApp.',
        quickReplies: [
          { label: '🚀 Survey via WhatsApp', payload: 'hubungi_wa' },
          { label: '💰 Lihat Harga Lagi', payload: 'daftar_harga' },
        ],
      };
    }

    // 5. ADDRESS / OPERATIONAL AREA
    if (text.includes('alamat') || text.includes('bengkel') || text.includes('lokasi') || text.includes('di mana') || text.includes('alamat_bengkel') || text.includes('wilayah') || text.includes('daerah') || text.includes('cabang') || text.includes('padang') || text.includes('batipuh') || text.includes('batusangkar') || text.includes('bukittinggi')) {
      return {
        text: '📍 **Alamat Workshop Utama Kami**:\n' +
          'Jl. RA. Kartini No. 37, Kel. Tanah Hitam, Padang Panjang.\n\n' +
          '🚗 **Wilayah Operasional Pemasangan & Free Survey**:\n' +
          '• Wilayah Padang Panjang, Batipuh X Koto, Batusangkar, dan Bukittinggi.\n\n' +
          'Jam Operasional: Senin - Sabtu (08.00 - 18.00 WIB). Hari Minggu menerima janji survey.',
        quickReplies: [
          { label: '🛠️ Pilihan Jasa', payload: 'pilihan_jasa' },
          { label: '💬 Hubungi WhatsApp', payload: 'hubungi_wa' },
        ],
      };
    }

    // 6. GUARANTEE / GARANSI
    if (text.includes('garansi') || text.includes('garansi_las') || text.includes('rusak') || text.includes('copot') || text.includes('patah') || text.includes('karat')) {
      return {
        text: 'Keamanan pesanan Anda terjamin penuh! Setiap pengerjaan kami memiliki **Garansi Struktur & Sambungan Las Resmi**:\n\n' +
          '• Paket Ekonomis: Garansi 3 Bulan\n' +
          '• Paket Standar: Garansi 6 Bulan\n' +
          '• Paket Premium: Garansi 12 Bulan (1 Tahun penuh)\n\n' +
          'Jika ada sambungan yang renggang, cat memudar tidak wajar, atau masalah fungsional, tim kami akan datang dan memperbaiki tanpa biaya sepeser pun!',
        quickReplies: [
          { label: '💰 Tanya Biaya Paket', payload: 'daftar_harga' },
          { label: '💬 Chat WA Sekarang', payload: 'hubungi_wa' },
        ],
      };
    }

    // 7. WA DIRECT
    if (text.includes('hubungi_wa') || text.includes('wa') || text.includes('whatsapp') || text.includes('nomor') || text.includes('telepon') || text.includes('admin') || text.includes('kontak') || text.includes('hp')) {
      return {
        text: 'Anda bisa berkonsultasi langsung dengan tim admin CS melayani tanya jawab custom, hitungan estimasi RAB kasar, atau reservasi jadwal survey:\n\n' +
          '📞 **WhatsApp**: 0813-5737-2678\n' +
          'Kami siap melayani Anda sepenuh hati.',
        quickReplies: [
          { label: '🟢 Buka Chat WhatsApp', payload: 'open_wa_redirect' },
          { label: '💼 Mulai dari Awal', payload: 'kembali_awal' },
        ],
      };
    }

    // 8. REDIRECT SPECIAL PAYLOAD
    if (text === 'open_wa_redirect') {
      const waUrl = `${BASE_WHATSAPP_LINK}?text=Halo%20SBS%20Industri,%20saya%20ingin%20konsultasi%20mengenai%20pagar/kanopi%20dari%20asisten%20chatbot.`;
      window.open(waUrl, '_blank');
      return {
        text: 'Mengalihkan Anda ke WhatsApp... Jika chat belum terbuka otomatis, silakan klik tombol hijau di atas.',
        quickReplies: [
          { label: '💼 Mulai dari Awal', payload: 'kembali_awal' },
        ],
      };
    }

    // 9. RESTART / WELCOME-BACK
    if (text.includes('kembali_awal') || text.includes('halo') || text.includes('hai') || text.includes('reboot') || text.includes('mulai')) {
      return {
        text: 'Halo kembali! Saya siap melayani Anda lagi. Pilih topik yang ingin Anda ketahui di bawah ini:',
        quickReplies: [
          { label: '🛠️ Pilihan Jasa', payload: 'pilihan_jasa' },
          { label: '💰 Daftar Harga Las', payload: 'daftar_harga' },
          { label: '📍 Alamat & Area Kerja', payload: 'alamat_bengkel' },
          { label: '🎁 Syarat Survey Gratis', payload: 'survey_gratis' },
          { label: '🛡️ Garansi Pekerjaan', payload: 'garansi_las' },
        ],
      };
    }

    // 10. DEFAULT FALLBACK WITH FUZZY KEYWORD MATCHING RECOMMENDATIONS
    return {
      text: 'Terima kasih atas pesan Anda! Keahlian saya berfokus pada info layanan pagar/kanopi, estimasi biaya, garansi, serta janji survey gratis.\n\n' +
        'Silakan cari info lebih lanjut di bawah ini atau ketik pertanyaan langsung seperti "harga pagar" atau "survey di padang panjang". Bagi konsultasi yang lebih kompleks atau pengiriman foto desain, Anda bisa langsung chat CS Admin kami.',
      quickReplies: [
        { label: '💬 Chat Admin WhatsApp', payload: 'hubungi_wa' },
        { label: '🛠️ Pilihan Jasa Las', payload: 'pilihan_jasa' },
        { label: '🏠 Kembali ke Awal', payload: 'kembali_awal' },
      ],
    };
  };

  // Process message submission
  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsgId = `user-${Date.now()}`;
    const userMessage: Message = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Realistic bot response delay
    setTimeout(() => {
      const responseData = getBotResponse(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseData.text,
        timestamp: new Date(),
        quickReplies: responseData.quickReplies,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 850);
  };

  // Process clicking quick replies
  const handleQuickReplyClick = (label: string, payload: string) => {
    // Treat payload or label as user input
    setHasNewMessageAlert(false);
    handleSendMessage(payload || label);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessageAlert(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Bubble - Placed bottom left/right dynamically */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-32 z-50">
        <button
          onClick={handleToggle}
          type="button"
          className="relative bg-slate-950 text-white rounded-full p-4 shadow-2xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 group border border-slate-800/80"
          aria-label="Tanya Asisten Chatbot"
          title="Tanya Asisten SBS"
          id="chatbot-trigger-btn"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-orange-400" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-orange-400 group-hover:rotate-12 transition-transform" />
              {hasNewMessageAlert && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></span>
                </span>
              )}
            </>
          )}

          {/* Elegant initial teaser balloon */}
          {!isOpen && hasNewMessageAlert && (
            <div className="absolute right-14 bottom-1 bg-slate-900 border border-slate-800 text-white text-[11px] font-medium py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -translate-x-3 group-hover:translate-x-0 hidden sm:block">
              <span className="text-orange-400 font-bold">🤖 Asisten SBS:</span> Butuh estimasi harga las? Chat yuk!
            </div>
          )}
        </button>
      </div>

      {/* Chat Windows Box container wrapper */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 md:right-32 w-auto sm:w-[380px] h-[500px] sm:h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 z-50 flex flex-col overflow-hidden"
            id="chatbot-window-box"
          >
            {/* Header Area */}
            <div className="bg-slate-950 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center relative">
                  <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-slate-100 flex items-center gap-1.5">
                    Asisten SBS
                  </h4>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online • Respon Instan
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-all cursor-pointer"
                aria-label="Tutup chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Window */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-200"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-orange-500 text-white rounded-tr-none font-medium'
                        : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none whitespace-pre-wrap'
                    }`}
                  >
                    {/* Render message formatting bold helpers */}
                    {msg.text.split('\n').map((line, index) => {
                      // Custom bold tags translation
                      let cleanLine = line;
                      const parts = [];
                      let lastIndex = 0;
                      const regex = /\*\*(.*?)\*\*/g;
                      let match;

                      while ((match = regex.exec(line)) !== null) {
                        if (match.index > lastIndex) {
                          parts.push(line.substring(lastIndex, match.index));
                        }
                        parts.push(<strong key={match.index} className="font-extrabold text-slate-950">{match[1]}</strong>);
                        lastIndex = regex.lastIndex;
                      }

                      if (lastIndex < line.length) {
                        parts.push(line.substring(lastIndex));
                      }

                      return (
                        <div key={index} className="min-h-1 mb-1">
                          {parts.length > 0 ? parts : cleanLine}
                        </div>
                      );
                    })}
                  </div>

                  {/* Render Quick Replies pills for bot sender */}
                  {msg.sender === 'bot' && msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                      {msg.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReplyClick(reply.label, reply.payload)}
                          type="button"
                          className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-600 rounded-full px-3 py-1.5 shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-0.5"
                        >
                          {reply.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Message timestamp */}
                  <span className="text-[9px] text-slate-400 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}

              {/* Bot Virtual Typing Glow indicator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Hint tag */}
            <div className="px-4 py-1.5 bg-amber-50 text-[10px] text-amber-800 font-medium border-t border-b border-amber-100 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-600" />
              <span>Tanyakan tentang &quot;harga kanopi&quot;, &quot;garansi&quot; atau &quot;survey&quot;!</span>
            </div>

            {/* Input Submission bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
              id="chatbot-form"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ketik pertanyaan Anda di sini..."
                className="flex-1 bg-slate-50 border border-slate-200 focus:border-orange-500 focus:bg-white rounded-2xl px-4 py-2 text-sm focus:outline-none transition-all placeholder-slate-400 font-medium text-slate-800"
                maxLength={150}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-slate-950 hover:bg-slate-800 disabled:bg-slate-100 text-orange-400 disabled:text-slate-300 p-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 border border-slate-900/10 disabled:border-transparent"
                aria-label="Kirim pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
