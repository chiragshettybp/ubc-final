
import React from 'react';
import { cn } from "@/lib/utils";

interface CarouselSlidesProps {
  images: string[];
  activeSlide: number;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
}

const CarouselSlides: React.FC<CarouselSlidesProps> = ({ 
  images, 
  activeSlide, 
  handleTouchStart, 
  handleTouchMove, 
  handleTouchEnd 
}) => {
  return (
    <div 
      className="w-full h-full overflow-hidden rounded-lg shadow-md"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div 
          key={index}
          className={cn(
            "product-slide absolute top-0 left-0 w-full h-full transition-opacity duration-500",
            activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default CarouselSlides;
