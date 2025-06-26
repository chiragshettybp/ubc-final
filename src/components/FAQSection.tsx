
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "What do I get for ₹49?",
    answer: "✅ You get the complete Entrovibe Pack: a step-by-step guide to selling digital products, free website setup, AI customer strategies, community access, and over 40 Million+ Digital Products, 1000+ Courses, and 200k+ Viral Reels – all with Resell Rights!"
  },
  {
    question: "Can I really resell these products and keep all profits?",
    answer: "✅ Yes! You receive full Resell Rights. Sell the included products to your customers and keep 100% of every sale you make."
  },
  {
    question: "Do I need any experience or extra money to start?",
    answer: "❌ No! The Pack is for beginners, requiring no prior skills or additional investment beyond the one-time ₹49. Everything is included."
  },
  {
    question: "How do I get access after buying?",
    answer: "✅ Access is instant! You'll receive an email immediately after purchase with a link to download all products from our secure cloud storage."
  },
  {
    question: "Is this a one-time payment, or are there hidden fees?",
    answer: "✅ It's a one-time payment of ₹49 only. There are no recurring fees, subscriptions, or hidden charges."
  },
  {
    question: "Will the price stay at ₹49?",
    answer: "❌ No, this is a limited-time offer. The price will increase soon, so grab it now to secure this low rate."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className="w-full px-4 mt-6 bg-black">
      <Separator className="mb-6 bg-gray-700" />
      <h2 className="text-white font-bold mb-4 text-2xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
