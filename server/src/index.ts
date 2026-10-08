import app from './app';
import { prisma } from './lib/prisma';

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`🚀 VENDORA server running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error('Failed to start server:', e);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

main();