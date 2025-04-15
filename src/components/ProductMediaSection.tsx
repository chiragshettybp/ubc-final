import React, { useState, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
const ProductMediaSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Images for the carousel with direct URLs
  const slides = ['/lovable-uploads/b1aa5ecf-3cfe-4294-8387-94c22c29221c.png', '/lovable-uploads/599e321e-8ba8-42a2-b858-36251b22b2d4.png', '/lovable-uploads/5736a961-c5e2-4e1d-b443-c4eefebe8cf9.png', '/lovable-uploads/1df08acc-d876-460d-9ab7-391e702e41b7.png', '/lovable-uploads/bb74d79c-a2ec-4491-adb1-3bbeb38ded8a.png', '/lovable-uploads/734daea1-0d6b-4f48-847b-a56edc2de3e5.png'];

  // Use useCallback to avoid recreating function on each render
  const handleThumbnailClick = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  // Set up effect to update active slide when the carousel changes
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setActiveSlide(api.selectedScrollSnap());
    };
    api.on('select', onSelect);
    // Call once to set initial state
    onSelect();
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);
  return;
};
export default ProductMediaSection;