insert into public.messages (title, slug, summary, content, main_verse, category, author, is_message_of_day, status, published_at)
values
('Jésus-Christ, la vraie réponse de Dieu', 'jesus-christ-vraie-reponse', 'Un message d’évangélisation pour rappeler que Jésus-Christ est le chemin, la vérité et la vie.', 'Beaucoup de personnes cherchent la solution à leurs douleurs dans les promesses humaines, les consultations trompeuses ou les pratiques qui éloignent de Dieu. Pourtant, l’Écriture présente Jésus-Christ comme la réponse véritable au besoin profond de l’homme. Il n’est pas seulement un enseignant religieux : Il est le Sauveur, le Seigneur et le chemin qui conduit au Père. Celui qui vient à Lui avec foi reçoit la lumière, le pardon et une nouvelle direction pour sa vie.', 'Jean 14:6', 'Évangile', 'Franck Cacharel GETCHOU', true, 'published', now()),
('Persévérer dans la Parole', 'perseverer-dans-la-parole', 'Un encouragement à demeurer dans l’enseignement de Christ malgré les circonstances.', 'La foi chrétienne ne se construit pas sur les émotions du moment, mais sur la Parole de Dieu reçue, méditée et pratiquée. Celui qui demeure dans la Parole apprend à reconnaître la vérité, à résister au mensonge et à avancer avec stabilité.', 'Jean 8:31-32', 'Discipulat', 'ADMEEC', false, 'published', now())
on conflict (slug) do nothing;

insert into public.seminaires (title, description, start_at, location, online_url, status)
values ('Séminaire de lancement ADMEEC', 'Présentation de la vision, enseignement biblique et orientation des groupes.', now() + interval '14 days', 'En ligne', 'https://www.youtube.com/@ADMEEC', 'open')
on conflict do nothing;
