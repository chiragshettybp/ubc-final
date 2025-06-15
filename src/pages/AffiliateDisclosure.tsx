
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AffiliateDisclosure = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Affiliate Disclosure</h1>
      <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 leading-6">
        <p>
          Some links on this site are affiliate links. This means we may earn a commission, at no extra cost to you, if you make a purchase through them. We only recommend products and services we believe in and use ourselves.
        </p>
        <p className="mt-3">
          Thank you for supporting our mission to help creators thrive!
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default AffiliateDisclosure;
