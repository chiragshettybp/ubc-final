import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const GifSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        console.log('Video can play');
        video.play().catch(err => {
          console.error('Video play failed:', err);
        });
      };
      const handleLoadStart = () => {
        console.log('Video loading started');
      };
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadstart', handleLoadStart);
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => {
          console.error('Manual play failed:', err);
        });
      }
    }
  };

  return (
    <section className="w-full py-8 bg-zinc-50">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center mb-6 px-6" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-2 text-zinc-950">See How the LaunchPad Pro Pack Works</h2>
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
              src="https://d1yzeyilpfx2yv.cloudfront.net/v5zo8m%2Ffile%2F8a36fadba630534dd5f31f4543d7916a_f1e953e30c26468b295876a29cf9ccf1.mp4?response-content-disposition=inline%3Bfilename%3D%228a36fadba630534dd5f31f4543d7916a_f1e953e30c26468b295876a29cf9ccf1.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1751219199&Signature=Le5JcV3D4SJJoPBk86CGkBs7N9hIZf0yeXFKZcWUJDorYZnILTRrThQX7UIOudZEoLJGz5thxyGsuFD7B7NNYNDSaIX2zAVvh9Inmt~f-jjI9-HfTOBQQ2VYC9psGN6UG5pr7AR3Jj8FsGcza9qNxZF5UY5omZli1MsY50YPMySbqJ-QZafAiZz0lbh-EIT3J554iOAU4fbx832sySfI9-FMTPwVzjIgo-5rJRpFmuR2vGwYt0SkaCKGYn27qmOBhomt2uz3D0NNydMx4WJNVZRlmr2JQuhj2QcCPXQ8dMv8fSvG3cAc1X978P-GQgKcRNLY9OjYAlE19QVkPApziA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" 
              className="w-full aspect-[9/16] rounded-2xl cursor-pointer" 
              muted={isMuted} 
              loop 
              controls={false} 
              playsInline 
              preload="metadata" 
              onClick={handleVideoClick} 
              title="Hand Grips Strengthener Kit Demo" 
            />
            
            {/* Mute/Unmute Button */}
            <button onClick={toggleMute} className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200" aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;
