import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

// New product images uploaded by the user
const productImages = [
  '/lovable-uploads/599b3290-f59d-4de8-b03b-98d6e6246a53.png', // Nightstand with vase, photo frame, candle, and book
  '/lovable-uploads/bb0e9a86-4b10-42c5-9d97-14358e987938.png', // Desk with lamp, plants, and acrylic photo frame
  '/lovable-uploads/a75e18ce-2ee4-45fb-bce9-69b9f744e159.png', // Wedding photo in acrylic frame with gold candle holders
  '/lovable-uploads/9a8e4043-aa0a-4083-b45b-453b7cde8580.png', // Acrylic frame with dark screen on silky fabric
  '/lovable-uploads/4ac97874-bcab-4067-9ad6-5b6b688f0b3e.png'  // Couple photo in acrylic frame
];

const ProductCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const hasScrolledThumbs = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNextSlide();
    }

    if (touchEnd - touchStart > 50) {
      goToPrevSlide();
    }
    
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNextSlide = () => {
    setActiveSlide(prev => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      autoScrollIntervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 4000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused, activeSlide]);

  useEffect(() => {
    if (thumbsRef.current && !hasScrolledThumbs.current) {
      const thumbElements = thumbsRef.current.querySelectorAll('.thumb-container');
      if (thumbElements[activeSlide]) {
        const container = thumbsRef.current;
        const thumb = thumbElements[activeSlide] as HTMLElement;
        const scrollLeft = thumb.offsetLeft - (container.offsetWidth - thumb.offsetWidth) / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
        
        hasScrolledThumbs.current = true;
      }
    }
  }, [activeSlide]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="w-full px-[10px]">
      <div 
        className="relative w-full h-[329px] mb-4 group bg-gradient-to-b from-purple-50 to-white rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="w-full h-full overflow-hidden rounded-lg shadow-md"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {productImages.map((image, index) => (
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
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {productImages.map((_, index) => (
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
      </div>

      <div className="relative w-full h-24 mb-4">
        <ScrollArea className="w-full h-[94px]">
          <div 
            ref={thumbsRef}
            className="w-full pb-2 flex gap-3 px-4"
          >
            {productImages.map((image, index) => (
              <div 
                key={index}
                className={cn(
                  "thumb-container flex-shrink-0 cursor-pointer transition-all duration-300",
                  activeSlide === index 
                    ? "ring-2 ring-purple rounded-md scale-105" 
                    : "hover:ring-1 hover:ring-purple-light rounded-md"
                )}
                onClick={() => setActiveSlide(index)}
              >
                <div 
                  className="thumb-slide hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ProductCarousel;
