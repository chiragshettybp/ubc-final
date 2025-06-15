
import React from "react";
import { DollarSign, Users, FileText, BarChart2, Gift, Layers } from "lucide-react";

const ProductInfo: React.FC = () => {
  return (
    <div className="w-full px-4 bg-black">
      {/* Course Overview */}
      <h1 className="text-2xl font-bold text-white mt-2 mb-2">
        YouTube Income Academy by Alyssa Ray
      </h1>
      <p className="text-gray-400 font-bold mb-2 flex items-center">
        <DollarSign size={18} className="mr-2" /> $197&nbsp;
        <span className="text-xs text-gray-500 line-through ml-2">$499</span>
      </p>

      {/* Course Features */}
      <div className="mb-5">
        <h2 className="text-white font-semibold text-base mb-2">Course Features</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            <FileText size={16} className="inline mb-[2px] mr-2" />
            1-on-1 monetization system: niche, branding, strategy.
          </li>
          <li>
            <BarChart2 size={16} className="inline mb-[2px] mr-2" />
            See real-time YouTube analytics for proof.
          </li>
          <li>
            <Layers size={16} className="inline mb-[2px] mr-2" />
            Get Alyssa's AI scripts, TTS, editing & posting tools.
          </li>
          <li>
            <BarChart2 size={16} className="inline mb-[2px] mr-2" />
            Full automation: generate topics, auto-produce & schedule.
          </li>
        </ul>
      </div>

      {/* Bonuses */}
      <div className="mb-5">
        <h2 className="text-white font-semibold text-base mb-2">Bonuses ($397 Value)</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            <Gift size={16} className="inline mb-[2px] mr-2" />
            Channel review templates for branding & SEO.
          </li>
          <li>
            <Gift size={16} className="inline mb-[2px] mr-2" />
            50 viral video ideas to boost engagement.
          </li>
          <li>
            <Users size={16} className="inline mb-[2px] mr-2" />
            Access private group for support and feedback.
          </li>
        </ul>
      </div>

      {/* Learning Focus */}
      <div className="mb-5">
        <h2 className="text-white font-semibold text-base mb-2">Course Focus</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            Launch & monetize an automated YouTube channel.
          </li>
          <li>
            Includes niche report, optimized setup, 5 AI videos, monetization and analytics docs.
          </li>
        </ul>
      </div>

      {/* Learning Outcomes */}
      <div className="mb-5">
        <h2 className="text-white font-semibold text-base mb-2">Key Outcomes</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>Understand YouTube monetization and niche choice.</li>
          <li>Set up, brand, and automate your channel with AI.</li>
          <li>Master SEO, analyze data, and maximize income.</li>
        </ul>
      </div>

      {/* Tools & Resources */}
      <div className="mb-5">
        <h2 className="text-white font-semibold text-base mb-2">Tools & Resources</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>AI scripting & editing tools, video & branding templates.</li>
          <li>YouTube SEO and automation guides included.</li>
        </ul>
      </div>

      {/* Community Support */}
      <div className="mb-5">
        <h2 className="text-white font-semibold text-base mb-2">Community Support</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>Get direct feedback from Alyssa Ray & others.</li>
          <li>Includes live training and ongoing updates.</li>
        </ul>
      </div>

      {/* Ideal For */}
      <div>
        <h2 className="text-white font-semibold text-base mb-2">Who Should Join?</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>Beginners, creators, and entrepreneurs wanting YouTube income.</li>
          <li>Anyone looking to automate content & earn passively.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
