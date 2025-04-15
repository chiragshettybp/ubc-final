
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from './FAQItem';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What screen size and resolution does the RememberFrame have?",
    answer: "The RememberFrame features a 5-inch HD LCD screen with a crisp 2K resolution, housed in an elegant 6.5-inch acrylic display. This provides vibrant and clear photo and video playback."
  },
  {
    question: "How much storage does the RememberFrame offer?",
    answer: "The device comes with 4GB of built-in storage, giving you plenty of space to store your favorite videos and pictures. This allows you to keep cherished memories right at your fingertips."
  },
  {
    question: "What type of battery does it have?",
    answer: "The RememberFrame is equipped with a 1000mAh rechargeable lithium battery, providing excellent wireless use. This means you can enjoy your memories without being constantly tethered to a power outlet."
  },
  {
    question: "How do I charge the RememberFrame?",
    answer: "Charging is simple and fast with the included Type-C USB cable and charger. Just plug it in, and you'll be ready to relive your memories in no time."
  },
  {
    question: "What file types can I display?",
    answer: "The RememberFrame supports JPEG images and most common video formats. This versatility ensures you can easily upload and display a wide variety of your favorite memories."
  },
  {
    question: "What makes the RememberFrame special?",
    answer: "With its 5-inch HD 2K screen, 6.5-inch modern acrylic frame, 4GB storage, long-lasting battery, and easy Type-C charging, the RememberFrame is designed to beautifully and conveniently showcase your most treasured moments."
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

