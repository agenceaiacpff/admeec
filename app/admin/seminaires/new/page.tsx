import { redirect } from "next/navigation";
import { AdminMenu } from "@/components/AdminMenu";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function NewSeminairePage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  return (
    <main className="section">
      <div className="container admin-layout">
        <AdminMenu />
        <section className="card">
          <h1>Nouveau séminaire</h1>
          <form className="form" action="/api/admin/seminaires" method="post">
            <input className="input" name="title" placeholder="Titre du séminaire" required />
            <textarea name="description" placeholder="Description" />
            <div className="two-cols"><input className="input" type="datetime-local" name="start_at" /><input className="input" type="datetime-local" name="end_at" /></div>
            <input className="input" name="location" placeholder="Lieu ou indication en ligne" />
            <input className="input" name="online_url" placeholder="Lien d’inscription, WhatsApp, YouTube, Google Meet..." />
            <select className="input" name="status" defaultValue="open"><option value="open">Ouvert</option><option value="closed">Fermé</option><option value="finished">Terminé</option></select>
            <button className="btn" type="submit">Publier le séminaire</button>
          </form>
        </section>
      </div>
    </main>
  );
}
