
import React from 'react';
import { motion } from 'framer-motion';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "BONUS #1: Social Media Automation Tools",
      value: "$2,499",
      description: "Complete suite of tools to automate your social media posting and engagement",
      image: "/lovable-uploads/fcf20f05-c959-4db4-a6c6-811e60d12714.png"
    },
    {
      title: "BONUS #2: Email Marketing Templates",
      value: "$1,999", 
      description: "50+ proven email templates that convert browsers into buyers",
      image: "/lovable-uploads/881bd75f-e3ba-417c-b258-b503d55928d8.png"
    },
    {
      title: "BONUS #3: Live Masterclass Access",
      value: "$4,999",
      description: "Exclusive access to monthly live training sessions with industry experts",
      image: "/lovable-uploads/11f8dd12-73fc-4ed0-9ff6-2beda7d3e855.png"
    },
    {
      title: "BONUS #4: Private Community Access",
      value: "$2,999",
      description: "Join our exclusive community of successful digital entrepreneurs",
      image: "/lovable-uploads/3e1e2be9-bcd9-4939-9f05-0f78ed7f174f.png"
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('$', '').replace(',', ''));
  }, 0);

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">
            🎁 Exclusive Bonuses Worth ${totalValue.toLocaleString()}
          </h2>
          <p className="text-gray-600 text-sm">
            Get these incredible bonuses absolutely FREE when you order today
          </p>
        </motion.div>

        <div className="space-y-4">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-5 shadow-md border-l-4 border-yellow-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-black text-sm flex-1">{bonus.title}</h3>
                    <span className="bg-yellow-300 text-black px-2 py-1 rounded text-xs font-bold ml-2">
                      {bonus.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{bonus.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 text-center bg-yellow-100 rounded-lg p-4 border border-yellow-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-lg font-bold text-black mb-1">
            Total Bonus Value: ${totalValue.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">
            Yours FREE with LaunchPad Pro Pack
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
