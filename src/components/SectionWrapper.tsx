
import React, { useEffect, useRef } from "react";

type SectionWrapperProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

/**
 * Triggers fade/slide-in animation when scrolled into view.
 */
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = "",
  children,
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.classList.add("opacity-0", "translate-y-10");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("animate-section-in");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.13 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all will-change-transform duration-700 ease-out ${className}`}
    >
      {children}
    </section>
  );
};
export default SectionWrapper;
