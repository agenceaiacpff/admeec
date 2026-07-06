import { site } from "@/lib/constants";
import { Card } from "@/components/Card";

export const metadata = { title: "À propos — ADMEEC" };

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="article">
          <p className="badge">À propos</p>
          <h1>À propos de l’ADMEEC</h1>
          <p>{site.fullName}, en abrégé ADMEEC, est un mouvement chrétien consacré à l’annonce de l’Évangile de Jésus-Christ, à l’enseignement biblique et à la formation des disciples.</p>
          <p>La plateforme utilise les outils numériques pour mettre à disposition des textes, vidéos, audios, lives, jeux bibliques, groupes, séminaires et sessions d’accompagnement. Elle vise à aider chaque personne à connaître Dieu, comprendre les Écritures, marcher dans la vérité et vivre une foi active.</p>
          <p>Responsable principal : <strong>{site.responsible}</strong>.</p>
        </div>
        <section className="section">
          <div className="grid cards-3">
            <Card title="Vérité biblique" text="La Parole de Dieu est le fondement de la foi, de l’enseignement et de la conduite chrétienne." />
            <Card title="Discipulat" text="Former des disciples capables de comprendre, vivre et transmettre l’Évangile." />
            <Card title="Service" text="Encourager chaque croyant à servir Dieu et les autres avec humilité, amour et fidélité." />
          </div>
        </section>
      </div>
    </main>
  );
}
