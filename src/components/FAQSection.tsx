
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from './FAQItem';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Where can I use Bleame?",
    answer: "Bleame can be used on all body parts including armpits, legs, face and bikini area. It's designed to be gentle on all skin types."
  },
  {
    question: "How does it work?",
    answer: "Bleame uses micro-crystal technology to gently remove hair by creating friction against the skin. Just rub in circular motions on dry skin for effective hair removal."
  },
  {
    question: "Does the friction cause darkness?",
    answer: "No, Bleame is designed to be gentle on skin and doesn't cause darkening. In fact, it helps exfoliate dead skin cells which can improve skin appearance."
  },
  {
    question: "Shipping & Delivery",
    answer: "We offer free shipping from the US. Standard delivery takes 2-5 business days. All orders are processed within 24 hours."
  },
  {
    question: "Return & Refund Policy",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied, you can return your Bleame for a full refund or replacement."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className="w-full px-4 mt-6">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
