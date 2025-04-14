
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductMediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Images for the carousel
  const slides = [
    '/lovable-uploads/36d6952d-5240-4c75-ae4a-304950336435.png',
    '/lovable-uploads/542d869c-4402-4621-b9fd-10843906acf1.png',
    '/lovable-uploads/dd690b99-7177-4463-82a7-8c05197e69e4.png',
    '/lovable-uploads/0b89deb6-862d-41f2-88c6-ae89e03b3a43.png',
    '/lovable-uploads/cab82ea6-f1e9-411c-987a-e94e5d4edc5a.png',
  ];
  
  // Thumbnails for the navigation (using the same images)
  const thumbnails = [
    '/lovable-uploads/36d6952d-5240-4c75-ae4a-304950336435.png',
    '/lovable-uploads/542d869c-4402-4621-b9fd-10843906acf1.png',
    '/lovable-uploads/dd690b99-7177-4463-82a7-8c05197e69e4.png',
    '/lovable-uploads/0b89deb6-862d-41f2-88c6-ae89e03b3a43.png',
    '/lovable-uploads/cab82ea6-f1e9-411c-987a-e94e5d4edc5a.png',
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
                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                  index === activeSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <img 
                  src={slide} 
                  alt={`Crystal photo frame ${index + 1}`} 
                  className="w-full h-full object-contain rounded-lg"
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
                    index === activeSlide ? 'ring-2 ring-purple-600 scale-105' : 'hover:opacity-80'
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
