
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Disclaimer = () => (
  <div className="max-w-md mx-auto bg-black min-h-screen text-white">
    <Header />
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 leading-6">
        <p>
          All testimonials and case studies reflect real student stories, but your results may vary. There are no guarantees—earnings and channel growth depend on your effort and niche.
        </p>
        <p className="mt-3">
          Nothing shared on this site or in our resources should be considered as financial, legal, or medical advice. We encourage you to consult professionals for those matters.
        </p>
        <p className="mt-3 font-bold text-yellow-300">
          Transparency is our policy. We show real wins and challenges—no hype, just proven strategies backed by data and experience.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Disclaimer;
