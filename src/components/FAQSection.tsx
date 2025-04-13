
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    question: "Does it help against strawberry skin & bumps?",
    answer: "Yes! Bleame helps prevent ingrown hairs and reduces the appearance of strawberry skin by exfoliating while removing hair, leaving skin smooth."
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

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div 
        className="py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-black">{faq.question}</h3>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {isOpen && (
        <div className="pb-4 text-gray-700 text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="w-full px-4 mt-6">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FAQSection;
