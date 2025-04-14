
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductMediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Images for the carousel
  const slides = [
    '/lovable-uploads/8e3bd07b-b2b2-4f33-a3f9-3c00b2ead9ba.png',
    '/lovable-uploads/310eeacf-d479-48c5-8f4b-8036a46c378f.png',
  ];
  
  // Thumbnails for the navigation
  const thumbnails = [
    '/lovable-uploads/8e3bd07b-b2b2-4f33-a3f9-3c00b2ead9ba.png',
    '/lovable-uploads/310eeacf-d479-48c5-8f4b-8036a46c378f.png',
    '/lovable-uploads/1c71e581-758e-440f-91ca-bc7b31e616b1.png',
    '/lovable-uploads/92a6c0e9-d4a3-420f-b37d-84dddc26ccfa.png',
    '/lovable-uploads/b8cacfc3-0509-427b-bd1b-72d4c8ee5285.png',
    '/lovable-uploads/ed47c60b-881f-4ffa-a74d-c3a69249261b.png',
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
    setActiveSlide(index % 2); // Only two main slides available
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + 2) % 2);
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
                  index === activeSlide ? 'translate-x-0' : index < activeSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <img 
                  src={slide} 
                  alt={`Product view ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
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
                    index % 2 === activeSlide ? 'ring-2 ring-purple-600' : 'hover:opacity-80'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={thumb} 
                    alt={`Thumbnail ${index + 1}`}
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
