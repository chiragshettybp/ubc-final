
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ImageCarouselSection = () => {
  // Sample images array - you can modify these URLs as needed
  const carouselImages = [
    '/lovable-uploads/b1aa5ecf-3cfe-4294-8387-94c22c29221c.png',
    '/lovable-uploads/599e321e-8ba8-42a2-b858-36251b22b2d4.png',
    '/lovable-uploads/5736a961-c5e2-4e1d-b443-c4eefebe8cf9.png',
    '/lovable-uploads/1df08acc-d876-460d-9ab7-391e702e41b7.png',
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default ImageCarouselSection;
