"use client";

import { useState, useEffect } from 'react';
import { FC } from 'react';

// Types for countdown data
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="group relative overflow-hidden rounded-xl">
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]"></div>
          
          <div className="relative flex h-full flex-col items-center bg-gray-900 p-1">
            <div className="flex w-full flex-1 items-center justify-center rounded-t-lg bg-black/60 py-5 px-4">
              <span className="text-3xl sm:text-4xl font-bold tabular-nums">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <div className="w-full py-2 text-xs font-medium uppercase tracking-wider text-gray-400 sm:text-sm">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;