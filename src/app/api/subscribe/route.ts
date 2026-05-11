import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(request: Request) {
  try {
    const { env } = getCloudflareContext();
    const db = (env as any).DB as D1Database;
    const body = await request.json() as { email?: string };
    const email = body.email?.trim();

    if (!email || !email.includes('@') || email.length > 254) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    await db.prepare(
      'INSERT OR IGNORE INTO subscriptions (email, source) VALUES (?, ?)'
    ).bind(email, 'website').run();

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { env } = getCloudflareContext();
    const db = (env as any).DB as D1Database;
    const row = await db.prepare('SELECT COUNT(*) as count FROM subscriptions').first() as any;
    return NextResponse.json({ count: row?.count || 0 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
