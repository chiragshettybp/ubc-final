import React from 'react';
import { motion } from 'framer-motion';

const DogGridSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
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
          <h2 className="font-bold text-white mb-2 text-2xl">Build Your Warrior Physique</h2>
          <p className="text-sm text-gray-300">Transform your body with proven Spartan training methods that build real functional strength.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/bNxYhshQ/2-FDt-W2-QFCP.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Raw strength captured in motion.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/RZGMWyqh/Acrylic-Digital-Picture-Frame-Digital-Frame-02130-1744170669-1280-1280.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">The perfect warrior mindset.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/jd0qmyGx/Sz-CMA-w-VS5n.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Unleash your inner spartan.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/x8HfqdbV/Tq7y1-Xfsw-K.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Train like a true warrior.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/bJS8FvgS/V3g-Wb-E57ys.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Embrace the challenge.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/dQTt55NN/pb-NB6knf-MT5.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Push your limits.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/cLdx40xP/IMG-2490-scaled-600x600.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Unleash your potential.</p>
          </motion.div>
          
          <motion.div 
            className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img className="w-full rounded-md" src="https://i.postimg.cc/5t0fLgF3/Acrylic-Digital-Picture-Frame-Office-16062-1744170669-1280-1280.jpg" alt="Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Become unbreakable.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DogGridSection;
