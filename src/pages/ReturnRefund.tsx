
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, ArrowLeft, AlertCircle, Mail } from 'lucide-react';

const ReturnRefund = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <Package size={32} className="text-purple-600 mr-2" />
            <h1 className="text-2xl font-bold">Return & Refund Policy</h1>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              Our policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a refund or exchange.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <ArrowLeft size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Return Eligibility</h2>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                To be eligible for a return, your item must be:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Unused and in the same condition that you received it</li>
                <li>In the original packaging</li>
                <li>Returned within 30 days of delivery</li>
              </ul>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <AlertCircle size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Non-Returnable Items</h2>
              </div>
              <p className="text-sm text-gray-600">
                Some items cannot be returned, including:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>Products that have been used or show signs of use</li>
                <li>Items that are no longer in their original packaging</li>
                <li>Products marked as final sale or clearance items</li>
              </ul>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Return Process</h2>
              <ol className="text-sm text-gray-600 list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-medium">Contact Customer Service</p>
                  <p>Email hello@bleame.com with your order number and reason for return.</p>
                </li>
                <li>
                  <p className="font-medium">Receive Return Authorization</p>
                  <p>We'll send you return instructions and a return shipping label if applicable.</p>
                </li>
                <li>
                  <p className="font-medium">Ship Your Return</p>
                  <p>Package your item securely and ship it back using the provided label.</p>
                </li>
                <li>
                  <p className="font-medium">Refund Processing</p>
                  <p>Once your return is received and inspected, we'll process your refund within 5-7 business days.</p>
                </li>
              </ol>
            </div>
            
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">Refunds</h2>
              <p className="text-sm text-gray-600">
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
              </p>
            </div>
            
            <div className="pt-2">
              <div className="flex items-center mb-2">
                <Mail size={20} className="text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Contact Us</h2>
              </div>
              <p className="text-sm text-gray-600">
                If you have any questions about our return policy, please contact us at <a href="mailto:hello@bleame.com" className="text-purple-600 hover:underline">hello@bleame.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnRefund;
