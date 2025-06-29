
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CTAButton: React.FC<{
  onClick: () => void;
  paypalLink?: string;
}> = ({ onClick, paypalLink }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    if (paypalLink) {
      window.open(paypalLink, '_blank', 'noopener,noreferrer');
    } else {
      window.open('https://www.paypal.com/ncp/payment/RGV3ZRLJ8V448', '_blank', 'noopener,noreferrer');
    }
    onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.09, rotate: -6 }}
      whileTap={{ scale: 0.97, rotate: 0 }}
      className={
        `w-full h-16 font-bold tracking-wider text-black text-xl transition-all duration-300 ease-in-out transform active:scale-95 shadow-lg hover:shadow-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-[#fde047] whitespace-nowrap overflow-hidden text-ellipsis relative` +
        (isMounted ? ' animate-pop-up' : '')
      }
      style={{ backgroundColor: "#fde047" }}
    >
      {/* Shining effect overlay */}
      <span className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none z-20">
        <span className="relative text-black text-base font-semibold drop-shadow-md uppercase">
          GET ACCESS NOW
        </span>
        <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
      </span>
      <span className="invisible">GET ACCESS NOW</span>
    </motion.button>
  );
};

export default CTAButton;
