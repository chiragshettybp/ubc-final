
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsAndConditions = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-gray-300 text-center">
        Please read our terms and conditions carefully before using our service. By participating, you agree to abide by our terms.
      </p>
    </div>
    <Footer />
  </div>
);

export default TermsAndConditions;
