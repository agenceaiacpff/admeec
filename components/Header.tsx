import Link from "next/link";
import { menu, site } from "@/lib/constants";

export function Header() {
  const whatsapp = `https://wa.me/${site.whatsappNumber}`;
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Accueil ADMEEC">
          <span className="logo-mark" />
          <span>{site.name}<small>{site.fullName}</small></span>
        </Link>
        <nav className="navlinks" aria-label="Navigation principale">
          {menu.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="btn green" href={whatsapp} target="_blank">WhatsApp</Link>
        </nav>
      </div>
    </header>
  );
}
