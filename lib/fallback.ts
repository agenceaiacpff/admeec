import type { Creation } from "./types";

export const fallbackMessages = [
  {
    title: "Jésus-Christ, la vraie réponse de Dieu",
    slug: "jesus-christ-vraie-reponse",
    summary: "Un message d’évangélisation pour rappeler que Jésus-Christ est le chemin, la vérité et la vie.",
    content: `Beaucoup de personnes cherchent la solution à leurs douleurs dans les promesses humaines, les consultations trompeuses ou les pratiques qui éloignent de Dieu. Pourtant, l’Écriture présente Jésus-Christ comme la réponse véritable au besoin profond de l’homme. Il n’est pas seulement un enseignant religieux : Il est le Sauveur, le Seigneur et le chemin qui conduit au Père. Celui qui vient à Lui avec foi reçoit la lumière, le pardon et une nouvelle direction pour sa vie.`,
    main_verse: "Jean 14:6",
    category: "Évangile",
    author: "Franck Cacharel GETCHOU",
    is_message_of_day: true,
    published_at: new Date().toISOString()
  },
  {
    title: "Persévérer dans la Parole",
    slug: "perseverer-dans-la-parole",
    summary: "Un encouragement à demeurer dans l’enseignement de Christ malgré les circonstances.",
    content: `La foi chrétienne ne se construit pas sur les émotions du moment, mais sur la Parole de Dieu reçue, méditée et pratiquée. Celui qui demeure dans la Parole apprend à reconnaître la vérité, à résister au mensonge et à avancer avec stabilité.`,
    main_verse: "Jean 8:31-32",
    category: "Discipulat",
    author: "ADMEEC",
    is_message_of_day: false,
    published_at: new Date().toISOString()
  }
];

export const fallbackCreations: Creation[] = [
  {
    titre: "Quiz biblique sur le salut",
    description: "Un jeu interactif pour comprendre le salut en Jésus-Christ à travers des questions bibliques.",
    categorie: "jeux-bibliques",
    type: "jeu",
    niveau: "Facile",
    auteur: "Franck Cacharel GETCHOU",
    date: new Date().toISOString().slice(0, 10),
    miniature: "",
    page: "index.html",
    publie: true,
    afficher_accueil: true,
    tags: ["salut", "quiz", "Bible"],
    slug: "quiz-salut",
    iframeUrl: ""
  }
];
