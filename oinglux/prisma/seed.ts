
import { PrismaClient } from '@prisma/client';
import { createHash } from '../helpers/bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Bersihin data lama (biar fresh)
  await prisma.preset.deleteMany();
  await prisma.user.deleteMany();

  // Bikin hash password
  const password = await createHash('123456');

  // Buat user admin + 3 preset
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      password,
      presets: {
        create: [
          {
            title: 'Sunset Glow',
            description: 'Warm, vibrant tones for sunset photography.',
            imageUrl: 'https://th.bing.com/th/id/OIP.-n61lGUfqQP8Mc2BpAvx8AHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7',
          },
          {
            title: 'Moody Forest',
            description: 'Deep greens and contrast for woodland shots.',
            imageUrl: 'https://th.bing.com/th/id/OIP.2zoiVO0sOLyy8G39apFBLwHaEK?w=202&h=113&c=7&r=0&o=5&dpr=1.1&pid=1.7',
          },
          {
            title: 'Urban Neon',
            description: 'Electric neon vibes for city and night photos.',
            imageUrl: 'https://th.bing.com/th/id/OIP.iVDCZoysUgWpxe7Z5hwQygHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.1&pid=1.7',
          },
        ],
      },
    },
  });

  console.log('✅ Admin and presets created successfully!');
  console.log({ admin });
}

main()
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🛑 Prisma disconnected.');
  });
