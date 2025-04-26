import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/public", label: "Lihat Preset" },
  { href: "/login", label: "Login" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#F8F3D9] border-b border-[#B9B28A] sticky top-0 z-50 shadow-md animate-fade-in">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center space-x-3">
          <span className="bg-[#504B38] rounded-full w-10 h-10 flex items-center justify-center text-[#F8F3D9] font-extrabold text-xl shadow-neon">LP</span>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[#504B38] whitespace-nowrap">Lightroom Preset Hub</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <button className="bg-[#504B38] text-[#F8F3D9] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#B9B28A] hover:text-[#504B38] neon-glow transition text-sm md:text-base">
                {link.label}
              </button>
            </Link>
          ))}
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle Menu"
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8 text-[#504B38]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F3D9] border-t border-[#B9B28A] animate-fade-in px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button className="w-full bg-[#504B38] text-[#F8F3D9] px-5 py-2 rounded-full font-semibold shadow hover:bg-[#B9B28A] hover:text-[#504B38] neon-glow transition text-base">
                  {link.label}
                </button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
