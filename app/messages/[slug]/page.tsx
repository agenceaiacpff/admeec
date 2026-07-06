import Link from "next/link";
import { notFound } from "next/navigation";
import { getMessageBySlug } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function MessagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const message = await getMessageBySlug(slug);
  if (!message) return notFound();
  return (
    <main className="section">
      <div className="container">
        <div className="breadcrumb"><Link href="/messages">Messages bibliques</Link> / {message.category || "Enseignement"}</div>
        <article className="article">
          <p className="badge">{message.category || "Message biblique"}</p>
          <h1>{message.title}</h1>
          {message.main_verse && <p className="scripture">{message.main_verse}</p>}
          {message.summary && <p className="lead">{message.summary}</p>}
          <div>{(message.content || "").split("\n").filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}</div>
          <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "32px 0" }} />
          <h3>Prière finale</h3>
          <p>Seigneur Jésus-Christ, aide-moi à recevoir Ta Parole avec foi, à marcher dans la vérité et à grandir dans une relation sincère avec Dieu. Amen.</p>
          <div className="actions"><Link className="btn" href="/contact">Demander une prière</Link><Link className="btn secondary" href="/messages">Lire un autre message</Link></div>
        </article>
      </div>
    </main>
  );
}
