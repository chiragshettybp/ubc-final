
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-300 text-center mb-4">
        Your privacy matters to us. Learn how we collect, use, and safeguard your personal information throughout your journey with us.
      </p>
      <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 leading-6">
        <h2 className="font-bold text-base mb-2">1. Introduction</h2>
        <p>
          We value your trust. This Privacy Policy explains how we manage and protect your data when you use our website, resources, trainings, and community platforms.
        </p>
        <h2 className="font-bold text-base mt-4 mb-2">2. What Information We Collect</h2>
        <ul className="list-disc pl-5 mb-2">
          <li>Account registration details (name, email, password)</li>
          <li>Payment information (securely processed by third-party providers)</li>
          <li>Usage data (pages visited, resources accessed)</li>
        </ul>
        <h2 className="font-bold text-base mt-4 mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc pl-5 mb-2">
          <li>To provide our learning platform, resources, and support</li>
          <li>To communicate with you (updates, offers, support)</li>
          <li>To analyze and improve our services</li>
        </ul>
        <h2 className="font-bold text-base mt-4 mb-2">4. Your Rights</h2>
        <p>You may update, correct, or request deletion of your personal data at any time by contacting support@yourbrand.com.</p>
        <h2 className="font-bold text-base mt-4 mb-2">5. Data Security</h2>
        <p>We use industry-standard security measures to protect your data. Your payment information is never stored on our servers.</p>
        <h2 className="font-bold text-base mt-4 mb-2">6. Changes to Policy</h2>
        <p>We may update this policy. Significant changes will be communicated via email or platform notice.</p>
        <p className="mt-4 italic">For all inquiries, contact <a className="underline" href="mailto:support@yourbrand.com">support@yourbrand.com</a>.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
