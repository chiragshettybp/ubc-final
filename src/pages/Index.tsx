
import React, { useEffect } from 'react';
import ProductInfo from '../components/ProductInfo';
import ProductVariants from '../components/ProductVariants';
import CTAButton from '../components/CTAButton';
import OrderTimer from '../components/OrderTimer';
import BenefitBadges from '../components/BenefitBadges';
import PaymentMethods from '../components/PaymentMethods';
import FAQSection from '../components/FAQSection';
import TestimonialSection from '../components/TestimonialSection';
import ProductStatsSection from '../components/ProductStatsSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductMediaSection from '../components/ProductMediaSection';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  const handlePurchase = () => {
    toast({
      title: "Your order is being processed",
      description: "Thank you for your purchase!",
    });
  };
  
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8">
        <ProductMediaSection />
        <ProductInfo />
        <ProductVariants />
        
        <div className="w-full px-4 my-4">
          <CTAButton onClick={handlePurchase} />
        </div>
        
        <PaymentMethods />
        <OrderTimer />
        <BenefitBadges />
        <FAQSection />
        <TestimonialSection />
        <ProductStatsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
