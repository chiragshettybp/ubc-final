
import React from 'react';
import { motion } from 'framer-motion';

const CTAButton: React.FC<{
  onClick: () => void;
}> = ({
  onClick
}) => {
  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full h-16 font-bold tracking-wider text-slate-50 text-xl 
        bg-[#7E69AB]
        hover:bg-[#6E59A5]
        transition-all duration-300 ease-in-out
        transform active:scale-95
        shadow-lg hover:shadow-xl
        rounded-lg
        focus:outline-none focus:ring-2 focus:ring-purple-500/50"
    >
      CLAIM OFFER
    </motion.button>
  );
};

export default CTAButton;
