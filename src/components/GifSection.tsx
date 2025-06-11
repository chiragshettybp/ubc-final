
import React from 'react';
import { motion } from 'framer-motion';

const GifSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-8">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center mb-6 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-white mb-2">See How Hand Grips Strengthener Kit Works</h2>
        </motion.div>
        
        <div className="px-[37px]">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <video
              src="https://imagekit.io/player/embed/00e3q7unr/165dcfbe-752e-402f-85d3-83b8f8e2993b-hd%20(online-video-cutter.com).mp4"
              className="w-full aspect-[9/16] rounded-2xl"
              autoPlay
              muted
              loop
              controls={false}
              title="Hand Grips Strengthener Kit Demo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;
