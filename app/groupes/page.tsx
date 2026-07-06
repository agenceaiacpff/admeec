import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getEvents } from "@/lib/content";

export const dynamic = "force-dynamic";
export default async function GroupesPage() {
  const groupes = await getEvents("groupes", 30);
  const defaultGroups = ["Groupe de prière", "Groupe d’étude biblique", "Nouveaux convertis", "Groupe des couples", "Jeunes", "Intercesseurs"];
  return <main className="section"><div className="container"><SectionTitle title="Groupes ADMEEC" text="Rejoindre une communauté de prière, d’étude, de discipulat et d’accompagnement." />{groupes.length ? <div className="grid cards-3">{groupes.map((g) => <Card key={g.id || g.title} title={g.title} text={g.description} meta={g.location} href={g.online_url || "/contact"} button="Rejoindre" />)}</div> : <div className="grid cards-3">{defaultGroups.map((g) => <Card key={g} title={g} text="Groupe à configurer dans Supabase ou à relier à WhatsApp." href="/contact" button="Demander à rejoindre" />)}</div>}</div></main>;
}
