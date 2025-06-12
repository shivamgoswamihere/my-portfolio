import React from 'react'
import { About } from '../sections/About'; // Import the About section
import './components-css/SpiralGalaxy.css'; // Import the CSS for the Spiral Galaxy animation

const SpiralGalaxy = ({username}) => {

    (function () {
  function setupSpiralGalaxy() {
    const container = document.getElementById("spiral-galaxy");
    if (!container) return;
    container.innerHTML = "";
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = "0"; // Send canvas to background
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let time = 0;
    let lastTime = 0;
    // Spiral parameters
    const particleCount = 200;
    const maxRadius = Math.min(canvas.width, canvas.height) ; // Max radius for spiral
    const spiralArms = 5; // Number of spiral arms
    const rotationSpeed = 0.006; // Base rotation speed
    // Create particles with initial positions
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      // Random distance from center (more particles toward center)
      const distanceFactor = Math.pow(Math.random(), 0.5); // Square root distribution
      const distance = distanceFactor * maxRadius;
      // Random angle with spiral arm offset
      const armIndex = Math.floor(Math.random() * spiralArms);
      const armOffset = (armIndex / spiralArms) * Math.PI * 2;
      // Logarithmic spiral formula: r = a*e^(b*θ)
      // We'll use this to determine the angle offset based on distance
      const spiralTightness = 0.2;
      const spiralAngle = Math.log(distance / 5) / spiralTightness;
      // Initial particle properties
      particles.push({
        distance: distance,
        angle: spiralAngle + armOffset,
        armIndex: armIndex,
        size: 1 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.7,
        // Each particle has its own speed variation
        speedFactor: 0.6 + Math.random() * 0.4,
        // Color variation (from white to blue-ish)
        color: {
          r: 220 + Math.floor(Math.random() * 35),
          g: 220 + Math.floor(Math.random() * 35),
          b: 255
        }
      });
    }

    function animate(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      time += deltaTime * 0.001;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw a simple center dot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();
      // Update and draw particles
      for (const particle of particles) {
        // Rotation speed decreases with distance (Keplerian rotation)
        const rotationFactor = 1 / Math.sqrt(particle.distance / 10);
        // Update angle based on distance from center (closer = faster)
        particle.angle +=
          rotationSpeed *
          rotationFactor *
          particle.speedFactor *
          deltaTime *
          0.05;
        // Calculate position
        const x = centerX + Math.cos(particle.angle) * particle.distance;
        const y = centerY + Math.sin(particle.angle) * particle.distance;
        // Particle size and opacity pulse based on arm position
        const armPhase = (time * 0.5 + particle.armIndex / spiralArms) % 1;
        const pulseFactor = Math.sin(armPhase * Math.PI * 2) * 0.3 + 0.7;
        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, particle.size * pulseFactor, 0, Math.PI * 2);
        // Apply color with opacity
        const finalOpacity = particle.opacity * pulseFactor;
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${finalOpacity})`;
        ctx.fill();
        // Draw trail for some particles (only the larger ones)
        if (particle.size > 1.8) {
          const trailLength = particle.distance * 0.15; // Trail length proportional to distance
          const trailAngle = particle.angle - 0.1 * rotationFactor; // Trail points backward
          const trailX =
            centerX + Math.cos(trailAngle) * (particle.distance - trailLength);
          const trailY =
            centerY + Math.sin(trailAngle) * (particle.distance - trailLength);
          // Draw trail
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(trailX, trailY);
          ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${
            particle.color.b
          }, ${finalOpacity * 0.3})`;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();
        }
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }
  // Initialize all preloaders
  window.addEventListener("load", function () {
    setupSpiralGalaxy();
  });
})();
  
  return (
     
    <div className="relative w-full h-screen overflow-hidden">
  <div id="spiral-galaxy" className="absolute inset-0 z-0"></div>

  {/* This content will now be above the spiral effect */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h1 className="text-white text-4xl font-bold">Hello {username?username:'World'}!</h1>
    <About />
  </div>
</div>
  )
}

export default SpiralGalaxy