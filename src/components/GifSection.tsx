
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
    <section className="w-full bg-black py-8">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center mb-6 px-6" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-white mb-2">See How the LaunchPad Pro Pack Works</h2>
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
              src="https://dxeul8wagn2zr.cloudfront.net/g7gpuw%2Ffile%2F9dbfd1548319f3ec8d88f17b292e08cd_735a14d37fb1986eacd4a7f6883031ef.mp4?response-content-disposition=inline%3Bfilename%3D%229dbfd1548319f3ec8d88f17b292e08cd_735a14d37fb1986eacd4a7f6883031ef.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750035096&Signature=deUp0HBuB37YwAVDwbSGKOqD4rnieqEDyx7l96FzHRMuPxnPSqqUDdtKtbVg~-sEEGoUfIjd7THJMzQJZ-rxGic~jmu~rAomNO6IgKY1tk64u8wfp9TSYEL~L0IG2c~W0g~teXvWjsTCPj8y6Jg84SBWuv6wHBCfoED~7NViDXC7NctC7N2uZKZ6o79CeRkQfgRmw4sTRQYUZ-sMXQwLl0~N9SdB7UQPNKJEhJbdR-OPuToI5KTqZ0ls8qP~OMI~1UoS0QZuyMN30gDl1SrnARx3L3nK1JQHCGBdfBbmhVPNZiPZgfyIMWA27fNvxFhZnG7U4EdX0939fFV-iEX0Sg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
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
            <button 
              onClick={toggleMute} 
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200" 
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;
