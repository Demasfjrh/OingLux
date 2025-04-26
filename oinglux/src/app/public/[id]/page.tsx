'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, useRouter } from "next/navigation";

const presets = [
  {
    id: "1",
    title: "Sunset Glow",
    author: "Jane Doe",
    description: "Warm, vibrant tones for sunset photography.",
    imageUrl: "/sample-preset-1.jpg",
  },
  {
    id: "2",
    title: "Moody Forest",
    author: "John Smith",
    description: "Deep greens and contrast for woodland shots.",
    imageUrl: "/sample-preset-2.jpg",
  },
  {
    id: "3",
    title: "Urban Neon",
    author: "Alex Lee",
    description: "Electric neon vibes for city and night photos.",
    imageUrl: "/sample-preset-3.jpg",
  },
];

export default function PresetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const preset = presets.find((p) => p.id === params.id);

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
