import type { PortfolioItem } from "@/app/_components/PortfolioCard";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "web-bakso-pak-eko",
    title: "Web UMKM Bakso Pak Eko",
    subtitle: "Landing Page + Online Order",
    category: "software",
    status: "completed",
    year: "2024",
    rank: "S",
    accentColor: "green",
    description:
      "Website landing page lengkap dengan sistem order online, menu digital, dan integrasi WhatsApp. Skor Lighthouse 98/100, loading di bawah 1 detik.",
    techStack: ["Next.js", "Tailwind CSS", "WhatsApp API", "Vercel"],
  },
  {
    id: "pos-toko-makmur",
    title: "Sistem Kasir Toko Makmur",
    subtitle: "Point of Sale Desktop App",
    category: "software",
    status: "completed",
    year: "2024",
    rank: "S",
    accentColor: "blue",
    description:
      "Aplikasi kasir offline-first dengan fitur manajemen stok real-time, laporan harian otomatis, multi-kasir, dan cetak struk thermal. Dipakai 3 cabang sekaligus.",
    techStack: ["Electron", "React", "SQLite", "Thermal Print"],
  },
  {
    id: "app-absensi-karyawan",
    title: "Aplikasi Absensi Mobile",
    subtitle: "Mobile App Android + iOS",
    category: "software",
    status: "completed",
    year: "2025",
    rank: "A",
    accentColor: "purple",
    description:
      "Aplikasi absensi karyawan dengan fitur face recognition, GPS geofencing, rekap jam kerja otomatis, dan dashboard admin berbasis web.",
    techStack: ["React Native", "Expo", "Face API", "Google Maps"],
  },
  {
    id: "pc-gaming-budget-king",
    title: "Rakit PC Gaming Budget King",
    subtitle: "Custom Build 8 Juta All-In",
    category: "hardware",
    status: "completed",
    year: "2024",
    rank: "S",
    accentColor: "amber",
    description:
      "Rakit PC gaming budget 8 juta dengan performa setara mid-range. Bisa main Valorant 200+ FPS, GTA V ultra settings 60 FPS. Termasuk manajemen kabel rapih dan RGB sync.",
    techStack: ["Ryzen 5 5600", "RX 6600", "16GB DDR4", "ARGB Build"],
  },
  {
    id: "service-laptop-acer",
    title: "Service + Upgrade Laptop Acer",
    subtitle: "Thermal Paste & RAM Upgrade",
    category: "hardware",
    status: "completed",
    year: "2025",
    rank: "A",
    accentColor: "rose",
    description:
      "Laptop Acer Nitro 5 dengan suhu idle 90°C berhasil diturunkan ke 45°C setelah full cleaning, ganti thermal paste premium, dan upgrade RAM ke 32GB dual-channel.",
    techStack: ["Thermal Paste", "RAM 32GB", "SSD NVMe", "Deep Clean"],
  },
  {
    id: "migrasi-cloud-cv-jaya",
    title: "Migrasi Cloud CV Jaya",
    subtitle: "On-Premise ke AWS Cloud",
    category: "konsultasi",
    status: "completed",
    year: "2024",
    rank: "S",
    accentColor: "blue",
    description:
      "Migrasi infrastruktur server on-premise perusahaan distributor ke AWS dengan Zero Downtime. Setup auto-scaling, backup harian otomatis, dan penghematan biaya operasional 40%.",
    techStack: ["AWS EC2", "RDS", "S3", "CloudFront", "Terraform"],
  },
  {
    id: "web-portofolio-fotografer",
    title: "Portofolio Web Fotografer",
    subtitle: "Gallery + Booking System",
    category: "software",
    status: "completed",
    year: "2025",
    rank: "A",
    accentColor: "rose",
    description:
      "Website portofolio fotografer profesional dengan galeri masonry yang smooth, sistem booking jadwal sesi foto, dan integrasi pembayaran Midtrans.",
    techStack: ["Next.js", "Framer Motion", "Midtrans", "Cloudinary"],
  },
  {
    id: "audit-keamanan-startup",
    title: "Audit Keamanan IT Startup",
    subtitle: "Penetration Testing & Report",
    category: "konsultasi",
    status: "completed",
    year: "2025",
    rank: "S",
    accentColor: "amber",
    description:
      "Audit keamanan menyeluruh untuk startup fintech: penetration testing API, review kode sumber, analisis kerentanan SQL injection & XSS. Ditemukan 12 celah kritis yang langsung dipatch.",
    techStack: ["OWASP", "Burp Suite", "Nmap", "Security Report"],
  },
  {
    id: "dashboard-analytics-umkm",
    title: "Dashboard Analytics UMKM",
    subtitle: "Business Intelligence Web App",
    category: "software",
    status: "ongoing",
    year: "2025",
    rank: "A",
    accentColor: "green",
    description:
      "Aplikasi dashboard analytics untuk jaringan UMKM kuliner. Menampilkan tren penjualan real-time, analisis produk terlaris, dan prediksi stok berbasis ML. Masih dalam pengembangan.",
    techStack: ["React", "Chart.js", "Python Flask", "PostgreSQL", "ML"],
  },
];

export const featuredPortfolio = portfolioItems.filter((item) =>
  ["web-bakso-pak-eko", "pc-gaming-budget-king", "migrasi-cloud-cv-jaya"].includes(item.id)
);
