import React from "react";

const HeartBar = ({ currentXP, maxXP, icon }) => {
  const percentage = Math.min((currentXP / maxXP) * 100, 100);

  return (
    <div className="relative w-full max-w-md p-8 sm:max-w-md md:max-w-lg ">
      {/* Icon links */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-red-800 flex items-center justify-center z-10">
        <img src="/heartLife.svg" alt="heart Icon" className="w-8 h-8" />
      </div>

      {/* Progress Bar */}
      <div className="w-full h-5 rounded-full bg-gray-300 overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500 ease-in-out"
          style={{ width: `${health}%` }}
        />
      </div>

      {/* Text */}
      <div className="flex justify-between text-sm font-semibold text-white mt-1 px-1">
        <span>{currentXP.toLocaleString()}</span>
        <span>XP</span>
      </div>
    </div>
  );
};

export default HeartBar;
