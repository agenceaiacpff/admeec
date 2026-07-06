# Cahier de charges technique ADMEEC

## Vision technique

Créer une plateforme chrétienne dynamique avec serveur, capable de gérer deux types de contenus :

1. contenus structurés dans Supabase ;
2. créations HTML5 libres dans Supabase Storage.

## Objectif principal

Permettre à l’ADMEEC de publier des messages, vidéos, audios, lives, séminaires, groupes, ressources, demandes d’accompagnement et créations HTML5 personnalisées sans dépendre d’un générateur de site rigide.

## Technologies

- Next.js : site, routes, pages dynamiques, API serveur.
- Vercel : hébergement et build automatique.
- Supabase : base de données et Storage.
- HTML5/CSS/JS : créations libres.

## Pages principales

- Accueil
- À propos
- Messages bibliques
- Message individuel
- Créations HTML5 libres
- Création individuelle dans iframe
- Vidéos
- Audios
- Lives
- Jeux bibliques
- Groupes
- Couples
- Séminaires
- Intervenants
- Ressources
- Contact
- Administration

## Fonctionnement des créations HTML5 libres

Le site lit le bucket `creations-libres` dans Supabase Storage.

Chaque création doit être dans un dossier :

```text
categorie/slug/fiche.json
categorie/slug/index.html
```

Le site lit automatiquement `fiche.json`, puis affiche la création dans la bibliothèque.

## Pourquoi cette solution respecte la liberté du créateur

L’administration classique ne force pas toutes les pages à avoir la même forme. Elle est réservée aux contenus simples.

Les créations complexes restent libres : chaque jeu ou page HTML5 peut avoir son propre design, son CSS, son JavaScript, ses images, ses sons, son fonctionnement et sa logique.

## Sécurité

- `SUPABASE_SERVICE_ROLE_KEY` reste serveur uniquement.
- Les formulaires publics passent par les API Next.js.
- L’admin est protégé par `ADMIN_PASSCODE` et un cookie signé.
- Les contenus publics publiés sont lisibles via RLS.
- Les demandes privées ne sont pas lisibles publiquement.

## Évolutions possibles

- Gestion complète des vidéos dans admin.
- Upload direct des créations HTML5 depuis admin.
- Authentification Supabase complète.
- Espace membres.
- Groupes privés.
- Commentaires modérés.
- Newsletter.
- Tableau de bord des demandes.
- Système de dons.
- Application mobile.
