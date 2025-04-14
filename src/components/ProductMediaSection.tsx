
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const ProductMediaSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Images for the carousel
  const slides = [
    '/lovable-uploads/b1aa5ecf-3cfe-4294-8387-94c22c29221c.png',
    '/lovable-uploads/599e321e-8ba8-42a2-b858-36251b22b2d4.png',
    '/lovable-uploads/5736a961-c5e2-4e1d-b443-c4eefebe8cf9.png',
    '/lovable-uploads/1df08acc-d876-460d-9ab7-391e702e41b7.png',
    '/lovable-uploads/bb74d79c-a2ec-4491-adb1-3bbeb38ded8a.png',
    '/lovable-uploads/734daea1-0d6b-4f48-847b-a56edc2de3e5.png',
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        {/* Main Carousel */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onSlideSelected={(api) => {
            setActiveSlide(api?.selectedScrollSnap() || 0);
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f5f5f5]">
                  <img
                    src={slide}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>

        {/* Thumbnails */}
        <div className="mt-4">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all duration-200",
                  activeSlide === index
                    ? "ring-2 ring-purple-600"
                    : "ring-1 ring-gray-200 hover:ring-purple-400"
                )}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={slide}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMediaSection;
