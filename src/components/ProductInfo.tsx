
import React from "react";

const subsectionTitle = (children: React.ReactNode) => (
  <h2 className="text-lg font-semibold mt-5 mb-2 text-white">{children}</h2>
);

const bullet = (text: React.ReactNode) => (
  <li className="mb-1 text-gray-200 text-sm">{text}</li>
);

const ProductInfo: React.FC = () => {
  return (
    <section className="w-full px-4 bg-black">
      <div className="mb-3">
        <h1 className="text-2xl font-bold text-white mt-2">
          🎓 YouTube Income Academy by Alyssa Ray
        </h1>
        <p className="text-gray-300 font-bold text-base mt-2">
          <span className="text-white text-xl mr-2">$197</span>
          <span className="text-gray-500 line-through text-lg mr-2">$499</span>
          <span className="bg-gray-700 font-bold px-3 py-1 rounded-full text-white text-sm ml-2">Limited Time Offer</span>
        </p>
      </div>

      {/* Course Features */}
      {subsectionTitle("✅ Course Features")}
      <ul className="mb-3 ml-4 list-disc">
        {bullet(
          <>
            <span className="font-medium text-white">Full Monetization System:</span> 1-on-1 instruction with Alyssa Ray on niche selection, branding, content strategy & monetization.
          </>
        )}
        {bullet(
          <>
            <span className="font-medium text-white">Live Proofs & Analytics:</span> Access real YouTube dashboard with CTR, watch time, RPM/CPM, revenue & subscriber growth.
          </>
        )}
        {bullet(
          <>
            <span className="font-medium text-white">Comprehensive Content Tool Kit:</span> Script generators, text-to-speech, stock resources, AI editors, thumbnail makers & scheduling tools.
          </>
        )}
        {bullet(
          <>
            <span className="font-medium text-white">Automation Blueprint:</span> Learn workflows for AI-scripted, auto-published videos.
          </>
        )}
      </ul>

      {/* Bonuses */}
      {subsectionTitle("🎁 Bonuses (Value: $397)")}
      <ul className="mb-3 ml-4 list-disc">
        {bullet("Channel improvement templates for niche, branding, SEO, and retention.")}
        {bullet("50 viral/trending video ideas to maximize reach.")}
        {bullet("Access to a private Telegram/Discord group for networking and feedback.")}
      </ul>

      {/* Course Learning Focus */}
      {subsectionTitle("🧪 Course Learning Focus")}
      <ul className="mb-3 ml-4 list-disc">
        {bullet("Justify and select your profitable niche.")}
        {bullet("Set up and brand your YouTube channel professionally.")}
        {bullet("Publish 5 AI-generated, SEO-optimized videos.")}
        {bullet("Document revenue strategy with AdSense and other streams.")}
        {bullet("Analyze post-publishing analytics.")}
        {bullet("Use workflow checklists for automation & launch announcements.")}
      </ul>

      {/* Learning Outcomes */}
      {subsectionTitle("🎯 Learning Outcomes")}
      <ul className="mb-3 ml-4 list-disc">
        {bullet("Understand YouTube monetization systems.")}
        {bullet("Select high-potential niches with data.")}
        {bullet("Build and brand a professional channel.")}
        {bullet("Create content efficiently using AI tools.")}
        {bullet("Automate video scheduling and posting.")}
        {bullet("Boost channel growth with SEO.")}
        {bullet("Interpret analytics for better decisions.")}
        {bullet("Diversify your income streams.")}
      </ul>

      {/* Tools & Resources */}
      {subsectionTitle("📈 Tools & Resources")}
      <ul className="mb-3 ml-4 list-disc">
        {bullet("AI script & video editors.")}
        {bullet("Stock footage/music & branding templates.")}
        {bullet("YouTube SEO optimization resources.")}
        {bullet("Step-by-step automation guides.")}
      </ul>

      {/* Community Support */}
      {subsectionTitle("👥 Community Support")}
      <ul className="mb-3 ml-4 list-disc">
        {bullet("Direct access to Alyssa Ray & peer group for support.")}
        {bullet("Ongoing updates and live training sessions.")}
      </ul>

      {/* Ideal For */}
      {subsectionTitle("🚀 Ideal For")}
      <ul className="mb-6 ml-4 list-disc">
        {bullet("Beginners eager to monetize YouTube quickly.")}
        {bullet("Content creators seeking scalable workflows.")}
        {bullet("Entrepreneurs using YouTube for leads or sales.")}
        {bullet("Anyone looking for passive/automated YouTube income.")}
      </ul>
    </section>
  );
};

export default ProductInfo;
