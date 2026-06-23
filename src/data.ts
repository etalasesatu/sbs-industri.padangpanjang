import { GalleryItem, Benefit, Stat, Testimonial, PricePackage, FAQItem } from './types';

export const BASE_WHATSAPP_LINK = "https://wa.me/6281357372678";

export const BENEFITS: Benefit[] = [
  {
    title: "Survey Gratis Tanpa Biaya",
    description: "Kami datang langsung ke rumah Anda untuk melakukan pengukuran presisi dan konsultasi desain secara cuma-cuma.",
    icon: "fa-solid fa-map-location-dot"
  },
  {
    title: "Desain Custom Sesuka Hati",
    description: "Bebas berdiskusi menentukan model minimalis, klasik, industrial, atau modern sesuai dengan gaya rumah Anda.",
    icon: "fa-solid fa-compass-drafting"
  },
  {
    title: "Material SNI Berkualitas",
    description: "Kami hanya menggunakan besi tebal hollow galvanis anti karat, stainless steel standar industri, dan atap bergaransi.",
    icon: "fa-solid fa-shield-halved"
  },
  {
    title: "Pengerjaan Rapi & Bergaransi",
    description: "Dikerjakan oleh tukang las bertenaga ahli bersertifikat dengan finishing painting halus, rapi, dan bergaransi resmi.",
    icon: "fa-solid fa-medal"
  },
  {
    title: "Harga Transparan di Awal",
    description: "Estimasi biaya rincian material diberikan tertulis di awal kerja. Tanpa biaya tambahan siluman di tengah jalan.",
    icon: "fa-solid fa-receipt"
  },
  {
    title: "Siap Cepat Survey Lokasi",
    description: "Tim responsif kami siap berangkat survey ke rumah Anda hari ini untuk daerah operasional kami.",
    icon: "fa-solid fa-truck-fast"
  }
];

export const STATS: Stat[] = [
  { value: "500+", label: "Proyek Selesai", icon: "fa-solid fa-circle-check" },
  { value: "10+", label: "Tahun Pengalaman", icon: "fa-solid fa-calendar-days" },
  { value: "100%", label: "Kepuasan Pelanggan", icon: "fa-solid fa-chart-line" },
  { value: "15+", label: "Tim Ahli Las", icon: "fa-solid fa-user-gear" }
];

