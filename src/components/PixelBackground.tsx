import React from 'react';
import { motion } from 'framer-motion';

interface PixelBackgroundProps {
  currentLevel: number;
}

const PixelBackground: React.FC<PixelBackgroundProps> = ({ currentLevel }) => {
  // Different background patterns for each level
  const getBackgroundElements = () => {
    switch (currentLevel) {
      case 0: // Start screen
        return (
          <>
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={`start-${i}`}
                className="absolute w-1 h-1 bg-green-400 opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        );
      
      case 1: // Foundations
        return (
          <>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`foundation-${i}`}
                className="absolute w-2 h-2 border border-blue-400 opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        );
      
      case 2: // AI Adventures
        return (
          <>
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`ai-${i}`}
                className="absolute w-3 h-3 bg-purple-400 opacity-40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </>
        );
      
      case 3: // FocusAI Boss
        return (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`boss-${i}`}
                className="absolute w-4 h-4 border-2 border-pink-400 opacity-50"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        );
      
      case 4: // Experience
        return (
          <>
            {[...Array(35)].map((_, i) => (
              <motion.div
                key={`exp-${i}`}
                className="absolute text-yellow-400 opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: '8px',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ★
              </motion.div>
            ))}
          </>
        );
      
      case 5: // Football Bonus
        return (
          <>
            {/* Football field yard lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`yard-${i}`}
                className="absolute w-full h-0.5 bg-white opacity-10"
                style={{ top: `${15 + i * 10}%` }}
              />
            ))}
            
            {/* Training equipment sprites */}
            {['🏈', '💪', '⚡', '🔥'].map((emoji, i) => (
              <motion.div
                key={`training-${i}`}
                className="absolute text-green-400 opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: '12px',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </>
        );
      
      case 6: // Future
        return (
          <>
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`future-${i}`}
                className="absolute text-cyan-400 opacity-50"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: '10px',
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                ✨
              </motion.div>
            ))}
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {getBackgroundElements()}
      
      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </div>
  );
};

export default PixelBackground;