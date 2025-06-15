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
          <h2 className="font-bold text-white mb-2 text-2xl">Real creators. Real results.</h2>
          <p className="text-sm text-gray-300">I’ll show you step-by-step how I built a fully automated YouTube channel using AI, no camera, no editing skills.</p>
        </motion.div>
        
        <motion.div className="grid grid-cols-2 gap-3 sm:gap-4" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/L69VqV4N/61-VVt6-Mw-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“I’ve taken other YouTube courses, but this is the first one I could actually follow.”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/vH0t56cM/6153-Sz-Ubqu-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“I didn’t think I’d ever start a channel, but now I have 6 videos online.”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/G2nFbFSP/616-WQSk-SCk-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“The AI tools seemed hard at first, but they make everything so much easier.”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/T3Sj4MV4/617z-MEVBj3-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“I got 1,000 subscribers last night — I still can’t believe it.”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/mkRyyYYZ/61-JQA-GWFNL.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“This course felt like someone finally said, ‘Here, let me help you.’”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/2jFw8tY1/61rwg-J24ue-L.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“I was nervous, but Alyssa explains everything in such a calm, clear way.”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/NMRxXJrP/713ukr-X41-UL.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">“I’m posting videos while I sleep… never thought that was possible.”</p>
          </motion.div>
          
          <motion.div className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" variants={itemVariants} whileHover={{
          scale: 1.03
        }}>
            <img className="w-full rounded-md" src="https://i.postimg.cc/KjNrq1fP/71a-ZOTnb-WLL.jpg" alt="Hand Grip Training" />
            <p className="text-xs italic text-center mt-1 text-gray-300">&quot;The coolest thing? It feels like a real family of creators. Also made $143 last week from affiliate links alone 🫣&quot;</p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default DogGridSection;