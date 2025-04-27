'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, useRouter } from "next/navigation";
import { getPresetById } from "../actions";
import { useEffect, useState } from "react";

export default function PresetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [preset, setPreset] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPreset() {
      setLoading(true);
      try {
        const data = await getPresetById(params.id as string);
        setPreset(data);
      } catch (err: any) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }
    if (params.id) fetchPreset();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F8F3D9]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-[#504B38] font-bold">Loading preset...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F8F3D9]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-[#504B38] font-bold">Error: {error.message}</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (!preset) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F8F3D9]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-[#504B38] font-bold">Preset tidak ditemukan.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F3D9]">
      <Header />
      <main className="flex-1 flex flex-col items-center px-2 md:px-4 py-10 md:py-16">
        <div className="bg-[#EBE5C2] rounded-2xl shadow-lg border border-[#B9B28A] max-w-2xl w-full p-0 md:p-0 flex flex-col md:flex-row gap-0 md:gap-8 animate-fade-in">
          <div className="flex-1 flex items-center justify-center p-6 md:p-8">
            <img
              src={preset.imageUrl}
              alt={preset.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl border border-[#B9B28A] shadow-md bg-[#F8F3D9]"
              style={{ maxWidth: 400 }}
              draggable={false}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#504B38] mb-2">{preset.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#B9B28A] font-medium">by {preset.author}</span>
                {preset.category && <span className="ml-2 px-2 py-0.5 rounded bg-[#504B38] text-[#F8F3D9] text-xs font-semibold">{preset.category}</span>}
              </div>
              <p className="text-[#504B38] mb-4 whitespace-pre-line">{preset.description}</p>
              {preset.tags && Array.isArray(preset.tags) && preset.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {preset.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-[#B9B28A] text-[#504B38] text-xs font-medium">#{tag}</span>
                  ))}
                </div>
              )}
              <div className="text-xs text-[#B9B28A] mb-4">
                {preset.createdAt && <span>Dibuat: {new Date(preset.createdAt).toLocaleDateString()}</span>}
                {preset.updatedAt && <span className="ml-2">Update: {new Date(preset.updatedAt).toLocaleDateString()}</span>}
              </div>
            </div>
            <button
              className="w-full bg-[#504B38] text-[#F8F3D9] px-8 py-3 rounded-full font-semibold shadow-sm hover:bg-[#B9B28A] hover:text-[#504B38] transition text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#504B38] mt-2"
              onClick={() => alert(`Preset '${preset.title}' digunakan!`)}
            >
              Gunakan Preset
            </button>
          </div>
        </div>
        <button
          className="mt-8 text-[#504B38] underline hover:text-[#B9B28A] transition text-base"
          onClick={() => router.back()}
        >
          Kembali
        </button>
      </main>
      <Footer />
    </div>
  );
}
