
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote as QuoteIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Texas, USA",
    rating: 5,
    text: "I was skeptical at first, but this pack completely changed my life! Within just 2 weeks of following the step-by-step guide, I had my first digital product live and selling. Made $2,500 in my first month and now I'm consistently hitting $5K+ monthly. The AI tools make everything so simple!",
    image: "https://i.postimg.cc/NFK4spNY/1969a872-5c58-494d-a4b4-30aaaa1a6abe.jpg",
    verified: true
  },
  {
    id: 2,
    name: "Jessica L.",
    location: "California, USA", 
    rating: 5,
    text: "As a busy mom of two, I needed something I could do in my spare time. This pack was perfect! The automation features mean I can earn while taking care of my kids. Last month I made $3,800 working just 10 hours a week. It's like having a money-making machine on autopilot!",
    image: "https://i.postimg.cc/Y2PRnB9S/465317c6-bfb5-4bb7-9bcd-ac39a8fed9b0.jpg",
    verified: true
  },
  {
    id: 3,
    name: "Amanda K.",
    location: "New York, USA",
    rating: 5,
    text: "I went from zero online business experience to making $4,200 in digital sales last month! The community support is incredible and the resell rights mean I keep 100% of every sale. This isn't just a course - it's a complete business system that actually works. Best $99 I've ever spent!",
    image: "https://i.postimg.cc/Y0TxhYVF/Let-s-take-pictures-we-can-t-post-selfie.jpg",
    verified: true
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex flex-col h-full" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.2 }} 
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-black text-sm">{testimonial.name}</h4>
          <p className="text-xs text-gray-600">{testimonial.location}</p>
        </div>
        {testimonial.verified && (
          <div className="ml-auto px-2 py-1 rounded-full flex items-center bg-yellow-300">
            <span className="font-bold text-sm text-zinc-950">✓ Verified Creator</span>
          </div>
        )}
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
      
      <div className="relative flex-1">
        <QuoteIcon className="absolute top-0 left-0 w-6 h-6 text-gray-400 opacity-50 -translate-x-2 -translate-y-1" />
        <p className="text-sm text-gray-700 pl-2 italic">
          {testimonial.text}
        </p>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6 px-6">
          <motion.h2 
            className="text-xl font-bold text-black mb-2" 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            See How Real People Are Building Passive Income with the LaunchPad Pro Pack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-gray-600 text-xs flex items-center justify-center gap-1"
          >
            <Star size={14} className="text-yellow-400" />
            Rated 4.8/5 by 1,300+ happy creators
          </motion.p>
        </div>
        
        <div className="px-4 space-y-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link 
            to="/reviews" 
            className="text-gray-600 font-semibold text-sm flex items-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 hover:text-black transition-colors"
          >
            See all reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
