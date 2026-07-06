# Étapes sans installation sur votre ordinateur

## 1. Créer GitHub

Créez un dépôt nommé :

```text
admeec-site
```

Puis téléversez tous les fichiers de ce dossier depuis le navigateur.

## 2. Créer Vercel

Dans Vercel :

```text
Add New > Project > Import Git Repository > admeec-site > Deploy
```

Vercel installera automatiquement le projet sur ses serveurs.

## 3. Créer Supabase

Créez un projet Supabase.

Ouvrez :

```text
SQL Editor > New query
```

Collez le contenu de :

```text
supabase/schema.sql
```

Puis exécutez.

Vous pouvez ensuite exécuter :

```text
supabase/seed_examples.sql
```

pour avoir des contenus de démonstration.

## 4. Ajouter les variables dans Vercel

Dans Vercel :

```text
Project > Settings > Environment Variables
```

Ajoutez :

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
ADMIN_PASSCODE
ADMIN_SECRET
NEXT_PUBLIC_CREATIONS_BUCKET
NEXT_PUBLIC_WHATSAPP_NUMBER
```

Puis redéployez.

## 5. Ajouter vos créations HTML5 libres

Dans Supabase :

```text
Storage > creations-libres
```

Téléversez vos dossiers en gardant cette structure :

```text
categorie/nom-de-la-creation/index.html
categorie/nom-de-la-creation/fiche.json
categorie/nom-de-la-creation/style.css
categorie/nom-de-la-creation/script.js
```

Exemple :

```text
jeux-bibliques/quiz-salut/index.html
jeux-bibliques/quiz-salut/fiche.json
```

Le site les affiche dans :

```text
/creations
```

## 6. Utiliser l’admin

Allez à :

```text
/admin/login
```

Entrez le mot de passe `ADMIN_PASSCODE` que vous avez mis dans Vercel.

Vous pourrez créer :

- messages bibliques simples ;
- séminaires.

Pour les pages très personnalisées, utilisez plutôt Supabase Storage avec `fiche.json`.
