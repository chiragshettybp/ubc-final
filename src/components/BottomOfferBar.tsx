
import React, { useEffect, useRef, useState } from "react";

const GOLD_GRADIENT = "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400";

const BottomOfferBar: React.FC = () => {
  // For demo purpose, countdown from 1 minute
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        if (minutes > 0) {
          setMinutes((m) => m - 1);
          return 59;
        }
        if (timerRef.current) clearInterval(timerRef.current);
        return 0;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes]);

  return (
    <div
      className="fixed left-1/2 bottom-0 z-50 w-[98vw] max-w-2xl -translate-x-1/2 pb-2 px-1"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="w-full min-h-[50px] sm:min-h-0 bg-[#111] border border-yellow-400 rounded-t-xl flex flex-col md:flex-row items-center justify-between gap-2 px-3 py-2 shadow-lg"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="text-white text-sm font-semibold mb-0 text-center md:text-left">
            Offer Will Expire In...
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-bold text-xl tabular-nums">
              {minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-white ml-1 text-xs font-medium">Min</span>
            <span className="text-yellow-400 font-bold text-xl tabular-nums ml-2">
              {seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-white ml-1 text-xs font-medium">Sec</span>
          </div>
        </div>
        <button
          className={`${GOLD_GRADIENT} transition-all duration-200 rounded-full text-black font-semibold text-base px-3 py-1.5 shadow-lg hover:brightness-105 focus:outline-none`}
          style={{
            boxShadow:
              "0 4px 18px 0 rgba(249,213,35,0.16), 0 1.5px 0 0 #fde047 inset",
          }}
          onClick={() =>
            window.open(
              "https://www.paypal.com/ncp/payment/L8JHEPL6RSSPJ",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default BottomOfferBar;
