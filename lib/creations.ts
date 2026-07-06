import { noStore } from "next/cache";
import { createSupabasePublicClient } from "./supabase";
import { fallbackCreations } from "./fallback";
import type { Creation } from "./types";

const bucket = process.env.NEXT_PUBLIC_CREATIONS_BUCKET || "creations-libres";
const fileName = "fiche.json";

function normalizeCategory(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

async function readJson(path: string): Promise<Record<string, unknown> | null> {
  const supabase = createSupabasePublicClient();
  if (!supabase) return null;
  const { data, error } = await supabase.storage.from(bucket).download(path);
  if (error || !data) return null;
  try {
    return JSON.parse(await data.text()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function publicUrl(path: string): string {
  const supabase = createSupabasePublicClient();
  if (!supabase) return "";
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

export async function listCreations(): Promise<Creation[]> {
  noStore();
  const supabase = createSupabasePublicClient();
  if (!supabase) return fallbackCreations;

  const { data: categories, error: categoriesError } = await supabase.storage.from(bucket).list("", { limit: 100, sortBy: { column: "name", order: "asc" } });
  if (categoriesError || !categories?.length) return fallbackCreations;

  const result: Creation[] = [];
  for (const category of categories) {
    const categoryPath = category.name;
    if (!categoryPath || categoryPath.includes(".")) continue;
    const { data: folders } = await supabase.storage.from(bucket).list(categoryPath, { limit: 200, sortBy: { column: "name", order: "asc" } });
    if (!folders?.length) continue;

    for (const folder of folders) {
      const slug = folder.name;
      if (!slug || slug.includes(".")) continue;
      const folderPath = `${categoryPath}/${slug}`;
      const fiche = await readJson(`${folderPath}/${fileName}`);
      if (!fiche || fiche.publie === false) continue;
      const page = String(fiche.page || "index.html");
      const categorie = normalizeCategory(String(fiche.categorie || categoryPath));
      result.push({
        titre: String(fiche.titre || slug),
        description: String(fiche.description || "Création biblique interactive."),
        categorie,
        type: String(fiche.type || "creation"),
        niveau: fiche.niveau ? String(fiche.niveau) : undefined,
        auteur: fiche.auteur ? String(fiche.auteur) : undefined,
        date: fiche.date ? String(fiche.date) : undefined,
        miniature: fiche.miniature ? publicUrl(`${folderPath}/${String(fiche.miniature)}`) : undefined,
        page,
        publie: fiche.publie !== false,
        afficher_accueil: Boolean(fiche.afficher_accueil),
        tags: Array.isArray(fiche.tags) ? fiche.tags.map(String) : [],
        slug,
        categoryPath,
        folderPath,
        iframeUrl: publicUrl(`${folderPath}/${page}`)
      });
    }
  }

  return result.length ? result : fallbackCreations;
}

export async function getCreation(categorie: string, slug: string): Promise<Creation | null> {
  const items = await listCreations();
  return items.find((item) => item.categorie === normalizeCategory(categorie) && item.slug === slug) || null;
}
