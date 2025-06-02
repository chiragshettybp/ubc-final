
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from './FAQItem';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What's included in the Train Like a Spartan program?",
    answer: "You get 60+ pages of pure training content including bodyweight workouts, minimalist equipment programs, speed & agility circuits, warrior meal framework, and exclusive bonuses like warm-up routines and motivation clips."
  },
  {
    question: "Do I need a gym or equipment for this program?",
    answer: "No gym required! The program is designed for bodyweight training and minimal equipment. For the minimalist equipment program, you only need dumbbells and a pull-up bar."
  },
  {
    question: "What format is the program delivered in?",
    answer: "The program comes as a mobile and desktop-friendly PDF with visual exercise demonstrations. You'll get instant download access after purchase with lifetime updates included."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most warriors see improvements in strength and conditioning within 2-3 weeks of consistent training. The program is designed to build functional strength, speed, and mental toughness progressively."
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Yes! The program includes 3-day, 4-day, and 6-day training splits, so you can choose your battle rhythm based on your fitness level and schedule."
  },
  {
    question: "What's your guarantee policy?",
    answer: "We offer a 7-day risk-free guarantee. If you try the program and don't feel stronger, tougher, and more focused, we'll refund you with no questions asked."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className="w-full px-4 mt-6 bg-black">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
