'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

const banners = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Slide to next/prev with animation
  const slideTo = (target: number) => {
    setCurrent(target);
  };

  // Auto-slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      slideTo((current + 1) % banners.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-2 md:px-4 py-10 md:py-20">
        <section className="w-full flex flex-col items-center mb-12 animate-fade-in">
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] xl:h-[600px] max-w-5xl rounded-3xl overflow-hidden shadow-2xl">
            <img
              key={current}
              src={banners[current]}
              alt={`Banner ${current + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0 transition-all duration-500 ease-in-out opacity-100 animate-carousel-fade"
              style={{ zIndex: 2 }}
              draggable={false}
            />
          </div>
        </section>
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
        @keyframes carouselFade {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
        .animate-carousel-fade {
          animation: carouselFade 0.5s;
        }
      `}</style>
    </div>
  );
}
