
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from './FAQItem';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What's included in the Hand Grips Strengthener Kit - 5 Pack®?",
    answer: "You get a complete hand training system: 1x Adjustable Hand Grip Strengthener (22-132 lbs), 1x Finger Exerciser (4 lbs per finger), 1x Finger Stretcher Resistance Band, 1x Hand Strengthener Grip Ring (50 lbs), 1x Stress Relief Grip Ball, 1x Stylish Carry Bag, plus User's Manual and FREE Online Video Tutorial."
  },
  {
    question: "Is this suitable for beginners and all fitness levels?",
    answer: "Absolutely! The adjustable resistance from 22-132 lbs makes it perfect for everyone - from beginners to advanced athletes. Whether you're recovering from injury, just starting out, or training at high performance levels, this kit grows with you."
  },
  {
    question: "Can I use this for stress relief and rehabilitation?",
    answer: "Yes! The kit includes a Stress Relief Grip Ball and multiple resistance levels specifically designed for stress relief, rehabilitation, and therapeutic use. Perfect for office breaks, anxiety relief, and recovery from hand injuries."
  },
  {
    question: "How portable is the Hand Grips Strengthener Kit?",
    answer: "Extremely portable! The lightweight design and included stylish carry bag make it perfect for travel. Take it to the gym, office, or anywhere you go. No excuses, just progress."
  },
  {
    question: "Who can benefit from this hand strengthener kit?",
    answer: "Everyone! Perfect for athletes (rock climbers, weightlifters, tennis/golf players, martial artists), musicians (guitarists, pianists, drummers), office workers, seniors improving hand mobility, and anyone recovering from hand injuries."
  },
  {
    question: "What's your guarantee policy?",
    answer: "We offer a 7-day risk-free guarantee. If you try the Hand Grips Strengthener Kit and don't feel stronger hands and improved dexterity, we'll refund you with no questions asked. Plus, you get 24/7 customer support from FitBeast."
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
