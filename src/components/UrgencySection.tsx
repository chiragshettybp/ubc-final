
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePurchase = () => {
    window.open('https://rzp.io/rzp/g3w6qRIO', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-12 px-4 bg-red-50 border-t-4 border-red-400">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              ⚠️ LIMITED TIME OFFER ENDING SOON!
            </h2>
            <p className="text-gray-700 text-sm">
              Don't miss out on this incredible deal. The price goes back to ₹997 when the timer hits zero!
            </p>
          </div>

          <div className="bg-black rounded-lg p-6 mb-6">
            <div className="text-white text-sm mb-2">TIME REMAINING:</div>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl font-bold rounded px-3 py-2 min-w-[50px]">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-xs mt-1">HOURS</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl font-bold rounded px-3 py-2 min-w-[50px]">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-xs mt-1">MINS</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl font-bold rounded px-3 py-2 min-w-[50px]">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-xs mt-1">SECS</div>
              </div>
            </div>
          </div>

          <button 
            onClick={handlePurchase}
            className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors text-lg relative overflow-hidden pulse-animation"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_2s_infinite]" />
            </span>
            <span className="relative z-10">CLAIM YOUR DISCOUNT NOW!</span>
          </button>

          <div className="mt-4 text-xs text-gray-600">
            Only 47 copies left at this price!
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
};

export default UrgencySection;
