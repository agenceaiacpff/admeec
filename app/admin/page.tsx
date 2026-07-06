import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminMenu } from "@/components/AdminMenu";
import { Card } from "@/components/Card";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  return (
    <main className="section">
      <div className="container admin-layout">
        <AdminMenu />
        <section>
          <h1>Tableau de bord ADMEEC</h1>
          <p className="lead">Cet espace sert aux contenus simples. Pour les pages HTML5 spéciales, utilise Supabase Storage avec un dossier contenant index.html et fiche.json.</p>
          <div className="grid cards-3">
            <Card title="Nouveau message biblique" text="Publier rapidement un message simple dans la base Supabase." href="/admin/messages/new" button="Créer" />
            <Card title="Nouveau séminaire" text="Ajouter une formation, un live spécial, une session couple ou un programme." href="/admin/seminaires/new" button="Créer" />
            <Card title="Créations HTML5 libres" text="Gère tes dossiers dans Supabase Storage : jeux, cours, outils, pages spéciales." href="/creations" button="Voir" />
          </div>
          <div className="warning" style={{ marginTop: 24 }}>
            Pour une administration plus avancée, on pourra ajouter ensuite : modification/suppression depuis le tableau de bord, gestion des vidéos, audios, groupes, témoignages et demandes.
          </div>
        </section>
      </div>
    </main>
  );
}
