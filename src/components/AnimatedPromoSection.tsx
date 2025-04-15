
import React from 'react';

const AnimatedPromoSection = () => {
  return (
    <div className="w-full min-h-[600px] flex items-center justify-center bg-[#4e279a]">
      <style>{`
        :root {
          --acc-bounce: cubic-bezier(0.175, 0.885, 0.320, 1.275);
          --acc-sine: cubic-bezier(0.390, 0.575, 0.565, 1.000);
          --base-delay: 255ms;
          --variable-delay: 55ms;
        }

        .promo-wrapper {
          width: 500px;
          height: 600px;
          position: relative;
          transform: scale(.67);
          perspective: 500px;
          animation: float-wrapper 5s var(--acc-sine) infinite;
        }

        .layer {
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          height: 100%;
          transition: all var(--acc-sine) 255ms;
          cursor: pointer;
        }

        .popsicle {
          transform: scale(.99) translate3d(1%,1%,0);
        }

        .promo-wrapper:hover .popsicle {
          transform: none;
        }

        .popsicle:before {
          content: '';
          display: block;
          background-image: url('https://i.postimg.cc/m2vSyjVR/51748977-removebg.png');
          background-size: contain;
          background-repeat: no-repeat;
          position: absolute;
          width: 463px;
          height: 454px;
          left: 50%;
          transform: translateX(-50%);
          animation: fadeIn-popsicle-before .5s var(--acc-bounce) 1 forwards;
          animation-delay: var(--base-delay);
          opacity: 0;
        }

        .popsicle:after {
          content: '';  // Remove price text
        }

        .promo-button {
          display: none;  // Hide the button completely
        }

        @keyframes float-wrapper {
          0% { transform: scale(.67); }
          50% { transform: scale(.67,.68) translate3d(0, -8px, 0); }
          100% { transform: scale(.67); }
        }

        @keyframes fadeIn-popsicle-before {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(.89);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%);
          }
        }

        @media only screen and (max-height: 600px) {
          .promo-wrapper {
            transform: scale(.6);
          }
          
          @keyframes float-wrapper {
            0% { transform: scale(.6); }
            50% { transform: scale(.6,.61) translate3d(0, -8px, 0); }
            100% { transform: scale(.6); }
          }
        }
      `}</style>
      
      <div className="promo-wrapper">
        <div className="layer popsicle"></div>
      </div>
    </div>
  );
};

export default AnimatedPromoSection;
