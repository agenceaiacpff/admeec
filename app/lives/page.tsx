import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getEvents } from "@/lib/content";

export const dynamic = "force-dynamic";
export default async function LivesPage() {
  const lives = await getEvents("lives", 30);
  return <main className="section"><div className="container"><SectionTitle title="Lives et directs" text="Programme des directs, liens vers les lives et replays des enseignements." />{lives.length ? <div className="grid cards-3">{lives.map((l) => <Card key={l.id || l.title} title={l.title} text={l.description} meta={l.start_at ? new Date(l.start_at).toLocaleString("fr-FR") : "Live"} href={l.online_url || undefined} button="Suivre" />)}</div> : <div className="warning">Aucun live n’est encore programmé dans Supabase. Ajoute un direct dans la table <strong>lives</strong>.</div>}</div></main>;
}
