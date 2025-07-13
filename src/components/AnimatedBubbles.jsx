import React, { useEffect, useState } from 'react';
import '../stylesheets/AnimatedBubbles.css';

const AnimatedBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 25 }, (_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 10, // 10-40px (reduced from 20-80px)
      speedX: (Math.random() - 0.5) * 2, // -1 to 1
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.25 + 0.05, // 0.05 to 0.3 (reduced opacity)
      delay: Math.random() * 2,
    }));

    setBubbles(initialBubbles);

    // Animation loop
    const animateBubbles = () => {
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          let newX = bubble.x + bubble.speedX;
          let newY = bubble.y + bubble.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newX = bubble.x;
            bubble.speedX = -bubble.speedX;
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newY = bubble.y;
            bubble.speedY = -bubble.speedY;
          }

          // Add slight random movement (reduced frequency)
          const randomX = (Math.random() - 0.5) * 0.3;
          const randomY = (Math.random() - 0.5) * 0.3;

          return {
            ...bubble,
            x: newX + randomX,
            y: newY + randomY,
          };
        })
      );
    };

    const intervalId = setInterval(animateBubbles, 80);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="animated-bubbles-container">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles; 