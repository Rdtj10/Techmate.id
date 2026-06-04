import type { Metadata } from "next";
import PortfolioPage from "./page";

export const metadata: Metadata = {
  title: "Portofolio | Techmate - Rekap Misi Yang Udah Clear",
  description:
    "Lihat koleksi lengkap proyek yang udah berhasil diselesaikan squad Techmate — dari web kenceng, hardware adem, sampai cloud aman.",
};

export default function Page() {
  return <PortfolioPage />;
}
