import React from 'react';
import { Star } from 'lucide-react';
const RatingStars = () => <div className="flex items-center">
    {[1, 2, 3, 4, 5].map(star => <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />)}
    <span className="ml-2 text-sm text-dark">Excellent 4.8 | 1319 reviews</span>
  </div>;
const ProductInfo: React.FC = () => {
  return <div className="w-full px-4">
      <div className="mb-3">
        <RatingStars />
        <h1 className="text-2xl font-bold text-dark mt-2">Bleame Crystal Hair Eraser</h1>
      </div>
      
      <p className="text-sm font-bold text-dark mb-3">NEW: 🏆 2024 Rated Hair Removal Innovation</p>
      
      <div className="flex items-center mb-6">
        <span className="text-gray-500 line-through text-lg mr-2">$94</span>
        <span className="font-bold text-lg mr-4 text-[#4e2f97]">$49</span>
        <span className="bg-purple-light text-dark text-xs font-bold px-4 py-1 rounded-full">SAVE 48%</span>
      </div>

      <div className="border-t border-gray-200 my-4"></div>
      
      <p className="font-semibold text-dark mb-5">
        Shave armpits, legs, face and bikini area - without<br />
        painful waxing or razor cuts ever again!
      </p>
      
      <div className="space-y-3 mb-6">
        <p className="text-dark">👙 Perfect for the bikini area</p>
        <p className="text-dark">🍑 Enjoy silky smooth skin</p>
        <p className="text-dark">🌸 Eliminate ingrown hairs</p>
        <p className="text-dark">🍓 No more strawberry legs</p>
        <p className="text-dark">✨ Pain-free, safe &amp; gentle</p>
        <p className="text-dark">😌 Gently exfoliates dead skin cell</p>
      </div>
    </div>;
};
export default ProductInfo;