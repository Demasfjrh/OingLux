import React from "react";

const Footer = () => (
  <footer className="bg-[#504B38] text-[#F8F3D9] py-10 mt-16 animate-fade-in">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="text-xl font-bold mb-2 text-[#EBE5C2]">Lightroom Preset Hub</div>
        <p className="text-sm mb-4">Upload, discover, and use Lightroom presets with ease. Empowering creators and users worldwide.</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" aria-label="Instagram" className="hover:text-[#B9B28A] transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></a>
          <a href="#" aria-label="GitHub" className="hover:text-[#B9B28A] transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /></svg></a>
        </div>
      </div>
      <div>
        <div className="font-semibold mb-2 text-[#EBE5C2]">Product</div>
        <ul className="space-y-1 text-sm">
          <li><a href="#features" className="hover:text-[#B9B28A]">Features</a></li>
          <li><a href="/public/preset" className="hover:text-[#B9B28A]">Browse Presets</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-2 text-[#EBE5C2]">Authors</div>
        <ul className="space-y-1 text-sm">
          <li>
            <span className="block font-medium">Designer:</span>
            <a href="mailto:oinglolot99@gmail.com" className="hover:text-[#B9B28A] flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4v16h20V4H2zm2 2h16v.511l-8 6.222-8-6.222V6zm0 2.489l7.445 5.795a1 1 0 0 0 1.11 0L20 8.489V18H4V8.489z"/></svg>
              <span>oinglolot99@gmail.com</span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9B28A] flex items-center space-x-1 mt-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
              <span>Instagram</span>
            </a>
          </li>
          <li className="mt-2">
            <span className="block font-medium">Developer:</span>
            <a href="mailto:demasfjanitro@gmail.com" className="hover:text-[#B9B28A] flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4v16h20V4H2zm2 2h16v.511l-8 6.222-8-6.222V6zm0 2.489l7.445 5.795a1 1 0 0 0 1.11 0L20 8.489V18H4V8.489z"/></svg>
              <span>demasfjanitro@gmail.com</span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9B28A] flex items-center space-x-1 mt-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-[#B9B28A] mt-8">&copy; {new Date().getFullYear()} Lightroom Preset Hub. All rights reserved.</div>
  </footer>
);

export default Footer;
