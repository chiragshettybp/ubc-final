
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

  // The list of image links (in order of provided)
  const images = [
    "https://i.postimg.cc/9Q7ngbf6/4-Common-Mistakes-to-Avoid-1-Poor-training.jpg",
    "https://i.postimg.cc/R0xbkt6N/67c650f3-85ac-47cb-a51d-050e867edc6e.jpg",
    "https://i.postimg.cc/1z0YszwM/861c681d-25c1-4ca6-ac07-218aae489e89.jpg",
    "https://i.postimg.cc/CLdtkSpL/95d80d33-52ba-47de-9068-b47622ca87f2.jpg",
    "https://i.postimg.cc/WbKy7Csm/cccf37aa-f805-462e-aeb9-44805a389c0e.jpg",
    "https://i.postimg.cc/7PKd5bcW/How-To-Get-More-Video-Views-on-You-Tube.jpg",
    "https://i.postimg.cc/50xK0MmJ/Looking-to-make-money-from-your-You-Tube-channel.jpg",
    "https://i.postimg.cc/SsDTYtZM/Build-Your-Digital-Empire-with-Tjdigitalagency.jpg"
  ];

  const captions = [
    "\"I've taken other digital product courses, but this is the first one I could actually follow.\"",
    "\"I didn't think I'd ever start selling online, but now I have 6 products live.\"",
    "\"The AI tools seemed hard at first, but they make everything so much easier.\"",
    "\"I got my first ₹1,000 in sales last night — I still can't believe it.\"",
    "\"This course felt like someone finally said, 'Here, let me help you.'\"",
    "\"I was nervous, but the system explains everything in such a calm, clear way.\"",
    "\"I'm making sales while I sleep… never thought that was possible.\"",
    "\"The coolest thing? It feels like a real family of marketers. Also made ₹5,143 last week from digital products alone 🫣\""
  ];

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
        
        <motion.div 
          className="grid grid-cols-2 gap-3 sm:gap-4" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          {images.map((src, idx) => (
            <motion.div 
              key={idx} 
              className="border-2 border-gray-600 rounded-lg p-1 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-800" 
              variants={itemVariants} 
              whileHover={{ scale: 1.03 }}
            >
              <img className="w-full rounded-md" src={src} alt="Digital Product Marketing" />
              <p className="text-xs italic text-center mt-1 text-gray-300">{captions[idx]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DogGridSection;
