export const site = {
  name: "ADMEEC",
  fullName: "Assemblée des Disciples Missionnaires pour l’Évangélisation et l’Enseignement Chrétien",
  slogan: "Former des disciples, enseigner la Parole, annoncer Jésus-Christ.",
  responsible: "Franck Cacharel GETCHOU",
  email: "pca@aiac-cm.org",
  phone: "+237 671 310 883",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "237671310883",
  youtube: "https://www.youtube.com/@ADMEEC",
  facebook: "https://facebook.com/admeec",
  tiktok: "lareponsedelespritsaint"
};

export const menu = [
  { label: "Accueil", href: "/" },
  { label: "Messages", href: "/messages" },
  { label: "Créations", href: "/creations" },
  { label: "Médias", href: "/videos" },
  { label: "Couples", href: "/couples" },
  { label: "Séminaires", href: "/seminaires" },
  { label: "Contact", href: "/contact" }
];

export const categories = [
  "Évangile",
  "Foi",
  "Prière",
  "Sanctification",
  "Couple",
  "Famille",
  "Jeunesse",
  "Discipulat",
  "Combat spirituel",
  "Étude biblique"
];
