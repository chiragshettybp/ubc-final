
import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top purple banner */}
      <div className="w-full bg-purple-dark py-2 px-3 md:px-6 relative overflow-hidden">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <p className="text-white text-xs md:text-sm font-bold text-center flex-1 md:flex-none">
            🏆 2024 BEST RATED HAIR REMOVAL
          </p>
          
          {/* Day counters */}
          <div className="flex items-center justify-center md:justify-end space-x-2 flex-1">
            <div className="w-[26px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-dark-purple text-[11px] font-black leading-none">1</p>
              <p className="text-dark-purple text-[6px] font-bold leading-none">DAY</p>
            </div>
            
            <div className="w-[26px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-dark-purple text-[11px] font-black leading-none">3</p>
              <p className="text-dark-purple text-[6px] font-bold leading-none">HRS</p>
            </div>
            
            <div className="w-[26px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-dark-purple text-[11px] font-black leading-none">2</p>
              <p className="text-dark-purple text-[6px] font-bold leading-none">MIN</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Light purple banner */}
      <div className="w-full bg-purple-light py-2 relative">
        <div className="container mx-auto">
          <p className="text-dark text-xs md:text-sm font-bold text-center">
            FREE US SHIPPING + 30 DAY GUARANTEE
          </p>
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="w-full bg-white py-3 relative border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Menu button */}
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="/img/bleame-logo.svg" 
              alt="Bleame Logo" 
              className="h-6 md:h-7 object-contain"
            />
          </Link>
          
          {/* Cart button */}
          <div className="relative">
            <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-dark text-white 
                            text-[10px] rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
