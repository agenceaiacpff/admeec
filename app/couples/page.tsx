import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";

export default function CouplesPage() {
  const themes = ["Fondement biblique du mariage", "Communication", "Pardon", "Fidélité", "Gestion des conflits", "Prière en couple", "Restauration de la confiance", "Éducation des enfants", "Finances du foyer", "Préparation au mariage", "Couples en crise", "Protection spirituelle du foyer"];
  return (
    <main className="section">
      <div className="container">
        <SectionTitle title="Accompagnement biblique des couples" text="Sessions pour couples, fiancés, familles et personnes désirant bâtir une relation selon la volonté de Dieu." />
        <div className="grid cards-3" style={{ marginBottom: 36 }}>{themes.map((t) => <Card key={t} title={t} text="Thème pouvant être traité dans les sessions d’accompagnement ou les séminaires couples." />)}</div>
        <div className="article"><h2>Demander une session couple</h2><p>Remplissez le formulaire. Votre demande sera enregistrée dans Supabase et pourra être traitée par l’équipe.</p><ContactForm type="couple" /></div>
      </div>
    </main>
  );
}
