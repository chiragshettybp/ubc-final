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
  return <section className="w-full bg-black py-8">
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
          <h2 className="text-xl font-bold text-white mb-2">See How YouTube Income Academy Works</h2>
        </motion.div>
        
        <div className="px-[37px]">
          <motion.div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 relative" initial={{
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
            <video ref={videoRef} src="https://ik.imagekit.io/00e3q7unr/165dcfbe-752e-402f-85d3-83b8f8e2993b-hd%20(online-video-cutter.com).mp4?updatedAt=1749624311718" className="w-full aspect-[9/16] rounded-2xl cursor-pointer" muted={isMuted} loop controls={false} playsInline preload="metadata" onClick={handleVideoClick} title="Hand Grips Strengthener Kit Demo" />
            
            {/* Mute/Unmute Button */}
            <button onClick={toggleMute} className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200" aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default GifSection;