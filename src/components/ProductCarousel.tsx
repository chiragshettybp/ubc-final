
import React, { useState, useEffect, useRef } from 'react';
import { productImages } from './carousel/ProductImages';
import CarouselNavigation from './carousel/CarouselNavigation';
import CarouselIndicators from './carousel/CarouselIndicators';
import CarouselThumbnails from './carousel/CarouselThumbnails';
import CarouselSlides from './carousel/CarouselSlides';

const ProductCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="w-full px-[10px]">
      <div 
        className="relative w-full h-[329px] mb-4 group bg-gradient-to-b from-purple-50 to-white rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselSlides 
          images={productImages}
          activeSlide={activeSlide}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
        />
        
        <CarouselNavigation 
          goToPrevSlide={goToPrevSlide}
          goToNextSlide={goToNextSlide}
        />
        
        <CarouselIndicators 
          totalSlides={productImages.length}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>

      <CarouselThumbnails 
        images={productImages}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </div>
  );
};

export default ProductCarousel;
