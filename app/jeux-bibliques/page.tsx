import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { listCreations } from "@/lib/creations";

export const dynamic = "force-dynamic";
export default async function GamesPage() {
  const games = (await listCreations()).filter((c) => c.categorie === "jeux-bibliques" || c.type.toLowerCase().includes("jeu"));
  return <main className="section"><div className="container"><SectionTitle title="Jeux bibliques" text="Quiz, défis, mémorisation des versets, vrai ou faux biblique et jeux interactifs HTML5." />{games.length ? <div className="grid cards-3">{games.map((g) => <Card key={g.slug} title={g.titre} text={g.description} meta={g.niveau || g.type} href={`/creations/${g.categorie}/${g.slug}`} tags={g.tags || []} button="Jouer" />)}</div> : <div className="warning">Aucun jeu n’est encore publié. Téléverse un dossier dans <strong>creations-libres/jeux-bibliques</strong>.</div>}</div></main>;
}
