
import React from 'react';
import { Star, Monitor, Battery, Usb, Image, FileText } from 'lucide-react';
const RatingStars = () => <div className="flex items-center">
    {[1, 2, 3, 4, 5].map(star => <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />)}
    <span className="ml-2 text-sm text-dark">Excellent 4.8 | 1319 reviews</span>
  </div>;
const ProductInfo: React.FC = () => {
  const specifications = [{
    icon: <FileText size={20} className="text-purple" />,
    text: "60+ Pages of Pure Training Content"
  }, {
    icon: <Monitor size={20} className="text-purple" />,
    text: "Mobile & Desktop Friendly PDF"
  }, {
    icon: <Image size={20} className="text-purple" />,
    text: "Visual Exercise Demonstrations"
  }, {
    icon: <Battery size={20} className="text-purple" />,
    text: "Lifetime Access & Updates"
  }, {
    icon: <Usb size={20} className="text-purple" />,
    text: "Instant Digital Download"
  }];
  return <div className="w-full px-4">
      <div className="mb-3">
        <RatingStars />
        <h1 className="text-2xl font-bold text-dark mt-2">TRAIN LIKE A SPARTAN®</h1>
      </div>
      
      <p className="text-sm font-bold text-dark mb-3">💪 2025's Ultimate Warrior Body Blueprint for Real Men</p>
      
      <div className="flex items-center mb-6">
        <span className="text-gray-500 line-through text-lg mr-2">$47</span>
        <span className="font-bold mr-4 text-[#ff0a54] text-xl">$27</span>
        <span className="bg-purple-light font-bold px-4 py-1 rounded-full text-slate-950 text-[FF0B55]">SAVE 43%</span>
      </div>

      <div className="border-t border-gray-200 my-4"></div>
      
      <p className="font-semibold text-dark mb-5">Build a Warrior Body With Zero Excuses
No-BS bodyweight & minimalist training system for strength, speed, and unbreakable grit.</p>
      
      <div className="space-y-3 mb-6">
        {specifications.map((spec, index) => <div key={index} className="flex items-center space-x-3">
            {spec.icon}
            <p className="text-dark">{spec.text}</p>
          </div>)}
      </div>
    </div>;
};
export default ProductInfo;
