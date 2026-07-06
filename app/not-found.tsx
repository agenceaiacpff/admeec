import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <div className="article">
          <p className="badge">Page introuvable</p>
          <h1>Cette page n’existe pas encore</h1>
          <p>Le contenu demandé n’est pas publié ou la création HTML5 n’a pas encore été ajoutée correctement dans Supabase Storage.</p>
          <div className="actions"><Link className="btn" href="/">Retour à l’accueil</Link><Link className="btn secondary" href="/creations">Voir les créations</Link></div>
        </div>
      </div>
    </main>
  );
}
