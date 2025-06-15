
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AffiliateDisclosure = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Affiliate Disclosure</h1>
      <p className="text-gray-300 text-center">
        We may receive commissions from affiliate links. Your trust means everything; we only recommend products we believe in.
      </p>
    </div>
    <Footer />
  </div>
);

export default AffiliateDisclosure;
