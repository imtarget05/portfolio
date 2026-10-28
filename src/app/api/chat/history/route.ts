import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const sessions = await sql`
      SELECT id, title, user_id, created_at, updated_at
      FROM chat_sessions
      ORDER BY updated_at DESC
      LIMIT 20
    `;
    return NextResponse.json({ sessions });
  } catch (error) {
    console.error('Failed to fetch sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, user_id } = body;

    const result = await sql`
      INSERT INTO chat_sessions (title, user_id)
      VALUES (${title || 'New Conversation'}, ${user_id || null})
      RETURNING id, title, user_id, created_at, updated_at
    `;

    return NextResponse.json({ session: result[0] });
  } catch (error) {
    console.error('Failed to create session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
