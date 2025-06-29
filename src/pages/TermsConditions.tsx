
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const TermsConditions = () => {
  const navigate = useNavigate();

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
        
        <h1 className="text-2xl font-bold mb-6 text-center">Terms & Conditions</h1>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            By purchasing our digital product, you agree to the following:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Delivery depends on the availability of slots.</li>
            <li>Access will be emailed once a slot is available.</li>
            <li>All content is for personal use only. Redistribution or resale without permission is strictly prohibited.</li>
            <li>No refunds due to the nature of digital products and to protect content rights.</li>
          </ul>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Contact:</strong> alyssaray@coutk.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
