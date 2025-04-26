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
          <li><a href="#for-authors" className="hover:text-[#B9B28A]">For Authors</a></li>
          <li><a href="/login" className="hover:text-[#B9B28A]">Login</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-2 text-[#EBE5C2]">Newsletter</div>
        <form className="flex flex-col space-y-2">
          <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-[#B9B28A] text-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#F8F3D9]" />
          <button type="submit" className="bg-[#EBE5C2] hover:bg-[#F8F3D9] transition text-[#504B38] rounded px-3 py-2 font-semibold">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="text-center text-xs text-[#B9B28A] mt-8">&copy; {new Date().getFullYear()} Lightroom Preset Hub. All rights reserved.</div>
  </footer>
);

export default Footer;
