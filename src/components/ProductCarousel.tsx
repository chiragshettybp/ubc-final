
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

// Image paths would normally be imported properly
const images = [
  '/img/bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-3.png',
  '/img/bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-2.png',
  '/img/button-bleame-bleame-crystal-hair-eraser-crystal-hair-eraser.png',
  '/img/button-bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-4.png',
  '/img/button-bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-2.png',
  '/img/button-bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-7.png',
  '/img/button-bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-8.png',
  '/img/button-bleame-bleame-crystal-hair-eraser-crystal-hair-eraser-5.png',
  '/img/image.png'
];

// Sample placeholder images for this demo
const placeholderImages = [
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+1',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+2',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+3',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+4',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+5',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+6',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+7',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+8',
  'https://placehold.co/329x329/f5f5f5/7069BC?text=Bleame+9'
];

const ProductCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      goToNextSlide();
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right, go to previous slide
      goToPrevSlide();
    }
    
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNextSlide = () => {
    setActiveSlide(prev => (prev === placeholderImages.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? placeholderImages.length - 1 : prev - 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      autoScrollIntervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused, activeSlide]);

  // Scroll the thumbnail into view when active slide changes
  useEffect(() => {
    if (thumbsRef.current) {
      const thumbElements = thumbsRef.current.querySelectorAll('.thumb-container');
      if (thumbElements[activeSlide]) {
        thumbElements[activeSlide].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSlide]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="w-full px-[10px]"> {/* Added left and right padding of 10px */}
      {/* Main product image carousel */}
      <div 
        className="relative w-full h-[329px] mb-4 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="w-full h-full overflow-hidden rounded-lg shadow-md"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {placeholderImages.map((image, index) => (
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
        
        {/* Navigation buttons - show on hover */}
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
        
        {/* Progress indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {placeholderImages.map((_, index) => (
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

      {/* Thumbnails carousel */}
      <div className="relative w-full h-24 mb-4">
        <ScrollArea className="w-full h-[94px]">
          <div 
            ref={thumbsRef}
            className="w-full pb-2 flex gap-3 px-4"
          >
            {placeholderImages.map((image, index) => (
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
