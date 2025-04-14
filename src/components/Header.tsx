
import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="w-full">
      {/* Top purple banner */}
      <div className="w-full h-[42.25px] bg-[#4A209A] relative">
        <p className="text-white text-center text-[13px] font-bold absolute left-[60.52px] top-[11.28px] leading-[19.7px]">
          🏆 2024 BEST RATED HAIR REMOVAL
        </p>
        
        {/* Day counters */}
        <div className="flex absolute left-[223.92px] top-[8px]">
          <div className="w-[26px] h-[26.25px] bg-white rounded-[2px] relative mr-[12.6px]">
            <p className="text-[#2A2552] text-[11.44px] font-black text-center absolute top-[3.75px] left-[6.38px] leading-[12px]">
              1
            </p>
            <p className="text-[#2A2552] text-[6.16px] font-bold text-center absolute top-[15.75px] left-[6.88px] leading-[6.75px]">
              DAY
            </p>
          </div>
          
          <div className="w-[26px] h-[26.25px] bg-white rounded-[2px] relative mr-[12.6px]">
            <p className="text-[#2A2552] text-[10.5px] font-black text-center absolute top-[3.75px] left-[6.37px] leading-[12px]">
              3
            </p>
            <p className="text-[#2A2552] text-[6.27px] font-bold text-center absolute top-[15.75px] left-[7.11px] leading-[6.75px]">
              HRS
            </p>
          </div>
          
          <div className="w-[26px] h-[26.25px] bg-white rounded-[2px] relative">
            <p className="text-[#2A2552] text-[11.63px] font-black text-center absolute top-[3.75px] left-[6.38px] leading-[12px]">
              2
            </p>
            <p className="text-[#2A2552] text-[6.27px] font-bold text-center absolute top-[15.75px] left-[6.8px] leading-[6.75px]">
              MIN
            </p>
          </div>
        </div>
      </div>
      
      {/* Light purple banner */}
      <div className="w-full h-[35.69px] bg-[#D6D2FF] relative">
        <p className="text-[#2E2A39] text-[14.25px] font-bold text-center absolute left-[85.06px] top-[7px] w-[220px] leading-[19.7px]">
          FREE US SHIPPING + 30 DAY GUARANTEE
        </p>
      </div>
      
      {/* Navigation bar */}
      <div className="w-full h-[67px] bg-white relative flex items-center justify-between px-6">
        {/* Menu button */}
        <button className="absolute left-[24px] top-[104.27px] transform -translate-y-[30px]">
          <Menu className="w-[18px] h-[14px]" />
        </button>
        
        {/* Logo */}
        <div className="absolute left-[145px] top-[97.94px] transform -translate-y-[30px]">
          <img 
            src="/img/placeholder.svg" 
            alt="Bleame Logo" 
            className="w-[100px] h-[26.66px] object-contain"
          />
        </div>
        
        {/* Cart button */}
        <div className="absolute right-[24px] top-[101.27px] transform -translate-y-[30px]">
          <div className="relative">
            <ShoppingBag className="w-[21px] h-[20px]" />
            <div className="absolute -top-2 -right-2 w-[21px] h-[21px] bg-[#2E2A39] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
