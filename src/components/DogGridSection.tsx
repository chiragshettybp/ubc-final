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
  return <section className="w-full bg-black py-8">
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
          <h2 className="font-bold text-white mb-2 text-2xl">Build Your Warrior Physique</h2>
          <p className="text-sm text-gray-300">Transform your body with proven Spartan training methods that build real functional strength.</p>
        </motion.div>
        
        <motion.div className="grid grid-cols-2 gap-3 sm:gap-4" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/L69VqV4N/61-VVt6-Mw-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">strength captured in motion.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/vH0t56cM/6153-Sz-Ubqu-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">The perfect kit.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/G2nFbFSP/616-WQSk-SCk-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">lets build the forearms.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/T3Sj4MV4/617z-MEVBj3-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Train like a true warrior. i bought this kit a month ago, i noticed a vast deffernce in my forearm, i have recommended my friend he bought this too.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/mkRyyYYZ/61-JQA-GWFNL.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Embrace the challenge.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/2jFw8tY1/61rwg-J24ue-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Push your limits.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/NMRxXJrP/713ukr-X41-UL.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">I watched his video and instantly booked an order, amazing forearm kit should have.</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/KjNrq1fP/71a-ZOTnb-WLL.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">Become unbreakable.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default DogGridSection;