import React from 'react';
import DotGrid from '../ui/DotGrid'; // Adjust path based on your folder structure

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      {/* The wrapper is fixed and pointer-events-none 
          so the dots stay behind your text and clicks pass through them.
      */}
      <DotGrid
        dotSize={2}
        gap={24}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={130}
        shockRadius={130}
        shockStrength={10}
        resistance={1450}
        returnDuration={2.4}
        className="w-full h-full"
      />
      {/* Optional: Add a subtle radial gradient overlay to make the dots fade at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
};

export default Background;