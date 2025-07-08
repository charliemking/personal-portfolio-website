import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Jellyfish */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`jellyfish-${i}`}
          className="absolute text-6xl opacity-20"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
          }}
        >
          🎐
        </motion.div>
      ))}

      {/* Fish schools */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`fish-${i}`}
          className="absolute text-2xl opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 200, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          🐟
        </motion.div>
      ))}

      {/* Seaweed */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`seaweed-${i}`}
          className="absolute text-4xl opacity-25"
          style={{
            left: `${10 + i * 25}%`,
            bottom: '0%',
          }}
          animate={{
            rotate: [-5, 5, -5],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          🌿
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;