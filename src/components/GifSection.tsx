import React from 'react';
import { motion } from 'framer-motion';
const GifSection: React.FC = () => {
  return <section className="w-full bg-white py-8">
      <div className="max-w-md mx-auto">
        <motion.div className="text-center mb-6 px-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-xl font-bold text-dark mb-2">See How REMEMBERFRAME Works</h2>
        </motion.div>
        
        <div className="px-[37px]">
          <motion.div className="rounded-2xl overflow-hidden shadow-lg" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} whileHover={{
          scale: 1.02
        }}>
            <img src="https://i.postimg.cc/7LT0XHgf/9856374.gif" alt="Crystal Hair Eraser in action" className="w-full h-auto block rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default GifSection;