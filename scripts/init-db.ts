import { initDatabase } from '@/lib/db';

async function main() {
  console.log('Initializing database...');
  await initDatabase();
  console.log('Database initialized successfully!');
}

main().catch((err) => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
