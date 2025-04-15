
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Clock, Globe, HelpCircle, MapPin, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ShippingDelivery = () => {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Header />
      <div className="flex flex-col items-center pt-8 pb-12 px-5">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-lighter p-3 rounded-full mr-3">
              <Truck size={24} className="text-purple" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Shipping & Delivery</h1>
          </div>
          
          <Card className="bg-gradient-to-br from-purple-lighter to-white border-purple-light/20 mb-8 shadow-sm">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-gray-700">
                Information about our shipping methods, delivery times, and costs.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-5">
            <Card className="overflow-hidden border-purple-light/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-purple-lighter/40 pb-3">
                <div className="flex items-center">
                  <Clock size={18} className="text-purple mr-2" />
                  <CardTitle className="text-lg font-semibold">Processing Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">
                  All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-purple-light/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-purple-lighter/40 pb-3">
                <div className="flex items-center">
                  <Truck size={18} className="text-purple mr-2" />
                  <CardTitle className="text-lg font-semibold">Shipping Methods & Times</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">Standard Shipping</h3>
                    <Badge variant="secondary" className="bg-purple-lighter text-purple font-medium">3-5 days</Badge>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-gray-600">
                    <p>Free on orders over $49</p>
                    <p>$4.95 for orders under $49</p>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">Express Shipping</h3>
                    <Badge variant="secondary" className="bg-purple-lighter text-purple font-medium">1-2 days</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>$9.95 flat rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-purple-light/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-purple-lighter/40 pb-3">
                <div className="flex items-center">
                  <Globe size={18} className="text-purple mr-2" />
                  <CardTitle className="text-lg font-semibold">International Shipping</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-start gap-3 mb-2">
                  <Package className="text-purple-light/80 mt-1" size={16} />
                  <p className="text-sm text-gray-600">
                    We ship to most countries worldwide. International shipping costs and delivery times vary by country.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-light/80 mt-1" size={16} />
                  <p className="text-sm text-gray-600">
                    Customs fees and import taxes may apply and are the responsibility of the customer.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-purple-light/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-purple-lighter/40 pb-3">
                <div className="flex items-center">
                  <HelpCircle size={18} className="text-purple mr-2" />
                  <CardTitle className="text-lg font-semibold">Shipping FAQs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="p-3 bg-white rounded-lg border border-gray-100">
                  <p className="font-medium text-sm mb-1">Can I track my order?</p>
                  <p className="text-sm text-gray-600">Yes, you will receive a tracking number via email once your order ships.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-gray-100">
                  <p className="font-medium text-sm mb-1">What if my order hasn't arrived after the estimated delivery time?</p>
                  <p className="text-sm text-gray-600">Please contact our customer service team at hello@bleame.com for assistance.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-purple-light/20 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="bg-purple-lighter/40 pb-3">
                <CardTitle className="text-lg font-semibold">Need More Information?</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">
                  If you have any questions about shipping or delivery, please contact our customer support team at <a href="mailto:hello@bleame.com" className="text-purple hover:underline font-medium">hello@bleame.com</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingDelivery;
