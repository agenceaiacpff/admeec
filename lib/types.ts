export type DbMessage = {
  id?: string;
  title: string;
  slug: string;
  summary?: string | null;
  content?: string | null;
  main_verse?: string | null;
  category?: string | null;
  author?: string | null;
  image_url?: string | null;
  is_message_of_day?: boolean | null;
  status?: string | null;
  published_at?: string | null;
  created_at?: string | null;
};

export type Creation = {
  titre: string;
  description: string;
  categorie: string;
  type: string;
  niveau?: string;
  auteur?: string;
  date?: string;
  miniature?: string;
  page?: string;
  publie?: boolean;
  afficher_accueil?: boolean;
  tags?: string[];
  slug: string;
  iframeUrl?: string;
  categoryPath?: string;
  folderPath?: string;
};

export type MediaItem = {
  id?: string;
  title: string;
  slug?: string | null;
  description?: string | null;
  url?: string | null;
  thumbnail_url?: string | null;
  category?: string | null;
  status?: string | null;
  published_at?: string | null;
};

export type EventItem = {
  id?: string;
  title: string;
  description?: string | null;
  start_at?: string | null;
  end_at?: string | null;
  location?: string | null;
  online_url?: string | null;
  status?: string | null;
};
