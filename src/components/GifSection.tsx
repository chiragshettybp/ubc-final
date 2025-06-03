
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeOff } from 'lucide-react';

const GifSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
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
              src="https://drive.google.com/uc?export=download&id=1Q4sqEoCVoOviSffAjL4EqhIxVtqwdmW5"
              className="w-full h-auto block rounded-2xl"
              onEnded={handleVideoEnd}
              playsInline
              muted={isMuted}
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

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeOff className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;
