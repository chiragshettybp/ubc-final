
import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const LinkInBio = () => {
  const navigate = useNavigate();

  const countryLinks = [
    {
      country: "United States",
      flag: "🇺🇸",
      route: "/united-states"
    },
    {
      country: "Canada", 
      flag: "🇨🇦",
      route: "/canada"
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧", 
      route: "/united-kingdom"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      route: "/australia"
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      route: "/germany"
    },
    {
      country: "France",
      flag: "🇫🇷",
      route: "/france"
    },
    {
      country: "Rest of World",
      flag: "🌍",
      route: "/usa"
    }
  ];

  const handleCountryClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-md mx-auto">
        <div className="space-y-3">
          {countryLinks.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleCountryClick(item.route)}
              className="w-full h-16 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black font-semibold hover:brightness-105 transition-all duration-200 text-lg"
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">{item.flag}</span>
                <span>{item.country}</span>
                <MapPin className="w-5 h-5" />
              </div>
            </Button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Don't see your country? Contact support for assistance.
          </p>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mt-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkInBio;
