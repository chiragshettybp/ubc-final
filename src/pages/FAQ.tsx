import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "When will I receive my bundle?",
      answer: "Delivery depends on slot availability. Once available, you'll receive access by email."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely! This bundle is designed for people with no experience."
    },
    {
      question: "Can I get a refund?",
      answer: "No. This is a digital product, and we do not offer refunds."
    },
    {
      question: "Who can I contact for help?",
      answer: "Email us at alyssaray@coutk.com"
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
          >
            <ArrowLeft size={16} />
            Back
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center">FAQ</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A: {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
