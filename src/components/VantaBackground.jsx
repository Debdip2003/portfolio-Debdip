import React, { useEffect, useRef } from "react";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (
      window.VANTA &&
      window.VANTA.GLOBE &&
      vantaRef.current &&
      !effectRef.current
    ) {
      effectRef.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3b82f6,
        color2: 0xec4899,
        backgroundColor: 0x000000,
      });
    }
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={vantaRef}
        className="fixed inset-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
      />
      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
};

export default VantaBackground;
