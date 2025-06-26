
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DogGridSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated image links
  const images = [
    "https://i.postimg.cc/T3BQ82RN/68403b322e9b1-9.png",
    "https://i.postimg.cc/L5vvGzXj/68403b3f6b1e5-10.png",
    "https://i.postimg.cc/zGypPH1R/68403b4ac8ddb-11.png",
    "https://i.postimg.cc/X7HQ8ctb/68403b574f69b-12.png",
    "https://i.postimg.cc/Kvv0Bsqf/68403b60a3d31-13.png",
    "https://i.postimg.cc/ZnDprjns/684173d646f2d-1.png",
    "https://i.postimg.cc/wv2hB9pp/684173e4b408f-2.png",
    "https://i.postimg.cc/bY6xcYg0/684173edaa125-3.png",
    "https://i.postimg.cc/brv1D4y2/6841740589e08-4.png"
  ];

  const captions = [
    "\"Maine pehle kabhi online business nahi kiya tha, lekin ye course ne step-by-step sikhaya. Ab meri monthly income ₹15,000 hai!\"",
    "\"AI tools ka naam sunkar dar lagta tha, but iske baad lagta hai jaise technology meri dost hai. Bahut easy hai!\"",
    "\"Sirf 2 mahine mein maine apna pehla digital product launch kiya. ₹8,500 ka sale hua pehle hi din!\"",
    "\"Ghar baithe kaam kar sakti hun, bachon ka bhi khyal rakh sakti hun. Perfect solution hai working mothers ke liye.\"",
    "\"Mumbai mein job chhodkar ye business start kiya. Ab meri income job se zyada hai aur time bhi free hai.\"",
    "\"LaunchPad Pro Pack ki wajah se meri zindagi badal gayi. Passive income ka matlab samjh gaya hun.\"",
    "\"Pehle sochta tha digital marketing sirf ameer logon ke liye hai. Ye course ne prove kar diya ki koi bhi kar sakta hai.\"",
    "\"Hindi mein explanation mila, isliye samajhna aasan tha. Support team bhi bahut helpful hai, 24 ghante available.\"",
    "\"Teen mahine pehle zero tha online business mein. Aaj mere paas 12 digital products hai aur ₹45,000 monthly earning!\""
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Get current set of 4 images to display
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({
        src: images[index],
        caption: captions[index],
        key: `${index}-${Math.floor(currentIndex / images.length)}`
      });
    }
    return visibleImages;
  };

  return (
    <section className="w-full bg-black py-8">
      <div className="max-w-md mx-auto px-4">
        <motion.div 
          className="text-center mb-6 px-6" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-white mb-2 text-2xl">Real Marketers. Real Results.</h2>
          <p className="text-sm text-gray-300">I'll show you step-by-step how to build a fully automated digital product business using AI, no upfront investment, no tech skills.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-96">
          <AnimatePresence mode="wait">
            {getVisibleImages().map((item, idx) => (
              <motion.div 
                key={item.key}
                className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.03 }}
              >
                <img className="w-full rounded-md h-32 object-cover" src={item.src} alt="Digital Product Marketing" />
                <p className="text-xs italic text-center mt-1 text-gray-300 line-clamp-3">{item.caption}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogGridSection;
