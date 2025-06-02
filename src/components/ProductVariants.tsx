
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VariantOption: React.FC<{
  active: boolean;
  variant: 'basic' | 'complete';
  onClick: () => void;
}> = ({ active, variant, onClick }) => {
  return (
    <motion.div 
      className={`relative w-full p-4 rounded-lg border transition-all duration-300 group cursor-pointer 
        ${active ? 'bg-gray-800 border-gray-600 shadow-lg scale-[1.02]' : 'bg-gray-900 border-gray-700 hover:border-gray-600 hover:shadow-md'}`}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center">
        <div className={`w-4 h-4 rounded-full mr-4 transition-all duration-300 
          ${active ? 'bg-gray-400 border-gray-400' : 'bg-gray-800 border-gray-600 group-hover:border-gray-500'}`} />
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-700 rounded-md mr-3 overflow-hidden">
              {variant === 'basic' ? (
                <img src="/lovable-uploads/ed47c60b-881f-4ffa-a74d-c3a69249261b.png" alt="Basic Package" className="w-full h-full object-contain" />
              ) : (
                <img src="/lovable-uploads/92a6c0e9-d4a3-420f-b37d-84dddc26ccfa.png" alt="Complete Package" className="w-full h-full object-contain" />
              )}
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {variant === 'basic' ? 'Basic Training Package' : 'Complete Warrior Package'}
              </p>
              {variant === 'complete' && (
                <p className="text-xs text-gray-400 font-semibold">
                  + All Bonuses Included
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-base text-gray-400">
              {variant === 'basic' ? '$17' : '$27'}
            </p>
            <motion.div 
              className={`py-1 px-2 rounded-full text-xs font-bold transition-all duration-300
                ${active ? 'bg-gray-600 text-white scale-100' : 'bg-gray-700 text-gray-300 scale-90 opacity-70'}`}
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ scale: active ? 1 : 0.9, opacity: active ? 1 : 0.7 }}
            >
              SAVE {variant === 'basic' ? '$30' : '$20'}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductVariants: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'basic' | 'complete'>('complete');

  return (
    <motion.div 
      className="w-full px-4 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VariantOption 
        active={selectedVariant === 'basic'} 
        variant="basic" 
        onClick={() => setSelectedVariant('basic')} 
      />
      <VariantOption 
        active={selectedVariant === 'complete'} 
        variant="complete" 
        onClick={() => setSelectedVariant('complete')} 
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-b-lg p-3 text-white flex items-center py-0 bg-gray-700"
      >
        <div className="w-12 h-10 rounded-md mr-3 overflow-hidden flex items-center justify-center">
          <img 
            alt="Instant Download" 
            className="w-6 h-6 object-contain filter invert brightness-0 saturate-100" 
            src="/lovable-uploads/310eeacf-d479-48c5-8f4b-8036a46c378f.png" 
          />
        </div>
        <div>
          <p className="text-xs">
            <span className="font-bold">+ INSTANT</span> DOWNLOAD included with this package
          </p>
        </div>
      </motion.div>

      {selectedVariant === 'complete' && (
        <motion.div 
          className="flex items-center justify-center w-full mt-4 text-gray-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
          <p className="text-xs">
            <span className="font-bold text-center">WARRIOR BONUSES INCLUDED</span> 
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductVariants;
