import { redirect } from "next/navigation";
import { AdminMenu } from "@/components/AdminMenu";
import { categories } from "@/lib/constants";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function NewMessagePage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  return (
    <main className="section">
      <div className="container admin-layout">
        <AdminMenu />
        <section className="card">
          <h1>Nouveau message biblique</h1>
          <form className="form" action="/api/admin/messages" method="post">
            <input className="input" name="title" placeholder="Titre du message" required />
            <input className="input" name="slug" placeholder="Slug personnalisé optionnel" />
            <input className="input" name="summary" placeholder="Résumé court" />
            <div className="two-cols">
              <input className="input" name="main_verse" placeholder="Verset principal, ex : Jean 14:6" />
              <select className="input" name="category">{categories.map((c) => <option key={c}>{c}</option>)}</select>
            </div>
            <input className="input" name="author" placeholder="Auteur" defaultValue="Franck Cacharel GETCHOU" />
            <textarea name="content" placeholder="Texte complet du message" required style={{ minHeight: 320 }} />
            <label><input type="checkbox" name="is_message_of_day" /> Afficher comme message du jour</label>
            <select className="input" name="status" defaultValue="published"><option value="published">Publié</option><option value="draft">Brouillon</option></select>
            <button className="btn" type="submit">Publier le message</button>
          </form>
        </section>
      </div>
    </main>
  );
}
