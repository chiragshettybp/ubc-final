
import React from 'react';
import { Star, Tag } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Amazing product that exceeded my expectations!",
    author: "Jane Doe",
    image: "https://i.postimg.cc/RZGMWyqh/Acrylic-Digital-Picture-Frame-Digital-Frame-02130-1744170669-1280-1280.jpg",
    tag: "Verified Customer"
  },
  {
    id: 2,
    text: "This frame makes my memories come alive. Highly recommend!",
    author: "John Smith",
    image: "https://i.postimg.cc/cLdx40xP/IMG-2490-scaled-600x600.jpg",
    tag: "Happy Customer"
  },
  {
    id: 3,
    text: "The perfect gift for my parents. They love it!",
    author: "Sarah Johnson",
    image: "https://i.postimg.cc/5t0fLgF3/Acrylic-Digital-Picture-Frame-Office-16062-1744170669-1280-1280.jpg",
    tag: "Verified Customer"
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <Star 
                    key={starIndex} 
                    color="#FF0B55" 
                    fill="#FF0B55" 
                    size={24} 
                    className="mr-1"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag size={14} className="mr-1" />
                    <p>{testimonial.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
