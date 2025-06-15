import React, { useState } from 'react';
import { motion } from 'framer-motion';
const VariantOption: React.FC<{
  active: boolean;
  variant: 'basic' | 'complete';
  onClick: () => void;
}> = ({
  active,
  variant,
  onClick
}) => {
  return;
};
const ProductVariants: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'basic' | 'complete'>('complete');
  return <motion.div className="w-full px-4 space-y-4" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <VariantOption active={selectedVariant === 'basic'} variant="basic" onClick={() => setSelectedVariant('basic')} />
      <VariantOption active={selectedVariant === 'complete'} variant="complete" onClick={() => setSelectedVariant('complete')} />

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.3
    }} className="w-full rounded-b-lg p-3 text-white flex items-center py-0 bg-gray-700">
        <div>
          <p className="text-xs">
            <span className="font-bold">+ INSTANT</span> SHIPPING included with this package
          </p>
        </div>
      </motion.div>

      {selectedVariant === 'complete' && <motion.div className="flex items-center justify-center w-full mt-4 text-gray-400" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      delay: 0.5
    }}>
          <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
          <p className="text-xs">
            <span className="font-bold text-center">SECURE &amp; FAST PAYMENT OPTION</span> 
          </p>
        </motion.div>}
    </motion.div>;
};
export default ProductVariants;