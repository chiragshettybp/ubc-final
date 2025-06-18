
import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LinkInBio = () => {
  const countryLinks = [
    {
      country: "United States",
      flag: "🇺🇸",
      paypalLink: "https://www.paypal.com/ncp/payment/RGV3ZRLJ8V448"
    },
    {
      country: "Canada", 
      flag: "🇨🇦",
      paypalLink: "https://www.paypal.com/ncp/payment/CANADA123"
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧", 
      paypalLink: "https://www.paypal.com/ncp/payment/UK456"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      paypalLink: "https://www.paypal.com/ncp/payment/AU789"
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      paypalLink: "https://www.paypal.com/ncp/payment/DE012"
    },
    {
      country: "France",
      flag: "🇫🇷",
      paypalLink: "https://www.paypal.com/ncp/payment/FR345"
    },
    {
      country: "Rest of World",
      flag: "🌍",
      paypalLink: "https://www.paypal.com/ncp/payment/WORLD999"
    }
  ];

  const handleCountryClick = (paypalLink: string, country: string) => {
    window.open(paypalLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-md mx-auto">
        <div className="space-y-3">
          {countryLinks.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleCountryClick(item.paypalLink, item.country)}
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
            onClick={() => window.location.href = '/'} 
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
