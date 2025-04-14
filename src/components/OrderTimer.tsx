
import React, { useState, useEffect, useRef } from 'react';

const OrderTimer: React.FC = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(12);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render to prevent initial scroll jump
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Set new timer
    timerRef.current = setInterval(() => {
      setMinutes(prev => {
        if (prev > 0) {
          return prev - 1;
        } else if (hours > 0) {
          setHours(prev => prev - 1);
          return 59;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
      });
    }, 60000); // Update every minute

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [hours]);

  // Get tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short' };
  const formattedDate = tomorrow.toLocaleDateString('en-US', options);

  return (
    <div className="w-full px-4 text-center my-6">
      <p className="font-semibold text-dark">Want It By {formattedDate}?</p>
      <div className="flex items-center justify-center">
        <span className="font-semibold text-dark mr-2">Order Within</span>
        <span className="font-bold text-purple">{hours} Hours {minutes} Minutes</span>
      </div>
    </div>
  );
};

export default OrderTimer;
