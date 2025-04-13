
import React from 'react';

const CTAButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button 
      className="product-cta-button w-full h-16 text-white font-bold tracking-wider"
      onClick={onClick}
    >
      CLAIM OFFER
    </button>
  );
};

export default CTAButton;
