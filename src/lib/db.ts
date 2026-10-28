import { neon } from '@neondatabase/serverless';

const connectionString = 'postgresql://neondb_owner:npg_oRCTwA42hcvB@ep-old-cherry-aoqi8gyv-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

export const sql = neon(connectionString);

export async function initDatabase() {
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
