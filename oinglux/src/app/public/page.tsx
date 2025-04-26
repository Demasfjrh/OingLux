'use client'
// halaman public untuk preset

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PresetCard from "@/components/PresetCard";
import { useRouter } from "next/navigation";
import { getAllPresets } from "./actions";
import { useEffect, useState } from "react";

export default function PublicPresetPage() {
  const router = useRouter();
  const [presets, setPresets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPresets() {
      setLoading(true);
      try {
        const data = await getAllPresets();
        setPresets(data);
      } catch (err: any) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }
    fetchPresets();
  }, []);

  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-[#504B38] animate-fade-in">Koleksi Preset Lightroom</h1>
        {loading ? (
          <div className="text-[#504B38]">Loading presets...</div>
        ) : error ? (
          <div className="text-[#504B38]">Error loading presets: {error.message}</div>
        ) : (
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
        )}
      </main>
      <Footer />
    </div>
  );
}