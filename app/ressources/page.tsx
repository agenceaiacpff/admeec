import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getMedia } from "@/lib/content";

export const dynamic = "force-dynamic";
export default async function RessourcesPage() {
  const ressources = await getMedia("ressources", 50);
  return <main className="section"><div className="container"><SectionTitle title="Ressources gratuites" text="Fiches bibliques, guides de prière, plans de lecture, supports couples et documents de formation." />{ressources.length ? <div className="grid cards-3">{ressources.map((r) => <Card key={r.id || r.title} title={r.title} text={r.description} meta={r.category} href={r.url || undefined} button="Télécharger" />)}</div> : <div className="warning">Aucune ressource n’est encore publiée dans Supabase.</div>}</div></main>;
}
