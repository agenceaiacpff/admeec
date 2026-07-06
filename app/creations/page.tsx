import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { listCreations } from "@/lib/creations";

export const dynamic = "force-dynamic";
export const metadata = { title: "Créations bibliques HTML5 — ADMEEC" };

export default async function CreationsPage() {
  const creations = await listCreations();
  const cats = [...new Set(creations.map((c) => c.categorie))];
  return (
    <main className="section">
      <div className="container">
        <SectionTitle title="Bibliothèque des créations bibliques HTML5" text="Cette page est dynamique : elle lit les dossiers publiés dans Supabase Storage, récupère chaque fiche.json et affiche automatiquement les jeux, outils et pages spéciales." />
        <div className="warning" style={{ marginBottom: 24 }}>Pour ajouter une création : téléverse un dossier dans le bucket Supabase <strong>creations-libres</strong>, avec <strong>index.html</strong> et <strong>fiche.json</strong>. Le site l’affiche sans modifier le code.</div>
        {cats.map((cat) => (
          <section key={cat} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 30, textTransform: "capitalize" }}>{cat.replaceAll("-", " ")}</h2>
            <div className="grid cards-3">
              {creations.filter((c) => c.categorie === cat).map((c) => (
                <Card key={`${c.categorie}-${c.slug}`} title={c.titre} text={c.description} meta={`${c.type}${c.niveau ? ` — ${c.niveau}` : ""}`} tags={c.tags || []} href={`/creations/${c.categorie}/${c.slug}`} button="Ouvrir la création" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
