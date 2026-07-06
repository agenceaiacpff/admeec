import Link from "next/link";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/constants";
import { getMessageOfDay, getPublishedMessages } from "@/lib/content";
import { listCreations } from "@/lib/creations";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [messageOfDay, messages, creations] = await Promise.all([
    getMessageOfDay(),
    getPublishedMessages(6),
    listCreations()
  ]);
  const featuredCreations = creations.filter((c) => c.afficher_accueil).slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Plateforme chrétienne dynamique</span>
            <h1>{site.fullName}</h1>
            <p className="lead">{site.slogan} Textes bibliques, vidéos, audios, lives, jeux bibliques, groupes, séminaires et accompagnement des couples.</p>
            <div className="actions">
              <Link className="btn" href="/messages">Lire les messages</Link>
              <Link className="btn gold" href="/creations">Ouvrir les créations HTML5</Link>
              <Link className="btn secondary" href="/contact">Demander un accompagnement</Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="scripture">« Allez, faites de toutes les nations des disciples... »<br/><small>Matthieu 28:19-20</small></div>
            <p style={{ color: "var(--muted)" }}>Responsable principal : <strong>{site.responsible}</strong></p>
            <p style={{ color: "var(--muted)" }}>Contact : {site.email}<br/>{site.phone}</p>
            <div className="actions"><a className="btn secondary" href={site.youtube} target="_blank">YouTube</a><a className="btn secondary" href={site.facebook} target="_blank">Facebook</a></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Message biblique du jour" text="Un message mis en avant pour nourrir la foi, orienter la prière et ramener les cœurs à Jésus-Christ." action={<Link className="btn secondary" href="/messages">Tous les messages</Link>} />
          {messageOfDay && <Card title={messageOfDay.title} text={messageOfDay.summary} meta={messageOfDay.main_verse || messageOfDay.category || "Enseignement"} href={`/messages/${messageOfDay.slug}`} button="Lire le message" />}
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle title="Notre mission" text="Annoncer Jésus-Christ, enseigner la Parole avec fidélité, former des disciples et accompagner les personnes dans leur marche avec Dieu." />
          <div className="grid cards-4">
            <Card title="Évangéliser" text="Annoncer Jésus-Christ comme Seigneur et Sauveur, avec clarté, amour et vérité biblique." />
            <Card title="Enseigner" text="Transmettre la Parole de Dieu par des textes, vidéos, audios, lives et supports pédagogiques." />
            <Card title="Former" text="Accompagner les croyants vers une foi solide, mature et capable de servir Dieu." />
            <Card title="Accompagner" text="Soutenir spirituellement les personnes, familles, jeunes et couples selon les principes bibliques." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Derniers messages" text="Chaque message peut être une page indépendante, créée dans Supabase ou publiée comme création HTML5 libre." />
          <div className="grid cards-3">
            {messages.map((m) => <Card key={m.slug} title={m.title} text={m.summary} meta={m.category || m.main_verse} href={`/messages/${m.slug}`} button="Lire" />)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle title="Créations bibliques HTML5" text="Zone libre pour tes jeux, cours, outils, animations et pages HTML5 spéciales. Tu téléverses un dossier dans Supabase Storage avec fiche.json, et le site l’affiche automatiquement." action={<Link className="btn" href="/creations">Voir la bibliothèque</Link>} />
          <div className="grid cards-3">
            {(featuredCreations.length ? featuredCreations : creations.slice(0,3)).map((c) => <Card key={`${c.categorie}-${c.slug}`} title={c.titre} text={c.description} meta={c.type} href={`/creations/${c.categorie}/${c.slug}`} tags={c.tags || []} button="Ouvrir" />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid cards-3">
          <Card title="Accompagnement des couples" text="Sessions bibliques pour la communication, le pardon, la prière, la restauration, la fidélité et la construction du foyer chrétien." href="/couples" button="Découvrir" />
          <Card title="Séminaires et formations" text="Programmes bibliques en ligne ou en présentiel : foi, prière, discipulat, évangélisation, couple et famille." href="/seminaires" button="Voir" />
          <Card title="Groupes et communauté" text="Groupes de prière, d’étude biblique, jeunes, couples, nouveaux convertis et intercesseurs." href="/groupes" button="Rejoindre" />
        </div>
      </section>
    </main>
  );
}
