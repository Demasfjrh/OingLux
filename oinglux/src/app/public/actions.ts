import { prisma } from "@/config/prisma";

export async function getAllPresets() {
  // Fetch all presets with author name
  const presets = await prisma.preset.findMany({
    include: {
      author: {
        select: { name: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
  // Map to fit the expected frontend structure
  return presets.map((preset) => ({
    id: preset.id,
    title: preset.title,
    author: preset.author?.name || "Unknown",
    description: preset.description,
    imageUrl: preset.imageUrl,
  }));
}
