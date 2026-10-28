import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const sessionResult = await sql`
      SELECT id, title, user_id, created_at, updated_at
      FROM chat_sessions
      WHERE id = ${id}
    `;

    if (sessionResult.length === 0) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const messages = await sql`
      SELECT id, session_id, role, content, created_at
      FROM chat_messages
      WHERE session_id = ${id}
      ORDER BY created_at ASC
    `;

    return NextResponse.json({ session: sessionResult[0], messages });
  } catch (error) {
    console.error('Failed to fetch session:', error);
    return NextResponse.json({ error: 'Failed to fetch session' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const result = await sql`
      DELETE FROM chat_sessions
      WHERE id = ${id}
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete session:', error);
    return NextResponse.json({ error: 'Failed to delete session' }, { status: 500 });
  }
}
