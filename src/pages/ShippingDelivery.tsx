
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Clock, Globe, HelpCircle } from 'lucide-react';

const ShippingDelivery = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <Truck size={32} className="text-purple-600 mr-2" />
            <h1 className="text-2xl font-bold">Shipping & Delivery</h1>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              Information about our shipping methods, delivery times, and costs.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Clock size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Processing Time</h2>
              </div>
              <p className="text-sm text-gray-600">
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Truck size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Shipping Methods & Times</h2>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium">Standard Shipping (3-5 business days)</p>
                  <p>Free on orders over $49</p>
                  <p>$4.95 for orders under $49</p>
                </div>
                <div>
                  <p className="font-medium">Express Shipping (1-2 business days)</p>
                  <p>$9.95 flat rate</p>
                </div>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <Globe size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">International Shipping</h2>
              </div>
              <p className="text-sm text-gray-600">
                We ship to most countries worldwide. International shipping costs and delivery times vary by country. Customs fees and import taxes may apply and are the responsibility of the customer.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <HelpCircle size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Shipping FAQs</h2>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium">Can I track my order?</p>
                  <p>Yes, you will receive a tracking number via email once your order ships.</p>
                </div>
                <div>
                  <p className="font-medium">What if my order hasn't arrived after the estimated delivery time?</p>
                  <p>Please contact our customer service team at hello@bleame.com for assistance.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <h2 className="text-lg font-semibold mb-2">Need More Information?</h2>
              <p className="text-sm text-gray-600">
                If you have any questions about shipping or delivery, please contact our customer support team at <a href="mailto:hello@bleame.com" className="text-purple-600 hover:underline">hello@bleame.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingDelivery;
