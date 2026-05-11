import { getCloudflareContext } from "@opennextjs/cloudflare";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CharacterPageClient } from "./CharacterPageClient";

interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  personality: string;
  route_hint: string;
  icon: string;
}

interface Route {
  id: number;
  character_slug: string;
  title: string;
  slug: string;
  summary: string;
  difficulty: string;
  ending_count: number;
}

interface Ending {
  id: number;
  route_slug: string;
  name: string;
  slug: string;
  ending_type: string;
  description: string;
  unlock_hint: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let character: Character | null = null;

  try {
    const { env } = await getCloudflareContext();
    const db = (env as any).DB as D1Database;
    const result = await db
      .prepare("SELECT * FROM characters WHERE slug = ?")
      .bind(slug)
      .first();
    character = result as Character | null;
  } catch {
    return { title: "Character Not Found" };
  }

  if (!character) return { title: "Character Not Found" };

  return {
    title: `${character.name} Guide — The Freak Circus | All Endings & Routes`,
    description: `Complete ${character.name} route guide for The Freak Circus. ${character.role} — ${character.personality}. All endings, choices, and spoiler-free hints.`,
    openGraph: {
      title: `${character.name} Guide — The Freak Circus`,
      description: `${character.role}: ${character.personality}`,
      url: `https://thefreakcircusguide.com/characters/${slug}`,
      type: "article",
    },
  };
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let character: Character | null = null;
  let routes: Route[] = [];
  let endings: Ending[] = [];

  try {
    const { env } = await getCloudflareContext();
    const db = (env as any).DB as D1Database;

    character = (await db
      .prepare("SELECT * FROM characters WHERE slug = ?")
      .bind(slug)
      .first()) as Character | null;

    if (!character) notFound();

    const [routesResult, endingsResult] = await Promise.all([
      db
        .prepare("SELECT * FROM routes WHERE character_slug = ? ORDER BY sort_order")
        .bind(slug)
        .all(),
      db
        .prepare(
          "SELECT e.* FROM endings e JOIN routes r ON e.route_slug = r.slug WHERE r.character_slug = ? ORDER BY e.sort_order"
        )
        .bind(slug)
        .all(),
    ]);

    routes = (routesResult.results || []) as unknown as Route[];
    endings = (endingsResult.results || []) as unknown as Ending[];
  } catch (e) {
    console.error("Failed to load character data:", e);
    notFound();
  }

  return (
    <CharacterPageClient
      character={character}
      routes={routes}
      endings={endings}
    />
  );
}
