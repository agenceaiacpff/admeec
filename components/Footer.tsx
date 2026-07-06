import Link from "next/link";
import { site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ color: "#fff" }}><span className="logo-mark" /> <span>{site.name}<small style={{ color: "#bfd1ea" }}>{site.slogan}</small></span></div>
          <p>{site.fullName}. Un espace d’évangélisation, d’enseignement biblique, de formation des disciples et d’accompagnement.</p>
        </div>
        <div>
          <h3 style={{ color: "#fff" }}>Pages</h3>
          <p><Link href="/messages">Messages bibliques</Link><br/><Link href="/creations">Créations HTML5</Link><br/><Link href="/seminaires">Séminaires</Link><br/><Link href="/contact">Contact</Link></p>
        </div>
        <div>
          <h3 style={{ color: "#fff" }}>Contact</h3>
          <p>{site.email}<br/>{site.phone}<br/>WhatsApp disponible</p>
        </div>
        <div>
          <h3 style={{ color: "#fff" }}>Réseaux</h3>
          <p><a href={site.youtube} target="_blank">YouTube</a><br/><a href={site.facebook} target="_blank">Facebook</a><br/>TikTok : {site.tiktok}</p>
        </div>
      </div>
      <div className="container" style={{ marginTop: 28, color: "#91a8c6" }}>© {new Date().getFullYear()} ADMEEC. Tous droits réservés.</div>
    </footer>
  );
}
