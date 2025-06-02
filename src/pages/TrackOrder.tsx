
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Package } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId || !email) {
      toast({
        title: "Missing information",
        description: "Please enter both your order ID and email address.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, this would make an API call
    // For now, we'll just show a success message
    toast({
      title: "Order tracking initiated",
      description: "We're looking up your order details. You'll receive an update shortly."
    });
  };

  return (
    <div className="max-w-md mx-auto bg-black">
      <Header />
      <div className="flex flex-col items-center pt-4 pb-8 px-4">
        <div className="w-full max-w-md mx-auto py-8">
          <div className="flex items-center justify-center mb-6">
            <Truck size={32} className="text-gray-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Track Your Order</h1>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-sm text-center text-gray-300">
              Enter your order details below to check the current status of your purchase.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium mb-1 text-white">
                Order ID
              </label>
              <input 
                id="orderId"
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g., SPA12345"
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                Email Address
              </label>
              <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="The email you used to order"
                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition-colors"
            >
              Track Order
            </button>
          </form>
          
          <div className="mt-8 border-t border-gray-700 pt-6">
            <h2 className="text-lg font-medium mb-4 flex items-center text-white">
              <Package size={20} className="mr-2 text-gray-400" />
              Have Questions?
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              If you're having trouble tracking your order or have any other questions, 
              please contact our customer support team:
            </p>
            <ul className="text-sm space-y-2">
              <li>
                <a href="mailto:rememberframe@gmail.com" className="text-gray-400 hover:underline">
                  rememberframe@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;
