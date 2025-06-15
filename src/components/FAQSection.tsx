
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import FAQItem from './FAQItem';

const faqs = [{
  question: "Do I need experience to join?",
  answer: "No experience needed. The course walks you through from niche selection to automation."
}, {
  question: "What types of channels can I make?",
  answer: "Create faceless, automated channels for any niche, such as top 10s, reviews, or tutorials."
}, {
  question: "Is monetization beyond ads covered?",
  answer: "Yes. Learn AdSense, affiliate marketing, sponsorships, and selling digital products/services."
}, {
  question: "What tools do I need?",
  answer: "You'll access Alyssa's tech stack: AI script/voice tools, stock video/music, editors, and SEO tools. Most have free or low-cost options."
}, {
  question: "How soon will I see results?",
  answer: "Most students see growth in 30-90 days using the provided frameworks, depending on effort and niche."
}, {
  question: "Is support included after enrolling?",
  answer: "Yes. Get group access, ongoing feedback, live sessions, updates, and community challenges."
}];

const FAQSection: React.FC = () => {
  return (
    <div className="w-full px-4 mt-6 bg-black">
      <Separator className="mb-6 bg-gray-700" />
      <h2 className="text-white font-bold mb-4 text-2xl">❓FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => <FAQItem key={index} faq={faq} index={index} />)}
      </Accordion>
    </div>
  );
};
export default FAQSection;
