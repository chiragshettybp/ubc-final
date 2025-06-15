
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RefundPolicy = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <p className="text-gray-300 text-center">
        Review our policy on refunds and returns. Customer satisfaction is important to us - see if you're eligible for a refund.
      </p>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
