import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${site.name} — Enseignement biblique, évangélisation et formation des disciples`,
  description: `${site.fullName}. Textes, vidéos, audios, lives, jeux bibliques, groupes, couples et séminaires chrétiens.`,
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const whatsapp = `https://wa.me/${site.whatsappNumber}`;
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <a className="btn green floating-whatsapp" href={whatsapp} target="_blank" aria-label="Contacter sur WhatsApp">WhatsApp</a>
        <Footer />
      </body>
    </html>
  );
}
