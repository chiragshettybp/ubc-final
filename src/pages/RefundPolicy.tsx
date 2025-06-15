
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RefundPolicy = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 leading-6">
        <h2 className="font-bold text-base mb-2">Happiness Guarantee</h2>
        <p>We want you to thrive. If our course or resources aren’t what you expected, you may request a refund within 30 days of purchase—no hard feelings.</p>
        <h2 className="font-bold text-base mt-4 mb-2">Eligibility</h2>
        <ul className="list-disc pl-5 mb-2">
          <li>Refund requests must be made within 30 days of enrollment.</li>
          <li>If you’ve accessed/downloaded >70% of materials, eligibility is at our discretion.</li>
        </ul>
        <h2 className="font-bold text-base mt-4 mb-2">Process</h2>
        <p>Email <a className="underline" href="mailto:support@yourbrand.com">support@yourbrand.com</a> with your order number and reason. Our team will review and respond within 3 business days.</p>
        <p className="mt-4">For recurring plans, cancel anytime to avoid future billing. No refunds for previous cycles.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
