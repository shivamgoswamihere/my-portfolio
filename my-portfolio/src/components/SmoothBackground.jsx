import React, { useEffect, useState } from 'react';

const SmoothBackground = ({ colors = ['#FF6B6B', '#4ECDC4', '#556270'], duration = 4000, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % colors.length;
      setCurrentIndex(nextIndex);
      setBgColor(colors[nextIndex]);
    }, duration);
    return () => clearInterval(interval);
  }, [currentIndex, colors, duration]);

  return (
    <div
      className="w-full h-full transition-colors duration-[2000ms] ease-in-out flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

export default SmoothBackground;
