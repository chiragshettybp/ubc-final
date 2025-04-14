
import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import ProductInfo from '../components/ProductInfo';
import ProductVariants from '../components/ProductVariants';
import CTAButton from '../components/CTAButton';
import OrderTimer from '../components/OrderTimer';
import BenefitBadges from '../components/BenefitBadges';
import PaymentMethods from '../components/PaymentMethods';
import FAQSection from '../components/FAQSection';
import TestimonialSection from '../components/TestimonialSection';
import ToDoSection from '../components/ToDoSection';
import ProductStatsSection from '../components/ProductStatsSection';
import Header from '../components/Header';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const handlePurchase = () => {
    toast({
      title: "Your order is being processed",
      description: "Thank you for your purchase!",
    });
  };
  
  return (
    <div className="max-w-md mx-auto bg-white pb-8">
      <Header />
      <div className="flex flex-col items-center pt-4">
        <ProductCarousel />
        <ProductInfo />
        <ProductVariants />
        
        <div className="w-full px-4 my-4">
          <CTAButton onClick={handlePurchase} />
        </div>
        
        <PaymentMethods />
        <OrderTimer />
        <BenefitBadges />
        <TestimonialSection />
        <FAQSection />
        <ToDoSection />
        <ProductStatsSection />
      </div>
    </div>
  );
};

export default Index;
