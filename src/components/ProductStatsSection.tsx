
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductStatsSection: React.FC = () => {
  const statItems = [
    {
      percent: "95%",
      description: "said it was their favorite gift to give"
    },
    {
      percent: "94%",
      description: "Noticed a reduction in the appearance of ingrown hairs"
    },
    {
      percent: "90%",
      description: "Saw an improvement in the look of skin firmness"
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-dark-purple mb-8">
          The Future Is Hair-<br />Free! 💜
        </h2>
        
        {statItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center mb-5 pb-5 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-purple-lighter">
              <span className="text-xl font-bold text-purple">{item.percent}</span>
            </div>
            <div className="ml-6">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
        
        <p className="text-xs text-gray-500 mt-4 mb-5">
          * Results according to clinical/consumer studies. For<br />
          more information refer to each product page.
        </p>
        
        <Button className="w-44 h-12 bg-purple hover:bg-purple-dark text-white font-bold rounded-lg mb-8">
          Claim Offer
        </Button>
        
        <div className="flex items-center mt-4">
          <div className="flex mr-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-purple fill-purple" />
            ))}
          </div>
          <span className="text-sm font-normal mr-1">Excellent</span>
          <span className="text-sm font-bold mr-1">4.8</span>
          <span className="text-sm text-gray-700">| 1,319 trusted reviews</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductStatsSection;
