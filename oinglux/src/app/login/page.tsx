'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-[#EBE5C2] rounded-xl shadow-lg p-8 w-full max-w-md animate-fade-in flex flex-col gap-5"
        >
          <h1 className="text-3xl font-bold text-[#504B38] mb-2 text-center">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded bg-[#F8F3D9] border border-[#B9B28A] text-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#504B38]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded bg-[#F8F3D9] border border-[#B9B28A] text-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#504B38]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#504B38] text-[#F8F3D9] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#B9B28A] hover:text-[#504B38] neon-glow transition text-lg disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
