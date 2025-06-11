import React from 'react';
import { Star, Monitor, Battery, Usb, Image, FileText } from 'lucide-react';
const RatingStars = () => <div className="flex items-center">
    {[1, 2, 3, 4, 5].map(star => <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />)}
    <span className="ml-2 text-sm text-white">Excellent 4.8 | 1319 reviews</span>
  </div>;
const ProductInfo: React.FC = () => {
  const specifications = [{
    icon: <FileText size={20} className="text-gray-400" />,
    text: "Complete 5-Pack Hand Training Kit"
  }, {
    icon: <Monitor size={20} className="text-gray-400" />,
    text: "Adjustable Resistance 22-132 lbs"
  }, {
    icon: <Image size={20} className="text-gray-400" />,
    text: "FREE Online Video Tutorial Included"
  }, {
    icon: <Battery size={20} className="text-gray-400" />,
    text: "Durable Stainless Steel Springs"
  }, {
    icon: <Usb size={20} className="text-gray-400" />,
    text: "Portable with Stylish Carry Bag"
  }];
  return <div className="w-full px-4 bg-black">
      <div className="mb-3">
        <RatingStars />
        <h1 className="text-2xl font-bold text-white mt-2">HANDGRIP® - 5 Pack Strengthener Kit</h1>
      </div>
      
      <p className="text-sm font-bold text-white mb-3">💪 Build Strength. Improve Dexterity. Relieve Stress. Anytime, Anywhere.</p>
      
      <div className="flex items-center mb-6">
        <span className="text-gray-500 line-through text-lg mr-2">$49</span>
        <span className="font-bold mr-4 text-gray-400 text-xl">$19</span>
        <span className="bg-gray-700 font-bold px-4 py-1 rounded-full text-white">SAVE 43%</span>
      </div>

      <div className="border-t border-gray-700 my-4"></div>
      
      <p className="font-semibold text-white mb-5">The Ultimate Hand Workout Kit for Everyone
Perfect for athletes, musicians, office workers, and anyone looking to boost hand strength and reduce stress.</p>
      
      <div className="space-y-3 mb-6">
        {specifications.map((spec, index) => <div key={index} className="flex items-center space-x-3">
            {spec.icon}
            <p className="text-white">{spec.text}</p>
          </div>)}
      </div>
    </div>;
};
export default ProductInfo;