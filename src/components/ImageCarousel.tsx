
import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ className }) => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    "https://i.postimg.cc/wTJk0B2n/51748977.jpg",
    "https://i.postimg.cc/RC2R7t7c/51748961-ezgif-com-webp-to-jpg-converter.jpg",
    "https://i.postimg.cc/7P59J92H/51748960-ezgif-com-webp-to-jpg-converter.jpg",
    "https://i.postimg.cc/NLh5KBrH/51748959-ezgif-com-webp-to-jpg-converter.jpg",
    "https://i.postimg.cc/8cf7kjsG/51748958-ezgif-com-webp-to-jpg-converter.jpg"
  ];

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className={`carousel-container mx-auto ${className}`}>
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === current ? 'active' : ''}`}
        >
          <img 
            src={slide} 
            alt={`Product image ${index + 1}`} 
            loading="lazy"
          />
        </div>
      ))}
      
      <button 
        className="nav-btn prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      
      <button 
        className="nav-btn next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#8594;
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? 'bg-white w-5 h-2' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
