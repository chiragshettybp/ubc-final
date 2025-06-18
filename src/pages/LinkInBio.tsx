import React from 'react';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
const LinkInBio = () => {
  const navigate = useNavigate();
  const countryLinks = [{
    country: "United States",
    flag: "🇺🇸",
    route: "/united-states",
    gradient: "from-red-500 via-white to-blue-500"
  }, {
    country: "Canada",
    flag: "🇨🇦",
    route: "/canada",
    gradient: "from-red-500 via-white to-red-600"
  }, {
    country: "United Kingdom",
    flag: "🇬🇧",
    route: "/united-kingdom",
    gradient: "from-blue-600 via-white to-red-600"
  }, {
    country: "Australia",
    flag: "🇦🇺",
    route: "/australia",
    gradient: "from-blue-800 via-red-600 to-blue-800"
  }, {
    country: "Germany",
    flag: "🇩🇪",
    route: "/germany",
    gradient: "from-black via-red-600 to-yellow-400"
  }, {
    country: "France",
    flag: "🇫🇷",
    route: "/france",
    gradient: "from-blue-600 via-white to-red-600"
  }, {
    country: "Rest of World",
    flag: "🌍",
    route: "/usa",
    gradient: "from-green-500 via-blue-500 to-purple-600"
  }];
  const handleCountryClick = (route: string) => {
    navigate(route);
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-gray-50">
            Choose Your Region
          </h1>
          <p className="text-gray-300 text-sm">
            Select your country to get started with localized content
          </p>
        </div>

        {/* Country Links */}
        <div className="space-y-4 mb-8">
          {countryLinks.map((item, index) => <div key={index} className="animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <Button onClick={() => handleCountryClick(item.route)} className={`
                  w-full h-16 relative overflow-hidden group
                  bg-gradient-to-r ${item.gradient}
                  text-white font-semibold text-lg
                  hover:scale-105 hover:shadow-2xl
                  transition-all duration-300 ease-out
                  border-2 border-white/20 hover:border-white/40
                  rounded-xl
                `}>
                {/* Shimmer effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                <div className="flex items-center justify-between w-full px-4 relative z-10">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl drop-shadow-lg">{item.flag}</span>
                    <span className="font-bold drop-shadow-md">{item.country}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 drop-shadow-md" />
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Button>
            </div>)}
        </div>

        {/* Footer Section */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
          
        </Card>
      </div>
    </div>;
};
export default LinkInBio;