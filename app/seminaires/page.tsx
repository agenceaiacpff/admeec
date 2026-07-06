import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getEvents } from "@/lib/content";

export const dynamic = "force-dynamic";
export default async function SeminairesPage() {
  const seminaires = await getEvents("seminaires", 50);
  return <main className="section"><div className="container"><SectionTitle title="Séminaires et formations" text="Formations bibliques, ateliers de discipulat, programmes couples, évangélisation, prière et service chrétien." />{seminaires.length ? <div className="grid cards-3">{seminaires.map((s) => <Card key={s.id || s.title} title={s.title} text={s.description} meta={s.start_at ? new Date(s.start_at).toLocaleString("fr-FR") : s.location} href={s.online_url || "/contact"} button="S’inscrire" />)}</div> : <div className="warning">Aucun séminaire n’est encore publié. Tu peux en créer depuis <strong>/admin/seminaires/new</strong> après configuration.</div>}</div></main>;
}
