import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getMedia } from "@/lib/content";
import { site } from "@/lib/constants";

export const dynamic = "force-dynamic";
export default async function VideosPage() {
  const videos = await getMedia("videos", 30);
  return <main className="section"><div className="container"><SectionTitle title="Vidéos chrétiennes" text="Enseignements, exhortations, réponses bibliques, témoignages et replays des lives." action={<a className="btn" href={site.youtube} target="_blank">S’abonner sur YouTube</a>} />{videos.length ? <div className="grid cards-3">{videos.map((v) => <Card key={v.id || v.title} title={v.title} text={v.description} meta={v.category} href={v.url || undefined} button="Voir la vidéo" />)}</div> : <div className="warning">Aucune vidéo n’est encore publiée dans Supabase. Ajoute des vidéos dans la table <strong>videos</strong>.</div>}</div></main>;
}
