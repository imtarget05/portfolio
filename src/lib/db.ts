import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;

export const sql = connectionString
  ? neon(connectionString)
  : ((..._args: any[]) => {
      throw new Error('DATABASE_URL environment variable is required');
    }) as any;

export async function initDatabase() {
  if (!connectionString) {
    console.warn('DATABASE_URL not set; database initialization skipped.');
    return;
  }
  await sql`
    CREATE TABLE IF NOT EXISTS chat_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      user_id TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS chat_messages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      session_id UUID NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
      role TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id 
    ON chat_messages(session_id)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_chat_sessions_updated_at 
    ON chat_sessions(updated_at DESC)
  `;
}
