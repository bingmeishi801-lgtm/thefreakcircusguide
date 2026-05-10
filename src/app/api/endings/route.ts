import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function GET() {
  try {
    const { env } = getCloudflareContext();
    const db = (env as any).DB as D1Database;
    const rows = await db.prepare('SELECT * FROM endings ORDER BY sort_order').all();
    return NextResponse.json({ data: rows.results });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
