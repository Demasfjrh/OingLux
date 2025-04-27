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
  const [search, setSearch] = useState("");

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

  // Filter presets by search query (case-insensitive)
  const filteredPresets = presets.filter(preset =>
    preset.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#504B38]">Koleksi Preset Lightroom</h1>
        <div className="w-full max-w-md mb-8 flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-[#B9B28A] bg-[#F8F3D9] text-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#B9B28A] transition text-base placeholder-[#B9B28A]"
            placeholder="Cari preset berdasarkan nama..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Cari preset"
          />
        </div>
        {loading ? (
          <div className="text-[#504B38]">Loading presets...</div>
        ) : error ? (
          <div className="text-[#504B38]">Error loading presets: {error.message}</div>
        ) : filteredPresets.length === 0 ? (
          <div className="text-[#504B38]">Preset tidak ditemukan.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {filteredPresets.map((preset) => (
              <div
                key={preset.id}
                className="bg-[#EBE5C2] rounded-xl border border-[#B9B28A] shadow-sm p-4 flex flex-col items-stretch hover:shadow-md transition-shadow duration-200"
              >
                <PresetCard
                  title={preset.title}
                  author={preset.author}
                  description={preset.description}
                  imageUrl={preset.imageUrl}
                  onUse={() => alert(`Preset '${preset.title}' digunakan!`)}
                />
                <div className="flex flex-row gap-2 mt-4 w-full">
                  <button
                    className="flex-1 bg-[#504B38] text-[#F8F3D9] py-2 rounded-full font-semibold shadow-sm hover:bg-[#B9B28A] hover:text-[#504B38] transition text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#504B38]"
                    onClick={() => alert(`Preset '${preset.title}' digunakan!`)}
                  >
                    Gunakan
                  </button>
                  <button
                    className="flex-1 bg-[#B9B28A] text-[#504B38] py-2 rounded-full font-semibold shadow-sm hover:bg-[#504B38] hover:text-[#F8F3D9] transition text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
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