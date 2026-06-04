import type { BlogPost } from "@/app/blog/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "tips-website-kenceng",
    title: "5 Tips Biar Website Lo Kenceng Gila",
    excerpt:
      "Skor Lighthouse 95+ bukan cuma buat gaya-gayaan. Website yang kenceng = lebih banyak pengunjung yang betah = lebih banyak cuan. Ini dia rahasianya.",
    category: "software",
    readTime: "5 menit",
    date: "2025-05-20",
    author: "Tim Techmate",
    coverGradient: "from-green-600 to-emerald-800",
    coverIcon: "⚡",
    content: `
Website lemot itu musuh utama bisnis online. Riset Google bilang 53% pengunjung kabur kalau website lo lebih dari 3 detik loadingnya. Serius, 3 detik doang! Nah, ini 5 tips yang squad Techmate selalu terapin buat semua proyek web.

## 1. Pakai Next.js dengan Static Generation (SSG)

Daripada render di server setiap request (SSR) atau di browser (CSR), static generation bikin HTML-nya sekali aja waktu build. Hasilnya? Loading instantaneous karena file-nya udah ada di CDN, gak perlu nunggu server.

\`\`\`jsx
// pages/index.js
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data }, revalidate: 3600 };
}
\`\`\`

## 2. Optimasi Gambar Wajib Hukumnya

Gambar gede yang gak dioptimasi itu pembunuh performa nomor satu. Pakai format WebP atau AVIF (ukurannya bisa 40-60% lebih kecil dari JPEG), dan selalu pakai \`next/image\` yang udah otomatis lazy loading.

## 3. Minimalkan JavaScript yang Dikirim ke Browser

Setiap KB JavaScript yang dikirim = waktu parse dan execute di browser. Pakai dynamic import untuk komponen yang gak dibutuhin di first load, dan rajin cek bundle analyzer.

## 4. Manfaatkan CDN Global

Deploy di platform yang punya CDN global (Vercel, Cloudflare) biar file website lo disajikan dari server yang paling deket sama pengunjung. Bedanya bisa 200-500ms per request!

## 5. Pasang Caching yang Bener

HTTP caching yang bener bisa bikin second visit jadi hampir instan. Set header \`Cache-Control\` yang tepat, manfaatin Service Worker untuk PWA, dan cache API response yang jarang berubah.

Dengan 5 tips ini, klien-klien Techmate rata-rata bisa dapet skor Lighthouse 90+ dan loading time di bawah 2 detik. Kalau mau web lo dioptimasi juga, hubungi kami!
    `,
  },
  {
    slug: "rakit-pc-gaming-budget",
    title: "Panduan Rakit PC Gaming Budget 2025",
    excerpt:
      "Main game AAA dengan budget terbatas? Bisa banget! Ini kombinasi komponen terbaik yang bisa lo rakit dengan 7-10 juta rupiah.",
    category: "hardware",
    readTime: "8 menit",
    date: "2025-06-01",
    author: "Tim Techmate",
    coverGradient: "from-blue-600 to-cyan-800",
    coverIcon: "🖥️",
    content: `
Gaming PC yang kenceng gak harus selalu mahal. Dengan riset yang bener dan pilihan komponen yang tepat, budget 7-10 juta bisa dapetin PC yang sanggup main game AAA di settingan medium-high dengan frame rate yang mulus.

## Build Rekomendasi: "Budget King" 8 Juta

### CPU: AMD Ryzen 5 5600 (~1.3 juta)
Prosesor terbaik di kelasnya. 6 core, 12 thread, single-core performance yang kenceng banget. Cocok buat gaming dan multitasking.

### GPU: Radeon RX 6600 atau RTX 3060 (~2.5-3 juta second)
Di harga ini, GPU second masih pilihan terbaik. RX 6600 bagus untuk 1080p gaming, sementara RTX 3060 bisa mulai eksplor 1440p.

### RAM: 16GB DDR4 3200MHz Dual Channel (~500 ribu)
Dual channel WAJIB! Bedanya bisa 15-20% performa dibanding single channel. Ambil 2x8GB daripada 1x16GB.

### SSD: 500GB NVMe PCIe 3.0 (~400 ribu)
Windows + game terbaru minimal butuh 500GB. NVMe jauh lebih kenceng dari SATA SSD untuk loading game.

### Mobo: B550M dengan PCIe 4.0 (~700 ribu)
Pilih yang ada PCIe 4.0 buat futureproof. MSI B550M Pro-VDH WiFi jadi pilihan value terbaik.

### PSU: 550-650W 80+ Bronze (~500 ribu)
Jangan irit di PSU! PSU jelek bisa rusak semua komponen lo. EVGA atau Corsair Bronze sudah cukup reliable.

### Case: ATX Mid-Tower dengan airflow bagus (~400 ribu)
Airflow yang bagus = suhu komponen lebih rendah = umur panjang. Cari yang punya banyak ventilasi.

## Estimasi Performa

- **Valorant**: 200+ FPS di all low
- **CS2**: 150+ FPS di medium
- **GTA V**: 60+ FPS di high settings
- **Cyberpunk 2077**: 40-50 FPS di medium (1080p)

Butuh bantuan rakit atau mau konsultasi build yang sesuai budget lo? Hubungi squad Techmate!
    `,
  },
  {
    slug: "cloud-vs-vps-pilih-mana",
    title: "Cloud vs VPS: Pilih Mana Buat Bisnis?",
    excerpt:
      "Bingung antara pakai cloud provider (AWS, GCP) atau VPS biasa? Ini breakdown lengkap buat bantu lo ambil keputusan yang tepat.",
    category: "konsultasi",
    readTime: "6 menit",
    date: "2025-05-10",
    author: "Tim Techmate",
    coverGradient: "from-amber-600 to-orange-800",
    coverIcon: "☁️",
    content: `
Satu pertanyaan yang paling sering masuk ke inbox Techmate: "Mending pakai AWS/GCP atau VPS biasa?" Jawabannya: tergantung! Mari kita breakdown.

## VPS (Virtual Private Server)

VPS itu server fisik yang dibagi-bagi jadi beberapa bagian virtual. Lo dapet resource yang dedicated (CPU, RAM, Storage) dengan harga yang predictable.

**Cocok untuk:**
- Startup early-stage dengan budget terbatas
- Traffic yang predictable dan stabil
- Tim yang udah familiar dengan manajemen server Linux
- Budget bulanan 100-500 ribu rupiah

**Provider recommended:** Contabo, Hetzner, DigitalOcean (Droplet kecil)

## Cloud (AWS, GCP, Azure)

Cloud itu infrastructure as a service yang scalable. Lo bayar sesuai pemakaian, dan bisa scale up/down kapanpun.

**Cocok untuk:**
- Aplikasi dengan traffic yang tidak predictable (spike tiba-tiba)
- Startup yang lagi scale up cepat
- Aplikasi yang butuh high availability (99.99% uptime)
- Tim yang mau fokus ke produk, bukan manajemen server

**Biaya:** Lebih mahal, tapi bisa lebih hemat kalau dioptimasi dengan benar.

## Rekomendasi Techmate

Untuk bisnis early-stage: mulai dengan VPS + setup yang proper (Nginx, SSL, backup harian). Budget terjangkau, performa cukup.

Begitu traffic mulai gak predictable atau lo butuh fitur managed service (database, caching, CDN), baru pertimbangkan migrasi ke cloud.

Butuh konsultasi lebih lanjut? Tim Techmate siap bantu lo bikin keputusan yang tepat sesuai kebutuhan bisnis!
    `,
  },
  {
    slug: "kenali-tanda-laptop-harus-service",
    title: "7 Tanda Laptop Lo Harus Segera Diservice",
    excerpt:
      "Laptop lo mulai berasa aneh? Jangan tunggu sampai mati total. Kenali 7 tanda bahaya ini sebelum terlambat dan data lo hilang.",
    category: "hardware",
    readTime: "4 menit",
    date: "2025-04-15",
    author: "Tim Techmate",
    coverGradient: "from-rose-600 to-pink-800",
    coverIcon: "🔧",
    content: `
Laptop itu kayak motor — kalau mulai ada gejala aneh, jangan ditunda-tunda buat diservice. Lebih baik diservis dini daripada harus ganti komponen yang lebih mahal, atau worse, kehilangan data penting.

## 1. Suhu Berlebihan (Overheating)

Kalau laptop lo panas sampai bikin tangan gak nyaman ditaruh di atas keyboard, itu tanda thermal paste-nya udah kering atau fan-nya kotor. Suhu normal laptop gaming saat load: 70-85°C. Di atas 90°C = bahaya!

## 2. Fan Berisik atau Gak Jalan

Fan yang berisik kayak suara kaset rusak, atau fan yang gak berputar sama sekali, adalah tanda masalah serius. Tanpa fan, laptop bisa overheat dalam hitungan menit.

## 3. Baterai Drop Drastis

Baterai normal seharusnya bisa bertahan 3-5 tahun. Kalau dari 100% langsung ke 0% dalam 30 menit, atau laptop mati tiba-tiba di 30%, itu baterai udah waktunya diganti.

## 4. Blue Screen of Death (BSOD) Berulang

BSOD sesekali bisa karena software. Tapi kalau berulang, bisa jadi RAM bermasalah, HDD/SSD mulai bad sector, atau bahkan masalah di motherboard.

## 5. Layar Berkedip atau Ada Garis

Masalah di LCD panel, kabel fleksibel layar, atau GPU. Jangan dibiarin karena bisa makin parah.

## 6. Keyboard atau Trackpad Gak Merespons

Bisa karena kabel koneksi longgar, liquid damage, atau komponen rusak. Segera bawa ke teknisi sebelum makin melebar.

## 7. Laptop Mati Sendiri Tanpa Sebab

Ini bisa disebabkan berbagai hal: overheating, masalah PSU/baterai, hingga komponen yang mau fail. Jangan tunggu sampai mati total dan data gak bisa direcovery!

Squad Techmate siap bantu diagnosa dan service laptop lo. Konsultasi gratis via WhatsApp!
    `,
  },
  {
    slug: "nextjs-vs-wordpress-2025",
    title: "Next.js vs WordPress di 2025: Mana yang Lebih Worth It?",
    excerpt:
      "WordPress masih dominan, tapi Next.js makin banyak dipilih. Kapan pakai yang mana? Ini analisis jujur dari sudut pandang developer.",
    category: "software",
    readTime: "7 menit",
    date: "2025-03-22",
    author: "Tim Techmate",
    coverGradient: "from-purple-600 to-violet-800",
    coverIcon: "⚗",
    content: `
Di 2025, pertanyaan "WordPress atau Next.js?" masih sering banget ditanyain ke tim Techmate. Dan jawabannya gak hitam-putih — keduanya punya keunggulan masing-masing tergantung kebutuhan.

## WordPress: Sang Veteran

WordPress masih merajai 43% dari seluruh website di internet. Dan ada alasannya.

**Kelebihan:**
- Setup cepat, bahkan non-developer bisa kelola konten sendiri
- Ekosistem plugin yang massive (WooCommerce, Yoast, dll)
- Hosting murah tersedia dimana-mana
- Ideal untuk blog, company profile, portal berita

**Kekurangan:**
- Performa bisa lambat kalau gak dioptimasi
- Keamanan perlu ekstra perhatian (target favorit hacker)
- Customisasi mendalam butuh skill PHP
- Plugin berlebihan = website lambat dan berat

## Next.js: Si Baru yang Powerful

Next.js dari Vercel adalah React framework yang jadi pilihan developer modern.

**Kelebihan:**
- Performa luar biasa (SSG, ISR, App Router)
- Developer experience yang jauh lebih baik
- Scalable untuk aplikasi kompleks
- Built-in image optimization, routing, API

**Kekurangan:**
- Butuh developer untuk setup dan maintenance
- Tidak ada CMS bawaan (butuh Headless CMS terpisah)
- Hosting butuh Node.js atau platform seperti Vercel
- Learning curve lebih tinggi

## Rekomendasi Techmate

**Pilih WordPress jika:**
- Lo atau tim perlu bisa edit konten sendiri tanpa developer
- Budget terbatas dan timeline mepet
- Website relatif simpel: company profile, blog, landing page

**Pilih Next.js jika:**
- Performa adalah prioritas utama (e-commerce, aplikasi)
- Lo punya developer atau anggaran untuk hire
- Butuh custom feature yang gak bisa dicapai dengan plugin
- Skalabilitas jangka panjang penting

Techmate bisa bantu implementasi keduanya. Konsultasikan kebutuhan lo dan kita tentukan pilihan terbaik bersama!
    `,
  },
  {
    slug: "cara-backup-data-yang-bener",
    title: "Cara Backup Data yang Bener (dan Sering Diabaikan)",
    excerpt:
      "Data hilang itu mimpi buruk yang bisa dicegah. Pelajari strategi backup 3-2-1 yang dipakai perusahaan-perusahaan besar untuk proteksi data mereka.",
    category: "konsultasi",
    readTime: "5 menit",
    date: "2025-02-28",
    author: "Tim Techmate",
    coverGradient: "from-teal-600 to-cyan-800",
    coverIcon: "🛡️",
    content: `
"Backup itu penting" — semua orang tau. Tapi berapa banyak yang beneran lakuin dengan benar? Data hilang adalah mimpi buruk yang lebih sering terjadi dari yang kita kira: laptop kecurian, HDD rusak tiba-tiba, ransomware, atau bahkan hapus file gak sengaja.

## Strategi 3-2-1: Standar Industri

Aturan emas backup yang dipakai enterprise di seluruh dunia:

- **3** salinan data (1 original + 2 backup)
- **2** media penyimpanan berbeda (misalnya HDD + cloud)
- **1** offsite backup (disimpan di lokasi berbeda)

Kenapa 3-2-1? Karena kalau ada bencana (kebakaran, banjir), backup di lokasi yang sama pun ikut hilang.

## Tools Backup yang Direkomendasikan

### Untuk Personal/UMKM:
- **Google Drive / OneDrive**: Sync otomatis, mudah diakses
- **Backblaze Personal**: $7/bulan untuk unlimited backup komputer
- **External HDD**: Backup lokal mingguan/bulanan

### Untuk Bisnis:
- **AWS S3 + Glacier**: Murah untuk cold storage jangka panjang
- **Veeam**: Solusi backup enterprise yang comprehensive
- **Acronis**: All-in-one backup + cybersecurity

## Yang Sering Diabaikan

1. **Test restore berkala** — Backup yang gak pernah dicoba restore itu seperti asuransi palsu!
2. **Backup database terpisah** — File website oke, tapi database-nya ketinggalan
3. **Verifikasi integritas file** — Backup corrupt gak ada gunanya
4. **Retention policy** — Berapa lama backup disimpan?

Tim Techmate bisa bantu setup sistem backup yang proper untuk bisnis lo. Jangan tunggu sampai data hilang dulu baru action!
    `,
  },
];
