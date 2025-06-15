
import React from "react";
import "./SlinkySection.css";
import { Youtube } from "lucide-react";

const SlinkySection: React.FC = () => {
  const rings = Array.from({ length: 13 });

  return (
    <div className="flex w-full justify-center py-5 select-none relative">
      <div className="slinky relative">
        {/* Centered YouTube logo */}
        <div className="absolute left-1/2 top-[35%] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <Youtube size={64} color="#fde047" fill="#fde047" className="drop-shadow-lg" />
        </div>
        {/* Slinky rings animation */}
        {rings.map((_, i) => (
          <div className="slinky__ring" key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default SlinkySection;

