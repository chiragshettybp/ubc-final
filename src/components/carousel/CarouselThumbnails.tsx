
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CarouselThumbnailsProps {
  images: string[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const CarouselThumbnails: React.FC<CarouselThumbnailsProps> = ({ 
  images, 
  activeSlide, 
  setActiveSlide 
}) => {
  const thumbsRef = useRef<HTMLDivElement>(null);
  const hasScrolledThumbs = useRef(false);

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

  return (
    <div className="relative w-full h-24 mb-4">
      <ScrollArea className="w-full h-[94px]">
        <div 
          ref={thumbsRef}
          className="w-full pb-2 flex gap-3 px-4"
        >
          {images.map((image, index) => (
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
  );
};

export default CarouselThumbnails;
