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
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="bg-[#EBE5C2] rounded-xl shadow-lg p-8 max-w-lg w-full animate-fade-in">
          <img src={preset.imageUrl} alt={preset.title} className="w-full h-64 object-cover rounded-lg mb-6 border border-[#B9B28A]" />
          <h2 className="text-3xl font-bold text-[#504B38] mb-2">{preset.title}</h2>
          <p className="text-[#B9B28A] mb-4">by {preset.author}</p>
          <p className="text-[#504B38] mb-8">{preset.description}</p>
          <button
            className="w-full bg-[#504B38] text-[#F8F3D9] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#B9B28A] hover:text-[#504B38] neon-glow transition text-lg"
            onClick={() => alert(`Preset '${preset.title}' digunakan!`)}
          >
            Gunakan Preset
          </button>
        </div>
        <button
          className="mt-8 text-[#504B38] underline hover:text-[#B9B28A]"
          onClick={() => router.back()}
        >
          Kembali
        </button>
      </main>
      <Footer />
    </div>
  );
}
