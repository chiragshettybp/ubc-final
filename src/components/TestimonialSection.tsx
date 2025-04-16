import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote as QuoteIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [{
  id: 1,
  name: "Sarah K.",
  location: "New York, USA", 
  rating: 5,
  text: "Best gift ever. My boyfriend couldn't stop smiling totally worth it",
  image: "/lovable-uploads/8e3bd07b-b2b2-4f33-a3f9-3c00b2ead9ba.png",
  verified: true
}, {
  id: 2,
  name: "Jessica M.",
  location: "California, USA",
  rating: 5,
  text: "I gifted this to my mom and she cried happy tears watching our old videos play. So special!",
  image: "/lovable-uploads/1c71e581-758e-440f-91ca-bc7b31e616b1.png",
  verified: true
}, {
  id: 3,
  name: "Michelle T.",
  location: "Texas, USA",
  rating: 4,
  text: "Honestly, everyone asks where I got this! Unique, emotional, and just perfect.",
  image: "/img/placeholder.svg",
  verified: true
}];

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  index: number;
}> = ({
  testimonial,
  index
}) => {
  return <motion.div className="bg-white rounded-lg p-5 shadow-md border border-gray-100 flex flex-col h-full" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.2
  }} whileHover={{
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
  }}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-dark text-sm">{testimonial.name}</h4>
          <p className="text-xs text-gray-500">{testimonial.location}</p>
        </div>
        {testimonial.verified && <div className="ml-auto bg-purple-lighter px-2 py-1 rounded-full flex items-center">
            <span className="text-[10px] font-bold text-purple">✓ Verified Buyer</span>
          </div>}
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-purple fill-purple' : 'text-gray-300'}`} />)}
      </div>
      
      <div className="relative flex-1">
        <QuoteIcon className="absolute top-0 left-0 w-6 h-6 text-purple-light opacity-50 -translate-x-2 -translate-y-1" />
        <p className="text-sm text-gray-700 pl-2 italic">
          {testimonial.text}
        </p>
      </div>
    </motion.div>;
};

const TestimonialSection: React.FC = () => {
  return <section className="w-full bg-purple-lighter/50 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6 px-6">
          <motion.h2 className="text-xl font-bold text-dark mb-2" initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>Look At How Others Are
Loving Their Bleame</motion.h2>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-gray-600 text-xs flex items-center justify-center gap-1">
            <Star size={14} className="text-yellow-400" />
            Rated 4.8/5 by 1,319+ Happy Customers
          </motion.p>
        </div>
        
        <div className="px-4 space-y-4">
          {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />)}
        </div>
        
        <motion.div className="flex justify-center mt-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.8
      }}>
          <button className="text-purple font-semibold text-sm flex items-center px-4 py-2 border border-purple rounded-full hover:bg-purple hover:text-white transition-colors">
            See all reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>;
};

export default TestimonialSection;
