
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const GifSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

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
              ref={videoRef}
              src="https://gv-vod-cdn.aliexpress-media.com/ae_sg_gmc/video_target/gv8f-ecac1dc1-a181d08c-8f95ba64-48af/trans/165dcfbe-752e-402f-85d3-83b8f8e2993b-hd.mp4?auth_key=1748927604-0-0-b7b8e3cfda095e8d0f4ddbc0258f9005"
              className="w-full h-auto block rounded-2xl"
              onEnded={handleVideoEnd}
              playsInline
              muted
              loop
            />
            
            {/* Custom Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-black" />
                ) : (
                  <Play className="w-8 h-8 text-black ml-1" />
                )}
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;
