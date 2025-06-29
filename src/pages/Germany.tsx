
import React from 'react';
import ProductInfo from '../components/ProductInfo';
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
import GifSection from '../components/GifSection';
import DogGridSection from '../components/DogGridSection';
import PromoBanner from '../components/PromoBanner';
import PromoBadge from '../components/PromoBadge';
import BottomOfferBar from '../components/BottomOfferBar';
import ProductShowcaseSection from '../components/ProductShowcaseSection';
import BonusSection from '../components/BonusSection';
import UrgencySection from '../components/UrgencySection';
import { toast } from "@/hooks/use-toast";

const Germany = () => {
  const paypalLink = "https://www.paypal.com/ncp/payment/DFR7FV287SS9W";
  
  const handlePurchase = () => {
    window.open(paypalLink, '_blank', 'noopener,noreferrer');
    toast({
      title: "Your LaunchPad Pro Pack order is being processed",
      description: "Thank you for choosing the LaunchPad Pro Pack - Start your online income journey today!"
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8">
        <ProductMediaSection />
        <ProductInfo />
        
        <PromoBanner currency="€" />
        <PromoBadge />
        
        <div className="w-full px-4 my-4">
          <CTAButton onClick={handlePurchase} paypalLink={paypalLink} />
        </div>
        <PaymentMethods />
        <OrderTimer />
        
        <ProductShowcaseSection />
        <BonusSection />
        <UrgencySection />
        <BenefitBadges />
        <FAQSection />
        <GifSection />
        <DogGridSection />
        <TestimonialSection />
        <ProductStatsSection paypalLink={paypalLink} />
      </div>
      <Footer />
      <BottomOfferBar paypalLink={paypalLink} />
    </div>
  );
};

export default Germany;
