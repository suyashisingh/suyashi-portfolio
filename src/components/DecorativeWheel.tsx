
import React from "react";

// Props:
// - className: extra classes for positioning/style
// - size: diameter in px, e.g. 180
// - opacity: 0-100 (default: 10)
const DecorativeWheel: React.FC<{ className?: string; size?: number; opacity?: number }> = ({
  className = "",
  size = 180,
  opacity = 10,
}) => {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        opacity: opacity / 100,
      }}
      aria-hidden="true"
    >
      <div className="w-full h-full border-8 border-primary rounded-full relative">
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-2 left-1/2 w-1 h-6 bg-primary transform -translate-x-1/2"></div>
        <div className="absolute bottom-2 left-1/2 w-1 h-6 bg-primary transform -translate-x-1/2"></div>
        <div className="absolute left-2 top-1/2 w-6 h-1 bg-primary transform -translate-y-1/2"></div>
        <div className="absolute right-2 top-1/2 w-6 h-1 bg-primary transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default DecorativeWheel;
