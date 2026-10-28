import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { role, content } = body;

    if (!role || !content) {
      return NextResponse.json({ error: 'role and content are required' }, { status: 400 });
    }

    const sessionCheck = await sql`
      SELECT id FROM chat_sessions WHERE id = ${id}
    `;

    if (sessionCheck.length === 0) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const messageResult = await sql`
      INSERT INTO chat_messages (session_id, role, content)
      VALUES (${id}, ${role}, ${content})
      RETURNING id, session_id, role, content, created_at
    `;

    await sql`
      UPDATE chat_sessions
      SET updated_at = NOW()
      WHERE id = ${id}
    `;

    return NextResponse.json({ message: messageResult[0] });
  } catch (error) {
    console.error('Failed to add message:', error);
    return NextResponse.json({ error: 'Failed to add message' }, { status: 500 });
  }
}
