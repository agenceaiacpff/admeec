import { noStore } from "next/cache";
import { createSupabasePublicClient } from "./supabase";
import { fallbackMessages } from "./fallback";
import type { DbMessage, EventItem, MediaItem } from "./types";

export async function getPublishedMessages(limit = 20): Promise<DbMessage[]> {
  noStore();
  const supabase = createSupabasePublicClient();
  if (!supabase) return fallbackMessages.slice(0, limit);

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error || !data?.length) return fallbackMessages.slice(0, limit);
  return data as DbMessage[];
}

export async function getMessageOfDay(): Promise<DbMessage | null> {
  noStore();
  const supabase = createSupabasePublicClient();
  if (!supabase) return fallbackMessages.find((m) => m.is_message_of_day) || fallbackMessages[0];

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("status", "published")
    .eq("is_message_of_day", true)
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return fallbackMessages.find((m) => m.is_message_of_day) || fallbackMessages[0];
  return data as DbMessage;
}

export async function getMessageBySlug(slug: string): Promise<DbMessage | null> {
  noStore();
  const supabase = createSupabasePublicClient();
  if (!supabase) return fallbackMessages.find((m) => m.slug === slug) || null;

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error || !data) return fallbackMessages.find((m) => m.slug === slug) || null;
  return data as DbMessage;
}

export async function getMedia(table: "videos" | "audios" | "ressources", limit = 24): Promise<MediaItem[]> {
  noStore();
  const supabase = createSupabasePublicClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data || []) as MediaItem[];
}

export async function getEvents(table: "lives" | "seminaires" | "groupes", limit = 24): Promise<EventItem[]> {
  noStore();
  const supabase = createSupabasePublicClient();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("start_at", { ascending: true })
    .limit(limit);
  if (error) return [];
  return (data || []) as EventItem[];
}
