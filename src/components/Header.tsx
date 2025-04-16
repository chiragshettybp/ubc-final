import React, { useState, useEffect, useRef } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNavigation } from '../components/SideNavigation';
const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [minutes, setMinutes] = useState(12);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          return 59;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
      });
    }, 1000); // Update every second

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []); // Empty dependency array to run only once on mount

  // Format seconds to always show two digits
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return <div className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top purple banner */}
      <div className="w-full py-2 px-3 md:px-6 relative overflow-hidden bg-[FF0B55] bg-[#ff1059]">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <p className="text-white text-xs md:text-sm font-bold text-center flex-1 md:flex-none">🏆 2025 BEST RATED PRODUCT</p>
          
          {/* Countdown timer */}
          <div className="flex items-center justify-center md:justify-end space-x-2 flex-1">
            <div className="w-[45px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-dark-purple text-[11px] font-black leading-none">{minutes}</p>
              <p className="text-dark-purple text-[6px] font-bold leading-none">MIN</p>
            </div>
            
            <div className="w-[45px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-dark-purple text-[11px] font-black leading-none">{formattedSeconds}</p>
              <p className="text-dark-purple text-[6px] font-bold leading-none">SEC</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Light purple banner */}
      <div className="w-full py-2 relative bg-[FF0B55] bg-[#ffc5d7]">
        <div className="container mx-auto">
          <p className="text-dark text-xs md:text-sm font-bold text-center">
            FREE US SHIPPING + 30 DAY GUARANTEE
          </p>
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="w-full bg-white py-3 relative border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Menu button with Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px]">
              <SideNavigation />
            </SheetContent>
          </Sheet>
          
          {/* Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img alt="Bleame Logo" className="h-6 md:h-7 object-contain" src="/lovable-uploads/07578505-e660-4e28-9787-f1bae39943ae.png" />
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
    </div>;
};
export default Header;