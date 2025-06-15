
import React from "react";

const PromoBanner: React.FC = () => (
  <div className="relative w-full px-4 mb-4 animate-pulse">
    <div className="rounded-2xl border border-yellow-400 overflow-hidden shadow-lg flex items-stretch justify-between"
      style={{
        background: "linear-gradient(90deg, #46060F 0%, #0F242A 50%, #034C1C 100%)"
      }}>
      {/* Left: "Everyday Price" */}
      <div className="flex items-center px-5 py-4 min-w-[175px] bg-gradient-to-r from-red-900/90 via-transparent to-transparent">
        <span className="text-white text-lg font-semibold whitespace-nowrap">
          Everyday Price:
        </span>
        <span className="relative ml-2 text-2xl font-bold text-red-400 select-none">
          <span className="relative z-10">$1387</span>
          <span className="absolute left-0 right-0 top-1/2 h-1 border-b-4 border-red-500 z-20 w-full"
            style={{ transform: "rotate(-14deg) translateY(-50%)" }} />
        </span>
      </div>

      {/* Arrow */}
      <div className="flex items-center px-2">
        <span className="text-white text-3xl font-bold">&rarr;</span>
      </div>

      {/* Right: "Today's Price" */}
      <div className="flex items-center px-5 py-4 bg-gradient-to-l from-green-900/80 via-transparent to-transparent relative min-w-[190px]">
        <span className="text-white text-lg font-semibold mr-1 whitespace-nowrap">
          Today's Price:
        </span>
        <span className="text-2xl font-extrabold text-green-400 whitespace-nowrap relative">
          $697
          {/* Green underline effect */}
          <svg
            className="absolute left-0 -bottom-2"
            width="74"
            height="12"
            viewBox="0 0 74 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 1 }}
          >
            <path d="M2 10C11.3142 6.66667 41.6 0.8 72 4" stroke="#6EE7B7" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
        {/* "May end soon" badge */}
        <span className="absolute -top-4 right-5 bg-yellow-300 text-black text-xs px-3 py-1 rounded-lg font-semibold shadow uppercase animate-fade-in">
          This offer may end soon!
        </span>
      </div>
    </div>
  </div>
);

export default PromoBanner;
