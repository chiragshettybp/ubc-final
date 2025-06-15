
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BonusResources = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Bonus Resources</h1>
      <p className="text-gray-300 text-center mb-6">
        Unlock exclusive cheat sheets, video templates, toolkits, and guides designed to help you master every aspect of your YouTube journey!
      </p>
      <div className="w-full flex flex-col gap-4">
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="font-semibold mb-1">Content Calendar Template</h2>
          <a className="text-yellow-400 underline text-sm" href="#" target="_blank">Download (.xlsx)</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="font-semibold mb-1">SEO Power Checklist</h2>
          <a className="text-yellow-400 underline text-sm" href="#" target="_blank">Download (.pdf)</a>
        </div>
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="font-semibold mb-1">Scriptwriting Formula Cheat Sheet</h2>
          <a className="text-yellow-400 underline text-sm" href="#" target="_blank">Download (.pdf)</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default BonusResources;
