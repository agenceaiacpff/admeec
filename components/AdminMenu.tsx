import Link from "next/link";

export function AdminMenu() {
  return (
    <aside className="card admin-menu">
      <h3>Administration</h3>
      <p>Gestion rapide des contenus simples. Les créations HTML5 avancées se gèrent par Supabase Storage.</p>
      <p><Link href="/admin">Tableau de bord</Link><br/><Link href="/admin/messages/new">Nouveau message</Link><br/><Link href="/admin/seminaires/new">Nouveau séminaire</Link></p>
      <form action="/api/admin/logout" method="post"><button className="btn secondary" type="submit">Se déconnecter</button></form>
    </aside>
  );
}
