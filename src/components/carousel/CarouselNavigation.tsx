
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CarouselNavigationProps {
  goToPrevSlide: () => void;
  goToNextSlide: () => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ 
  goToPrevSlide, 
  goToNextSlide 
}) => {
  return (
    <>
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 bg-white rounded-full 
                  flex items-center justify-center border border-[#E0DFE1] opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 w-9 h-9 bg-white rounded-full 
                  flex items-center justify-center border border-[#E0DFE1] opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToNextSlide}
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </>
  );
};

export default CarouselNavigation;
