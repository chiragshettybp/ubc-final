
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
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
              <p className="text-gray-600 italic">"Amazing product that exceeded my expectations!"</p>
              <div className="mt-4">
                <h3 className="font-semibold">Jane Doe</h3>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
