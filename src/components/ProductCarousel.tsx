
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      setActiveSlide(prev => (prev === placeholderImages.length - 1 ? 0 : prev + 1));
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right, go to previous slide
      setActiveSlide(prev => (prev === 0 ? placeholderImages.length - 1 : prev - 1));
    }
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev === placeholderImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-[329px] mb-4">
        <div 
          className="w-full h-full overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="product-slide"
            style={{ backgroundImage: `url(${placeholderImages[activeSlide]})` }}
          />
        </div>
        <button 
          className="absolute bottom-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center border border-[#E0DFE1]"
          onClick={handleNextSlide}
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="relative w-full h-24 mb-4">
        <div className="w-full h-[94px] overflow-x-auto scrollbar-hide flex gap-3 pb-2">
          {placeholderImages.map((image, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 cursor-pointer ${activeSlide === index ? 'ring-2 ring-purple rounded-md' : ''}`}
              onClick={() => setActiveSlide(index)}
            >
              <div 
                className="thumb-slide"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-12 gradient-right pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProductCarousel;
