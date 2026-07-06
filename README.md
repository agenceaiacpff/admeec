# ADMEEC — Plateforme chrétienne dynamique avec serveur

Projet prêt pour déploiement en ligne sans installation locale sur votre ordinateur.

## Ce que contient ce projet

- Site dynamique Next.js pour ADMEEC.
- Déploiement prévu sur Vercel.
- Base de données Supabase.
- Formulaires dynamiques : contact, prière, accompagnement couple.
- Pages dynamiques : messages bibliques, vidéos, audios, lives, groupes, séminaires, ressources.
- Espace administrateur simple : création de messages et séminaires.
- Zone libre HTML5 dynamique : téléversez des dossiers dans Supabase Storage et le site les affiche automatiquement.

## Architecture centrale

Le site utilise deux systèmes complémentaires :

### 1. Contenus structurés Supabase

Pour les contenus simples :

- messages bibliques ;
- vidéos ;
- audios ;
- lives ;
- séminaires ;
- groupes ;
- ressources ;
- formulaires ;
- demandes de prière ;
- demandes d’accompagnement.

### 2. Créations HTML5 libres

Pour les créations non limitées par un modèle :

- jeux bibliques ;
- pages d’enseignement spéciales ;
- outils interactifs ;
- quiz ;
- animations ;
- cours HTML5 ;
- supports de séminaires ;
- pages couples avancées.

Ces créations sont placées dans le bucket Supabase Storage `creations-libres`.

Exemple de chemin dans Supabase Storage :

```text
creations-libres/jeux-bibliques/quiz-salut/index.html
creations-libres/jeux-bibliques/quiz-salut/style.css
creations-libres/jeux-bibliques/quiz-salut/script.js
creations-libres/jeux-bibliques/quiz-salut/fiche.json
creations-libres/jeux-bibliques/quiz-salut/miniature.svg
```

Le fichier le plus important est `fiche.json`.

## Exemple de fiche.json

```json
{
  "titre": "Quiz biblique sur le salut",
  "description": "Un jeu interactif pour comprendre le salut en Jésus-Christ à travers des questions bibliques.",
  "categorie": "jeux-bibliques",
  "type": "jeu",
  "niveau": "Facile",
  "auteur": "Franck Cacharel GETCHOU",
  "date": "2026-07-06",
  "miniature": "miniature.svg",
  "page": "index.html",
  "publie": true,
  "afficher_accueil": true,
  "tags": ["salut", "Jésus-Christ", "quiz", "Bible"]
}
```

## Variables d’environnement à configurer dans Vercel

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_CREATIONS_BUCKET=creations-libres
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSCODE=mot-de-passe-admin-tres-fort
ADMIN_SECRET=longue-phrase-secrete-pour-signer-les-cookies
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_WHATSAPP_NUMBER=237671310883
```

Ne publiez jamais `SUPABASE_SERVICE_ROLE_KEY` côté navigateur. Elle doit rester seulement dans Vercel, dans les variables serveur.

## Déploiement sans installation locale

1. Créez un dépôt GitHub vide.
2. Téléversez tous les fichiers de ce dossier dans le dépôt GitHub depuis le navigateur.
3. Dans Vercel, importez le dépôt GitHub.
4. Ajoutez les variables d’environnement.
5. Cliquez sur Deploy.
6. Créez un projet Supabase.
7. Exécutez `supabase/schema.sql` dans Supabase SQL Editor.
8. Exécutez éventuellement `supabase/seed_examples.sql` pour créer des exemples.
9. Créez ou vérifiez le bucket Storage `creations-libres`.
10. Téléversez les dossiers HTML5 depuis `exemples-upload-supabase` dans le bucket.

## Pages incluses

- `/` Accueil
- `/a-propos`
- `/messages`
- `/messages/[slug]`
- `/creations`
- `/creations/[categorie]/[slug]`
- `/videos`
- `/audios`
- `/lives`
- `/jeux-bibliques`
- `/groupes`
- `/couples`
- `/seminaires`
- `/intervenants`
- `/ressources`
- `/contact`
- `/admin`
- `/admin/login`
- `/admin/messages/new`
- `/admin/seminaires/new`

## Administration

L’administration simple est accessible à :

```text
/admin/login
```

Elle sert aux contenus basiques. Les créations HTML5 complexes sont gérées par Supabase Storage, afin de ne pas limiter votre liberté de création.

## Ajouter une création HTML5

1. Préparez votre dossier avec `index.html`, `style.css`, `script.js`, images et `fiche.json`.
2. Téléversez ce dossier dans Supabase Storage, bucket `creations-libres`.
3. Respectez ce format :

```text
categorie/slug-de-la-creation/fichiers
```

Exemple :

```text
jeux-bibliques/quiz-sur-la-priere/index.html
jeux-bibliques/quiz-sur-la-priere/fiche.json
```

4. Le site affichera automatiquement cette création dans `/creations`.
5. Pour cacher la création, mettez dans `fiche.json` :

```json
"publie": false
```

## Limite importante

Le site est dynamique côté serveur, mais il dépend de Supabase et Vercel. Les fichiers HTML5 libres ne doivent pas être ajoutés directement dans le serveur Vercel après déploiement. Ils doivent être mis dans Supabase Storage pour que le site les lise dynamiquement.
