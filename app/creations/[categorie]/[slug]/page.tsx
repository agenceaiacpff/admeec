import Link from "next/link";
import { notFound } from "next/navigation";
import { getCreation } from "@/lib/creations";

export const dynamic = "force-dynamic";

export default async function CreationPage({ params }: { params: Promise<{ categorie: string; slug: string }> }) {
  const { categorie, slug } = await params;
  const creation = await getCreation(categorie, slug);
  if (!creation) return notFound();
  return (
    <main className="section">
      <div className="container">
        <div className="breadcrumb"><Link href="/creations">Créations</Link> / {creation.categorie} / {creation.slug}</div>
        <div className="section-head">
          <div>
            <p className="badge">{creation.type}{creation.niveau ? ` — ${creation.niveau}` : ""}</p>
            <h1>{creation.titre}</h1>
            <p className="lead">{creation.description}</p>
          </div>
          {creation.iframeUrl && <a className="btn secondary" href={creation.iframeUrl} target="_blank">Ouvrir en plein écran</a>}
        </div>
        {creation.iframeUrl ? <iframe className="creation-frame" src={creation.iframeUrl} title={creation.titre} /> : <div className="warning">Cette création de démonstration s’affichera pleinement après configuration de Supabase Storage.</div>}
      </div>
    </main>
  );
}
