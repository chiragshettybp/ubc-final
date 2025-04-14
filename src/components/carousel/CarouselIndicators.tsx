
import React from 'react';
import { cn } from "@/lib/utils";

interface CarouselIndicatorsProps {
  totalSlides: number;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ 
  totalSlides, 
  activeSlide, 
  setActiveSlide 
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button 
          key={index}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            activeSlide === index 
              ? "bg-purple w-4" 
              : "bg-gray-300 hover:bg-gray-400"
          )}
          onClick={() => setActiveSlide(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
