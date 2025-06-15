
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CTAButton: React.FC<{
  onClick: () => void;
}> = ({
  onClick
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(animationInterval);
  }, []);

  const handleClick = () => {
    window.open('https://www.paypal.com/ncp/payment/L8JHEPL6RSSPJ', '_blank', 'noopener,noreferrer');
    onClick();
  };

  return (
    <motion.button 
      onClick={handleClick} 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
      animate={isAnimating ? {
        y: [0, -8, 0, -4, 0],
        transition: {
          duration: 1,
          times: [0, 0.2, 0.4, 0.6, 1]
        }
      } : {}} 
      className="w-full h-16 font-bold tracking-wider text-white text-xl transition-all duration-300 ease-in-out transform active:scale-95 shadow-lg hover:shadow-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500/50 bg-gray-600 whitespace-nowrap overflow-hidden text-ellipsis relative"
    >
      {/* Shining effect overlay */}
      <span className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none z-20">
        <span className="relative text-white text-base font-semibold drop-shadow-md uppercase">
          Start Your Channel Today
        </span>
        <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
      </span>
      <span className="invisible">GET YOUR HAND GRIP KIT</span>
    </motion.button>
  );
};

export default CTAButton;
