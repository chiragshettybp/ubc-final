
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductMediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Images for the carousel - using the new uploaded images
  const slides = [
    '/lovable-uploads/b1aa5ecf-3cfe-4294-8387-94c22c29221c.png',
    '/lovable-uploads/599e321e-8ba8-42a2-b858-36251b22b2d4.png',
    '/lovable-uploads/5736a961-c5e2-4e1d-b443-c4eefebe8cf9.png',
    '/lovable-uploads/1df08acc-d876-460d-9ab7-391e702e41b7.png',
    '/lovable-uploads/bb74d79c-a2ec-4491-adb1-3bbeb38ded8a.png',
    '/lovable-uploads/734daea1-0d6b-4f48-847b-a56edc2de3e5.png',
  ];
  
  // Using all images as thumbnails
  const thumbnails = [
    '/lovable-uploads/b1aa5ecf-3cfe-4294-8387-94c22c29221c.png',
    '/lovable-uploads/599e321e-8ba8-42a2-b858-36251b22b2d4.png',
    '/lovable-uploads/5736a961-c5e2-4e1d-b443-c4eefebe8cf9.png',
    '/lovable-uploads/1df08acc-d876-460d-9ab7-391e702e41b7.png',
    '/lovable-uploads/bb74d79c-a2ec-4491-adb1-3bbeb38ded8a.png',
    '/lovable-uploads/734daea1-0d6b-4f48-847b-a56edc2de3e5.png',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      ref={sectionRef}
      className={`w-full max-w-md transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="productmedia-productmedia flex flex-col items-center py-6 px-4">
        <div className="relative w-full h-[329px] mb-4">
          {/* Main carousel slides */}
          <div className="absolute w-full h-full overflow-hidden rounded-lg bg-[#f5f5f5]">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  index === activeSlide ? 'translate-x-0 opacity-100' : 
                  index < activeSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
                }`}
              >
                <img 
                  src={slide} 
                  alt={`Crystal photo frame view ${index + 1}`} 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>
        
        {/* Thumbnails navigation */}
        <div className="w-full">
          <div className="relative w-full overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 py-2 px-1">
              {thumbnails.map((thumb, index) => (
                <button 
                  key={index}
                  className={`flex-shrink-0 w-[82px] h-[82px] rounded-md overflow-hidden transition-all duration-300 ${
                    index === activeSlide ? 'ring-2 ring-purple-600' : 'hover:opacity-80'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`View crystal photo frame ${index + 1}`}
                >
                  <img 
                    src={thumb} 
                    alt={`Crystal photo frame thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMediaSection;
