
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const GifSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
              src="https://imagekit.io/player/embed/00e3q7unr/165dcfbe-752e-402f-85d3-83b8f8e2993b-hd%20(online-video-cutter.com).mp4"
              className="w-full aspect-[9/16] rounded-2xl"
              autoPlay
              muted={isMuted}
              loop
              controls={false}
              title="Hand Grips Strengthener Kit Demo"
            />
            
            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;
