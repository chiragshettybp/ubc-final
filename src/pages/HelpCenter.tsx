
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HelpCenter = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen">
    <Header />
    <div className="flex flex-col items-center pt-10 pb-8 px-4">
      <h1 className="text-3xl font-bold text-white mb-4">Help Center & Support</h1>
      <div className="bg-gray-800 rounded-lg w-full p-5">
        <h2 className="text-lg font-semibold mb-2 text-yellow-300">How can we help?</h2>
        <p className="text-gray-200 text-sm mb-4">Browse FAQs, start a support ticket, or get in touch directly.</p>
        <ul className="list-disc pl-5 mb-4 text-gray-300 text-sm">
          <li><a href="/faq" className="underline">Frequently Asked Questions</a></li>
          <li><a href="mailto:support@yourbrand.com" className="underline">Email Support</a>: support@yourbrand.com</li>
          <li><a href="/community-access" className="underline">Join the Student Community</a></li>
        </ul>
        <div className="text-xs text-gray-500 italic">Support available Mon-Fri, 9am-5pm GMT.</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HelpCenter;
