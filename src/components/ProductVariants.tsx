import React, { useState } from 'react';
import { motion } from 'framer-motion';
const VariantOption: React.FC<{
  active: boolean;
  variant: 'one' | 'two';
  onClick: () => void;
}> = ({
  active,
  variant,
  onClick
}) => {
  return <motion.div className={`relative w-full p-4 rounded-lg border transition-all duration-300 group cursor-pointer 
        ${active ? 'bg-purple-lighter border-purple shadow-lg scale-[1.02]' : 'bg-white border-gray-200 hover:border-purple/50 hover:shadow-md'}`} onClick={onClick} whileTap={{
    scale: 0.98
  }}>
      <div className="flex items-center">
        <div className={`w-4 h-4 rounded-full mr-4 transition-all duration-300 
          ${active ? 'bg-purple border-purple' : 'bg-white border-gray-300 group-hover:border-purple/50'}`} />
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-md mr-3 overflow-hidden">
              <img src={variant === 'one' ? '/img/pack1-png.png' : '/img/pack2-png.png'} alt={`${variant} pack`} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-dark text-sm">
                {variant === 'one' ? '1 Pack' : '2 Pack'}
              </p>
              {variant === 'two' && <p className="text-xs text-purple font-semibold">
                  FREE Shipping
                </p>}
            </div>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-purple text-base">
              {variant === 'one' ? '$29' : '$49'}
            </p>
            <motion.div className={`py-1 px-2 rounded-full text-xs font-bold transition-all duration-300
                ${active ? 'bg-purple text-white scale-100' : 'bg-purple-light text-dark scale-90 opacity-70'}`} initial={{
            scale: 0.9,
            opacity: 0.7
          }} animate={{
            scale: active ? 1 : 0.9,
            opacity: active ? 1 : 0.7
          }}>
              SAVE {variant === 'one' ? '$18' : '$45'}
            </motion.div>
          </div>
          
        </div>
      </div>
    </motion.div>;
};
const ProductVariants: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'one' | 'two'>('two');
  return <motion.div className="w-full px-4 space-y-4" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <VariantOption active={selectedVariant === 'one'} variant="one" onClick={() => setSelectedVariant('one')} />
      <VariantOption active={selectedVariant === 'two'} variant="two" onClick={() => setSelectedVariant('two')} />

      <motion.div className="w-full bg-purple rounded-b-lg p-3 text-white flex items-center" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.3
    }}>
        <div className="w-12 h-10 bg-gray-100 rounded-md mr-3 overflow-hidden">
          <img src="/img/body-scrub-4-50x-png.png" alt="Body Scrub" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm">
            <span className="font-bold">+ FREE</span> Body scrub for silky & shiny skin
          </p>
        </div>
      </motion.div>

      <motion.div className="flex items-center mt-4 ml-4 text-orange" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      delay: 0.5
    }}>
        <div className="w-3 h-3 rounded-full bg-orange mr-2"></div>
        <p className="text-xs">
          <span className="font-bold">FREE SHIPPING</span> 
          <span className="font-semibold"> included for the next</span>
        </p>
      </motion.div>
    </motion.div>;
};
export default ProductVariants;