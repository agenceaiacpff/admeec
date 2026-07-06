import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getMedia } from "@/lib/content";

export const dynamic = "force-dynamic";
export default async function AudiosPage() {
  const audios = await getMedia("audios", 30);
  return <main className="section"><div className="container"><SectionTitle title="Audios et enseignements à écouter" text="Messages audio, exhortations, méditations bibliques et séries à écouter partout." />{audios.length ? <div className="grid cards-3">{audios.map((a) => <Card key={a.id || a.title} title={a.title} text={a.description} meta={a.category} href={a.url || undefined} button="Écouter" />)}</div> : <div className="warning">Aucun audio n’est encore publié dans Supabase. Ajoute des audios dans la table <strong>audios</strong>.</div>}</div></main>;
}
