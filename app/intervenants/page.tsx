import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/lib/constants";

export default function IntervenantsPage() {
  return <main className="section"><div className="container"><SectionTitle title="Intervenants et serviteurs" text="Présentation des personnes autorisées à contribuer aux enseignements, groupes, séminaires et lives." /><div className="grid cards-3"><Card title={site.responsible} text="Responsable principal de l’ADMEEC, engagé dans l’enseignement biblique, l’accompagnement spirituel et la formation des disciples." meta="Responsable principal" /><Card title="Devenir intervenant" text="Chaque intervenant doit être validé par l’équipe afin de garantir la fidélité biblique, l’humilité et la cohérence avec la vision." href="/contact" button="Proposer une intervention" /></div></div></main>;
}
