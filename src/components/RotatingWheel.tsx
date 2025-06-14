
import React, { useRef, useEffect } from "react";
import DecorativeWheel from "./DecorativeWheel";

type RotatingWheelProps = React.ComponentProps<typeof DecorativeWheel>;

// Rotates the DecorativeWheel according to scroll position
const RotatingWheel: React.FC<RotatingWheelProps> = ({ className, ...props }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const scrolled = window.pageYOffset;
        wrapperRef.current.style.transform = `rotate(${scrolled * 0.2}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`pointer-events-none absolute ${className ?? ""}`}
      aria-hidden="true"
      style={{ transition: "transform 0.2s linear" }}
    >
      <DecorativeWheel {...props} className="" />
    </div>
  );
};

export default RotatingWheel;
