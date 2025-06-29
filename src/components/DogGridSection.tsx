import React from 'react';
import { motion } from 'framer-motion';
const DogGridSection: React.FC = () => {
  // Updated image links from user
  const images = ["https://i.postimg.cc/XvnpcX6y/67320d399a492-3316-FA31-863-C-474-A-9467-EDE5-A4-BFC86-C-L0-001-9-7-20245-22-07-PM-jpg.jpg", "https://i.postimg.cc/9f1zxVcg/67320d45bd3c1-0-BD9-F7-ED-5369-4976-AFAA-64236021-E785-L0-001-9-7-20245-22-41-PM-jpg.jpg", "https://i.postimg.cc/P5sLJ26y/67320d5c0fcec-FF28886-B-204-C-4-EE4-88-BE-E62-B77481-A5-D-L0-001-9-7-20245-26-35-PM-jpg.jpg", "https://i.postimg.cc/sXNxrcQp/67320d663a702-47-F67-C0-B-2-F98-4-C89-B139-1-E61-E143-B3-EC-L0-001-9-7-20245-27-51-PM-jpg.jpg", "https://i.postimg.cc/fk4b3Rvy/67320d7273d0a-D4256-DFF-C503-4-D43-9-D28-347-D99-C8-E0-F0-L0-001-9-7-20245-28-36-PM-jpg.jpg", "https://i.postimg.cc/x1vXzMh2/67320d79c5927-F37-C8372-8-C72-474-D-A9-AF-F8-BB78-F7-BFAF-L0-001-9-7-20245-40-15-PM-jpg.jpg", "https://i.postimg.cc/HxxnRKxY/67320d8a2f077-811-BCB54-9-C6-B-4-A12-A491-AF1-A13-DFBE50-L0-001-9-7-20245-33-26-PM-jpg.jpg", "https://i.postimg.cc/bwhQWyjq/6732111fac39b-Screenshot2024-11-11150616-jpg.jpg", "https://i.postimg.cc/QM61FcKM/67321163c2e87-Screenshot2024-11-11151417-jpg.jpg", "https://i.postimg.cc/1zRDRvtT/6732117b7f7da-Screenshot2024-11-11150917-jpg.jpg", "https://i.postimg.cc/gjLJkZ81/673211adabfb3-Screenshot2024-11-11150701-jpg.jpg", "https://i.postimg.cc/qBNXCDLH/673211c989d30-Screenshot2024-11-11150441-jpg.jpg", "https://i.postimg.cc/h4N888yz/673211ed2c497-Screenshot2024-11-11150521-jpg.jpg", "https://i.postimg.cc/WbrG5DC9/673213bfd2f7b-Screenshot2024-11-11152330-jpg.jpg", "https://i.postimg.cc/MTvRVX1m/673215264e29f-Screenshot2024-11-11153049-jpg.jpg", "https://i.postimg.cc/rwNSLB8x/675026ecc59b3-Screenshot2024-12-04105405-jpg.jpg"];
  return <section className="w-full bg-white py-8">
      <div className="max-w-md mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-6 px-[4px]">
          <h2 className="font-bold text-black mb-2 text-2xl">See How Real People Are Building Passive Income with the UBC Pack</h2>
          <p className="text-yellow-600 text-sm">Rated 4.8/5 by 1,300+ happy creators</p>
        </motion.div>
        
        <div className="space-y-4">
          {images.map((image, index) => <motion.div key={index} className="w-full rounded-lg overflow-hidden shadow-md" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <img className="w-full h-auto object-cover" src={image} alt={`Review ${index + 1}`} loading="lazy" />
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default DogGridSection;