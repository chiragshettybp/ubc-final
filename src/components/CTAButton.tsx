
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CTAButton: React.FC<{
  onClick: () => void;
}> = ({
  onClick
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Start the animation cycle when component mounts
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);

      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 5000); // Animate every 5 seconds

    return () => clearInterval(animationInterval);
  }, []);

  const handleClick = () => {
    // Open PayPal link in a new page
    window.open('https://www.paypal.com/ncp/payment/AWQDP2YASKJAY', '_blank', 'noopener,noreferrer');
    
    // Also call the original onClick prop if needed
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
      className="w-full h-16 font-bold tracking-wider text-slate-50 text-xl transition-all duration-300 ease-in-out transform active:scale-95 shadow-lg hover:shadow-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 bg-[#4e279a] whitespace-nowrap overflow-hidden text-ellipsis"
    >
      CLAIM OFFER
    </motion.button>
  );
};

export default CTAButton;

