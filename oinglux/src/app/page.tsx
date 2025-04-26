'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <section className="text-center max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#504B38] drop-shadow-neon">
            Lightroom Preset Hub
          </h1>
          <p className="text-lg md:text-xl text-[#504B38] mb-8">
            Platform terbaik untuk berbagi dan menggunakan preset Lightroom. Temukan, gunakan, dan bagikan preset favoritmu dengan mudah. Nikmati nuansa simple, elegan, dan neon natural.
          </p>
        </section>
      </main>
      <Footer />
      <style jsx global>{`
        .drop-shadow-neon {
          text-shadow: 0 0 8px #B9B28A, 0 0 20px #B9B28A55;
        }
        .neon-glow {
          box-shadow: 0 0 8px #B9B28A, 0 0 24px #B9B28A88;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
