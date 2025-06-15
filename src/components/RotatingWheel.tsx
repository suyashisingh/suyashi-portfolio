
import React, { useRef, useEffect } from "react";

/**
 * RotatingWheel - A decorative rotating wheel div for backgrounds.
 * @param className (optional) additional classNames
 * @param style (optional) CSSProperties for absolute positioning, etc.
 * @param size (optional) wheel size in px (default 120)
 * @param opacity (optional) opacity (default 0.08)
 */
const RotatingWheel = ({
  className = "",
  style = {},
  size = 120,
  opacity = 0.08,
}: {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rotation = scrolled * 0.2;
        ref.current.style.transform = `rotate(${rotation}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        ...style,
      }}
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

export default RotatingWheel;
