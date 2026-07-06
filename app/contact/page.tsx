import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/constants";

export default function ContactPage() {
  return <main className="section"><div className="container"><div className="hero-grid"><div><p className="badge">Contact ADMEEC</p><h1>Contacter l’ADMEEC</h1><p className="lead">Pour une demande de prière, une question biblique, un accompagnement, un séminaire, un groupe ou une intervention.</p><div className="card"><h3>Coordonnées</h3><p>Email : {site.email}<br/>Téléphone / WhatsApp : {site.phone}<br/>TikTok : {site.tiktok}</p><div className="actions"><a className="btn green" href={`https://wa.me/${site.whatsappNumber}`} target="_blank">Écrire sur WhatsApp</a><a className="btn secondary" href={site.youtube} target="_blank">YouTube</a></div></div></div><div className="card"><h2>Envoyer une demande</h2><ContactForm /></div></div></div></main>;
}
