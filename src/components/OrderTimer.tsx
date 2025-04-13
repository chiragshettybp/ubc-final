
import React, { useState, useEffect } from 'react';

const OrderTimer: React.FC = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
      } else {
        clearInterval(timer);
      }
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [hours, minutes]);

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
