
import React from "react";
import "./SlinkySection.css";

const SlinkySection: React.FC = () => {
  const rings = Array.from({ length: 13 });

  return (
    <div className="flex w-full justify-center py-5 select-none">
      <div className="slinky">
        {rings.map((_, i) => (
          <div className="slinky__ring" key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default SlinkySection;
