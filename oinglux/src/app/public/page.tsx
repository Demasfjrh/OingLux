'use client'
// halaman public untuk preset

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PresetCard from "@/components/PresetCard";
import { useRouter } from "next/navigation";

const presets = [
  {
    id: "1",
    title: "Sunset Glow",
    author: "Jane Doe",
    description: "Warm, vibrant tones for sunset photography.",
    imageUrl: "https://th.bing.com/th/id/OIP.-n61lGUfqQP8Mc2BpAvx8AHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    id: "2",
    title: "Moody Forest",
    author: "John Smith",
    description: "Deep greens and contrast for woodland shots.",
    imageUrl: "https://th.bing.com/th/id/OIP.2zoiVO0sOLyy8G39apFBLwHaEK?w=202&h=113&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
  {
    id: "3",
    title: "Urban Neon",
    author: "Alex Lee",
    description: "Electric neon vibes for city and night photos.",
    imageUrl: "https://th.bing.com/th/id/OIP.iVDCZoysUgWpxe7Z5hwQygHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.1&pid=1.7",
  },
];

export default function PublicPresetPage() {
  const router = useRouter();
  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#504B38] animate-fade-in">Koleksi Preset Lightroom</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {presets.map((preset) => (
            <div key={preset.id} className="relative">
              <PresetCard
                title={preset.title}
                author={preset.author}
                description={preset.description}
                imageUrl={preset.imageUrl}
                onUse={() => alert(`Preset '${preset.title}' digunakan!`)}
              />
              <div className="flex justify-center mt-3 space-x-3">
                <button
                  className="bg-[#504B38] text-[#F8F3D9] px-4 py-2 rounded-full font-semibold shadow hover:bg-[#B9B28A] hover:text-[#504B38] neon-glow transition text-sm"
                  onClick={() => alert(`Preset '${preset.title}' digunakan!`)}
                >
                  Gunakan
                </button>
                <button
                  className="bg-[#B9B28A] text-[#504B38] px-4 py-2 rounded-full font-semibold shadow hover:bg-[#504B38] hover:text-[#F8F3D9] neon-glow transition text-sm"
                  onClick={() => router.push(`/public/${preset.id}`)}
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}