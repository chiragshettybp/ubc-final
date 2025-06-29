
import React from 'react';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const LinkInBio = () => {
  const navigate = useNavigate();
  
  const countryLinks = [
    {
      country: "United States",
      flag: "🇺🇸",
      route: "/united-states",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    },
    {
      country: "Canada",
      flag: "🇨🇦", 
      route: "/canada",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      route: "/united-kingdom", 
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      route: "/australia",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    },
    {
      country: "Germany", 
      flag: "🇩🇪",
      route: "/germany",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    },
    {
      country: "France",
      flag: "🇫🇷",
      route: "/france", 
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    },
    {
      country: "Rest of World",
      flag: "🌍",
      route: "/usa",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-500"
    }
  ];

  const handleCountryClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Choose Your Region
          </h1>
          <p className="text-gray-600 text-sm">
            Select your country to get started with localized content
          </p>
        </div>

        {/* Country Links */}
        <div className="space-y-4 mb-8">
          {countryLinks.map((item, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                onClick={() => handleCountryClick(item.route)}
                className={`
                  w-full h-16 relative overflow-hidden group
                  bg-gradient-to-r ${item.gradient}
                  text-black font-semibold text-lg
                  hover:scale-105 hover:shadow-2xl
                  transition-all duration-300 ease-out
                  border-2 border-yellow-200 hover:border-yellow-400
                  rounded-xl
                  p-0
                  shadow-lg
                `}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                <div className="flex items-center justify-between w-full px-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl drop-shadow-lg filter brightness-110">{item.flag}</span>
                    <span className="font-bold drop-shadow-sm text-shadow-sm">{item.country}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 drop-shadow-sm" />
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <Card className="bg-gray-50 border-gray-200 backdrop-blur-sm animate-fade-in shadow-sm">
        </Card>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default LinkInBio;
