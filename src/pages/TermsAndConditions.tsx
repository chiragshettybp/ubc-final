
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsAndConditions = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 leading-6">
        <h2 className="font-bold text-base mb-2">1. Overview</h2>
        <p>By using our website, enrolling in our trainings, or accessing our resources, you agree to these terms. Please read them carefully.</p>
        <h2 className="font-bold text-base mt-4 mb-2">2. Eligibility</h2>
        <p>Our platform is intended for users 18 years or older. By accessing, you confirm your eligibility.</p>
        <h2 className="font-bold text-base mt-4 mb-2">3. Usage Rules</h2>
        <ul className="list-disc pl-5 mb-2">
          <li>You may not share paid content outside your account.</li>
          <li>All resources and community forums must be used respectfully.</li>
        </ul>
        <h2 className="font-bold text-base mt-4 mb-2">4. Payments & Subscriptions</h2>
        <p>All payments are handled securely. You agree to our pricing and refund policies detailed on the checkout page and our <a href="/refund-policy" className="underline">Refund Policy</a>.</p>
        <h2 className="font-bold text-base mt-4 mb-2">5. Intellectual Property</h2>
        <p>All website content, training materials, and branding are property of HANDGRIP® and may not be copied without permission.</p>
        <h2 className="font-bold text-base mt-4 mb-2">6. Contact</h2>
        <p>Questions about these terms? Email us at <a href="mailto:support@yourbrand.com" className="underline">support@yourbrand.com</a>.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsAndConditions;
