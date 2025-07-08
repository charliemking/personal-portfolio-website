import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const IntroLayer: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated bubbles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white bg-opacity-30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center text-white z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent"
        >
          Charlie King
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-8 text-blue-100"
        >
          Computer Science at Duke University
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Builder of AI tools, breaker of abstractions, believer in privacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="mx-auto text-white opacity-70" />
          <p className="text-sm mt-2 opacity-70">Dive deeper</p>
        </motion.div>
      </div>

      {/* Water ripple effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600 to-transparent"
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </section>
  );
};

export default IntroLayer;