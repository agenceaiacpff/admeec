import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { getPublishedMessages } from "@/lib/content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Messages bibliques — ADMEEC" };

export default async function MessagesPage() {
  const messages = await getPublishedMessages(50);
  return (
    <main className="section">
      <div className="container">
        <SectionTitle title="Messages bibliques" text="Textes d’évangélisation, études bibliques, exhortations et enseignements pour grandir dans la foi chrétienne." />
        <div className="grid cards-3">
          {messages.map((m) => <Card key={m.slug} title={m.title} text={m.summary} meta={m.category || m.main_verse} href={`/messages/${m.slug}`} button="Lire l’enseignement" />)}
        </div>
      </div>
    </main>
  );
}
