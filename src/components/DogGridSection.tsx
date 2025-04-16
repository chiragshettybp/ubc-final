import React from 'react';
import { motion } from 'framer-motion';
const DogGridSection: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section className="w-full bg-white py-8">
      <div className="max-w-md mx-auto px-4">
        <motion.div className="text-center mb-6 px-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="font-bold text-dark mb-2 text-2xl">Showcase Cherished Memories</h2>
          <p className="text-sm text-gray-600">Enjoy vivid 1080p and 2K displays to bring your favorite photos and videos to life in stunning detail.</p>
        </motion.div>
        
        
        
        <motion.div className="grid grid-cols-2 gap-3 sm:gap-4" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/bNxYhshQ/2-FDt-W2-QFCP.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">Pure joy captured in one frame.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/RZGMWyqh/Acrylic-Digital-Picture-Frame-Digital-Frame-02130-1744170669-1280-1280.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">The perfect "caught ya!" snack stare.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/jd0qmyGx/Sz-CMA-w-VS5n.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">This frame radiates pure love.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/x8HfqdbV/Tq7y1-Xfsw-K.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">The cutest "I'm the favorite" energy.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/bJS8FvgS/V3g-Wb-E57ys.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">A moment of playful anticipation.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/dQTt55NN/pb-NB6knf-MT5.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">Inviting you into a doggo adventure.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/cLdx40xP/IMG-2490-scaled-600x600.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">A sweet gesture frozen in time.</p>
          </motion.div>
          
          <motion.div className="border-2 border-dark rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/5t0fLgF3/Acrylic-Digital-Picture-Frame-Office-16062-1744170669-1280-1280.jpg" alt="Dog" />
            <p className="text-xs italic text-center mt-1">That classic "sharing is caring" stare.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default DogGridSection;