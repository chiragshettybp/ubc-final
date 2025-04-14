import React from 'react';
const CTAButton: React.FC<{
  onClick: () => void;
}> = ({
  onClick
}) => {
  return <button onClick={onClick} className="product-cta-button w-full h-16 font-bold tracking-wider text-slate-50 text-xl bg-[#4e2f97]">
      CLAIM OFFER
    </button>;
};
export default CTAButton;