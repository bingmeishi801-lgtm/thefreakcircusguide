import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function GET() {
  try {
    const { env } = getCloudflareContext();
    const db = (env as any).DB as D1Database;
    await db.prepare('SELECT 1').first();
    return NextResponse.json({ status: 'ok', service: 'tfc-guide', db: 'connected' });
  } catch (e) {
    return NextResponse.json({ status: 'error', db: 'disconnected', error: String(e) }, { status: 500 });
  }
}