export const LAYANAN = [
  {
    id: "pagar",
    title: "Pagar Minimalis & Klasik",
    description: "Proteksi estetis luar biasa untuk mengamankan halaman depan rumah dari tindak kejahatan serta menaikkan kelas estetika hunian Anda.",
    icon: "fa-solid fa-door-closed",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    features: ["Bahan Besi Hollow Galvanis Tebal", "Finishing Anti Karat & Cat Halus", "Instalasi Rel & Roda Heavy Duty"]
  },
  {
    id: "kanopi",
    title: "Kanopi Premium",
    description: "Melindungi barang berharga Anda seperti kendaraan dari sengatan sinar matahari dan guyuran hujan, menjaga teras tetap sejuk.",
    icon: "fa-solid fa-umbrella",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    features: ["Atap Alderon Double, Solarflat, Tempered Glass", "Rangka Kokoh Hollow Galvanis", "Bebas Bocor & Dilengkapi Talang Air"]
  },
  {
    id: "teralis",
    title: "Teralis Jendela & Pengaman",
    description: "Penghalang fisik kokoh di setiap ventilasi udara dan jendela rumah untuk mencegah maling masuk tanpa mengurangi keindahan interior.",
    icon: "fa-solid fa-grid-3x3",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    features: ["Besi Nako Padat / Plat Strip", "Model Minimalis atau Tempa Klasik", "Sistem Kunci Pengaman Rahasia"]
  },
  {
    id: "railing",
    title: "Railing Tangga & Balkon",
    description: "Keamanan ekstra untuk sirkulasi bertingkat anggota keluarga, didesain modern agar seirama dengan tema interior minimalis.",
    icon: "fa-solid fa-bars-staggered",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    features: ["Kombinasi Besi-Kayu / Stainless Steel", "Kualitas Las Matang Tanpa Celah", "Pegangan Ergonomis Nyaman"]
  },
  {
    id: "pintu",
    title: "Pintu Besi & Folding Gate",
    description: "Proteksi tangguh untuk ruko, toko, garasi mobil, atau pintu secondary belakang rumah agar aman ditinggal bepergian jauh.",
    icon: "fa-solid fa-shield-halved",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    features: ["Ketebalan Slat Kokoh Berstandar", "Rel Presisi & Ringan Digeser", "Mekanisme Double Lock Anti Bongkar"]
  },
  {
    id: "custom",
    title: "Pekerjaan Las Custom",
    description: "Pembuatan rangka meja industrial, rak pot minimalis, tangga putar, tangga monyet, kandang hewan outdoor, dll sesuai pesanan.",
    icon: "fa-solid fa-screwdriver-wrench",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    features: ["Sesuai Blueprint Anda", "Bahan Besi Pilihan Terbaik", "Konsultasi Struktur Matang Berbeban"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Pagar Minimalis Modern Hitam Doff",
    category: "pagar",
    imageUrl: "https://images.unsplash.com/photo-1619322704995-5215d5f47a75?auto=format&fit=crop&q=80&w=600",
    description: "Pagar besi hollow galvanis dengan penutup fiber wood (WPC) memberi kesan private, mewah, dan asri."
  },
  {
    id: 2,
    title: "Kanopi Carport Atap Alderon Premium",
    category: "kanopi",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
    description: "Kanopi carport double wall Alderon, meredam berisik air hujan hingga 70% dan menahan panas ekstrem siang hari."
  },
  {
    id: 3,
    title: "Teralis Jendela Klasik Besi Nako Padat",
    category: "teralis",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    description: "Teralis jendela solid dengan model klasik elegan, dipasang rapi dari sisi bagian dalam kusen jendela rumah."
  },
  {
    id: 4,
    title: "Railing Tangga Hollow Kombinasi Kayu Jati",
    category: "railing",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    description: "Railing tangga besi kokoh dengan handling bar terbuat dari kayu jati finishing melamin mengkilap mewah."
  },
  {
    id: 5,
    title: "Pagar Gerbang Sliding Otomatis",
    category: "pagar",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600",
    description: "Desain pagar geser bermaterial kokoh, terintegrasi dengan sensor motor otomatis untuk kontrol remote jarak jauh."
  },
  {
    id: 6,
    title: "Kanopi Solartuff Transparan Teras Belakang",
    category: "kanopi",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=600",
    description: "Kanopi minimalis transparan memberikan cahaya alami yang asri namun melindung teras belakang dari air hujan."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Budi Satria",
    role: "Pemilik Rumah Tinggal",
    location: "Guguk Malintang, Padang Panjang",
    comment: "Pengerjaan pagarnya sangat memuaskan, las-lasannya matang dan rapi sekali. Finishing catnya tebal dan halus. Harganya sangat jujur sesuai dengan spek yang disepakati di awal. Sangat direkomendasikan!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    date: "12 Mei 2026"
  },
  {
    id: 2,
    name: "Hesty Larasati",
    role: "Ibu Rumah Tangga",
    location: "Bukittinggi, Sumbar",
    comment: "Kanopi Alderon yang dipasang bener-bener adem, pas hujan juga ga berisik seperti seng biasa. Tukangnya sopan, kerjanya cepat, dan kebersihan sisa material di teras disapu bersih setelah terpasang.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    date: "1 Juni 2026"
  },
  {
    id: 3,
    name: "Denny Wijaya",
    role: "Pemilik Ruko & Usaha Kuliner",
    location: "Batusangkar, Tanah Datar",
    comment: "Saya pesan folding gate pengaman buat outlet ruko kuliner saya. Mekanisme gesernya enteng banget, ga berat seperti folding lawas. Besinya tebal, bikin tenang kalau ditinggal malam hari. Mantap!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    date: "25 April 2026"
  },
  {
    id: 4,
    name: "Agus Setyawan",
    role: "Kontraktor Renovasi Hunian",
    location: "Batipuh, Padang Panjang",
    comment: "Sering langganan sub-las di sini untuk sirkulasi railing tangga rumah client saya. Selalu on-time pengirimannya dan hasil fabrikasi sesuai dengan detail gambar kerja sipil. Kemitraan yang sangat tepercaya.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    date: "14 Maret 2026"
  },
  {
    id: 5,
    name: "Santi Rahmawati",
    role: "Pemilik Rumah Baru",
    location: "Silaing Atas, Padang Panjang",
    comment: "Sangat terbantu dengan program Survey Gratis-nya. Saya awam soal las, diajari jenis-jenis besi agar pas di budget tapi awet. Hasil teralis jendela minimalisnya pas banget, dipandang dari luar cantik sekali.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    date: "10 Juni 2026"
  },
  {
    id: 6,
    name: "Robert Gunawan",
    role: "Pengusaha Ritel",
    location: "Tanah Hitam, Padang Panjang",
    comment: "Pintu pagar sliding remote-nya handal sekali. Respon owner super cepat dikoordinasikan via WhatsApp. Setelah dipasang, dikasih garansi kerusakan rongsokan 6 bulan. Layanan purnajual juara!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    date: "5 Mei 2026"
  }
];

export const PRICE_PACKAGES: PricePackage[] = [
  {
    name: "Paket Ekonomis",
    priceStart: "Rp 350.000",
    unit: "m²",
    description: "Pilihan hemat dengan budget ekonomis namun tetap mengutamakan standar keamanan struktur yang solid bagi hunian standar.",
    materials: [
      "Besi Hollow Hitam 1.2 mm",
      "Rangka 40x40 standard steel",
      "Atap Spandek / Polycarbonate Ekonomis",
      "Cat Finishing Solid Premium (1 Lapis dasar + 1 Lapis warna)",
      "Garansi Konstruksi 3 Bulan",
      "Pemasangan Standar"
    ],
    isPopular: false,
    ctaText: "Pesan Paket Ekonomis"
  },
  {
    name: "Paket Standar",
    badge: "Paling Populer",
    priceStart: "Rp 500.000",
    unit: "m²",
    description: "Keseimbangan sempurna antara estetika, daya tahan karat tinggi dengan besi hollow galvanis, dan perlindungan optimal jangka panjang.",
    materials: [
      "Besi Hollow Galvanis Anti Karat 1.4 mm",
      "Rangka 40x60 tebal kokoh premium",
      "Atap Alderon Single Wall / Solartuff UV Protection",
      "Cat Finishing Anti Karat Primer + Glossy Coating (2 Lapis)",
      "Garansi Struktur & Pudar 6 Bulan",
      "Survey & Pengukuran Gratis"
    ],
    isPopular: true,
    ctaText: "Pesan Paket Standar"
  },
  {
    name: "Paket Premium",
    priceStart: "Rp 750.000",
    unit: "m²",
    description: "Kemewahan dan ketahanan tanpa kompromi. Menggunakan material hollow galvanis tebal super industrial, atap mutakhir & jaminan garansi terlama.",
    materials: [
      "Besi Hollow Galvanis Tebal 1.8 mm - 2.0 mm",
      "Rangka 50x100 / Kombinasi Stainless SUS-304",
      "Atap Alderon Double Wall / Tempered Glass 8mm",
      "Cat Epoxy Primer Coating + Polyurethane Premium (Tahan Cuaca)",
      "Garansi Penuh 12 Bulan (1 Tahun)",
      "Prioritas Desain Custom & Konsultasi 3D",
      "Peredam Getaran & Sistem Talang Solid"
    ],
    isPopular: false,
    ctaText: "Pesan Paket Premium"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Apakah survey lokasi dan pengukuran di lokasi kami berbayar?",
    answer: "Sama sekali TIDAK. Biaya survey lokasi, pengukuran detail pintu/pagar/kanopi, serta diskusi awal desain di tempat tinggal Anda sepenuhnya GRATIS (Rp 0). Kami ingin memastikan Anda mendapatkan estimasi yang benar-benar akurat sesuai kondisi lapangan."
  },
  {
    id: 2,
    question: "Berapa lama waktu pengerjaan produksi pembuatan pagar atau kanopi?",
    answer: "Waktu pengerjaan berkisar antara 4 sampai 14 hari kerja setelah penawaran disepakati dan desain sudah difinalisasi. Kecepatan pengerjaan sangat bergantung dari ukuran, luas volume m², tingkat kerumitan desain, serta ketersediaan antrean produksi di bengkel kami."
  },
  {
    id: 3,
    question: "Apakah jasa pembuatan di Bengkel Las ini bergaransi?",
    answer: "Tentu saja! Kami sangat mengutamakan kepuasan jangka panjang pelanggan kami. Kami memberikan garansi kekuatan sambungan las dan kekuatan konstruksi dasar selama 3 hingga 12 bulan (tergantung paket material yang Anda pilih) terhitung setelah proses serah terima pemasangan rapi selesai dilakukan."
  },
  {
    id: 4,
    question: "Kerapian adalah masalah utama bengkel las liar, bagaimana dengan Bengkel Las Anda?",
    answer: "Kami sadar bahwa kerapian adalah pembeda bengkel profesional. Sebelum proses finishing pengecatan, kami selalu melakukan penggerindaan detail pada setiap sambungan las agar rata/halus dan mengisi celah tipis dengan dempulan berkualitas tinggi. Hasil sambungan tidak akan terlihat benjol/kasar."
  },
  {
    id: 5,
    question: "Apa perbedaan material Besi Hollow Hitam dengan Besi Hollow Galvanis?",
    answer: "Hollow hitam terbuat dari plat besi biasa yang cenderung lebih cepat berkarat jika terpapar lembab dan hujan, sehingga butuh pemeliharaan cat berkala. Sedangkan hollow galvanis telah dilapisi zinc anti-korosi di pabriknya, membuatnya jauh lebih tahan karat bertahun-tahun, sangat ideal untuk area luar ruang (pagar & kanopi)."
  },
  {
    id: 6,
    question: "Atap jenis apa saja yang direkomendasikan untuk kanopi carport?",
    answer: "Untuk meredam panas matahari dan berisik air hujan terbaik, kami sangat merekomendasikan Atap Alderon (Double Wall). Jika Anda menginginkan sirkulasi cahaya matahari masuk (semi-terang), Anda bisa memilih Atap Solartuff atau Solarflat Polycarbonate bermutu tinggi dengan lapisan pelindung sinar UV."
  },
  {
    id: 7,
    question: "Bagaimana sistem pembayaran dan metode transaksi?",
    answer: "Sistem pembayaran kami menggunakan skema transparan: Tanda jadi / DP (Down Payment) sebesar 40% - 50% dibayarkan setelah kesepakatan desain & rincian biaya penawaran ditandatangani. Sisa pelunasan dibayarkan ketika seluruh pemasangan di lokasi Anda sudah selesai 100% dan Anda sudah mengecek kerapian hasilnya secara langsung."
  },
  {
    id: 8,
    question: "Apakah saya bisa memesan desain pagar yang saya temukan sendiri di Instagram/Pinterest?",
    answer: "Sangat bisa! Silakan kirimkan foto screen capture atau link gambar desain tersebut kepada admin kami melalui WhatsApp. Ahli las kami akan mempelajari detail strukturnya, menyimulasikan kekuatan bebannya, dan mengaplikasikannya secara nyata persis seperti contoh referensi Anda."
  },
  {
    id: 9,
    question: "Berapa wilayah jangkauan kirim dan pemasangan bengkel las Anda?",
    answer: "Bengkel Las kami melayani pengiriman, survey, dan instalasi pemasangan secara penuh untuk area Padang Panjang, Batipuh X Koto, Batusangkar, dan Bukittinggi. Silakan konsultasikan alamat lengkap Anda pada admin."
  },
  {
    id: 10,
    question: "Bagaimana cara merawat pagar besi dan kanopi agar tahan lama bertahun-tahun?",
    answer: "Cukup bersihkan debu menempel secara berkala dengan air sabun ringan dan gosok lembut. Hindari benturan benda keras yang bisa mengelupas lapisan cat pelindung primer. Jika ada goresan kecil yang mengelupas di kemudian hari, segera cat ulang (touch-up) bagian tersebut agar udara lembab tidak meresap ke dalam besi."
  }
];

export const WORK_STEPS = [
  {
    step: "01",
    title: "Konsultasi Cepat via WhatsApp",
    description: "Diskusikan model, letak bidang rumah, dan estimasi kisaran budget awal yang Anda inginkan bersama CS kami yang bersahabat."
  },
  {
    step: "02",
    title: "Survey & Pengukuran Lokasi",
    description: "Tim ahli kami datang gratis ke lokasi Anda untuk mengukur bidang secara detail milimeter, membawa catalog model desain, serta contoh bahan besi."
  },
  {
    step: "03",
    title: "Rincian Penawaran & Desain",
    description: "Dapatkan rincian anggaran biaya (RAB) tertulis secara transparan, lengkap dengan komitmen jenis ketebalan besi hollow dan atap yang disepakati."
  },
  {
    step: "04",
    title: "Proses Fabrikasi (Produksi)",
    description: "Pekerjaan pemotongan, perakitan presisi, pengelasan matang, pendempulan, hingga finishing cat dilakukan terukur di bengkel las utama kami."
  },
  {
    step: "05",
    title: "Pengiriman & Instalasi Rapih",
    description: "Kami mengirim produk dengan armada pribadi dan melakukan instalasi pemasangan rapi, presisi, diuji kekuatan, dibersihkan, lalu diserahterimakan dengan garansi."
  }
];
