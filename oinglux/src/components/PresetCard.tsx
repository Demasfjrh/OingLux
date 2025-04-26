import React from "react";
import { motion } from "framer-motion";

interface PresetCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  onUse: () => void;
}

const PresetCard: React.FC<PresetCardProps> = ({ title, author, description, imageUrl, onUse }) => (
  <motion.div
    className="bg-[#F8F3D9] rounded-xl shadow-lg p-6 flex flex-col items-center border border-[#B9B28A] hover:shadow-2xl transition relative group"
    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #B9B28A55" }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "spring" }}
  >
    <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden bg-[#EBE5C2] flex items-center justify-center">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-lg font-bold text-[#504B38] mb-1">{title}</h3>
    <p className="text-xs text-[#B9B28A] mb-2">by {author}</p>
    <p className="text-sm text-[#504B38] mb-4 text-center">{description}</p>
    <button
      onClick={onUse}
      className="bg-[#504B38] text-[#F8F3D9] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#B9B28A] hover:text-[#504B38] transition border-2 border-[#B9B28A] neon-glow"
    >
      Use Preset
    </button>
  </motion.div>
);

export default PresetCard;
