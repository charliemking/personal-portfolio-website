import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Monitor, Shield, Brain, Zap, Eye, Lock } from 'lucide-react';

const features = [
  {
    name: 'Smart Summaries',
    description: 'AI-powered content summarization',
    icon: Brain,
    demo: 'Analyzing lecture content...'
  },
  {
    name: 'Flashcards',
    description: 'Adaptive learning cards',
    icon: Zap,
    demo: 'Generating study cards...'
  },
  {
    name: 'Q&A Assistant',
    description: 'Interactive question answering',
    icon: Eye,
    demo: 'Ready to answer questions...'
  }
];

const Level3FocusAI: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Privacy-themed background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            } : { opacity: 0, scale: 0 }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2 + 0.5,
            }}
          >
            <Lock size={16} className="text-purple-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-purple-400 mb-2"
          >
            LEVEL 03 - BOSS FIGHT
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            FOCUSAI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-cyan-300 max-w-2xl mx-auto"
          >
            "Privacy mode: Engaged."
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* macOS app mockup */}
          <motion.div
            initial={{ opacity: 0, x: -120, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -120, rotateY: -15 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="relative w-full"
          >
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-[600px] mx-auto h-80 sm:h-96 lg:h-96 bg-gray-900 border-2 sm:border-4 border-purple-500 rounded-xl sm:rounded-2xl p-0.5 sm:p-1 relative overflow-hidden">
              {/* macOS window chrome */}
              <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg sm:rounded-xl relative flex flex-col">
                {/* Title bar */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="flex items-center justify-between px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 border-b border-gray-700 flex-shrink-0"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white text-xs sm:text-sm lg:text-base font-medium">FocusAI</div>
                  <div className="w-4 sm:w-8 lg:w-16"></div>
                </motion.div>

                {/* App content - improved layout with proper flex */}
                <div className="flex-1 p-2 sm:p-3 lg:p-6 flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-6 min-h-0">
                  {/* Header section - mobile only */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="lg:hidden text-center mb-2 flex-shrink-0"
                  >
                    <Brain size={20} className="text-purple-300 mx-auto mb-1" />
                    <h3 className="text-white font-bold text-sm">FocusAI</h3>
                    <p className="text-purple-200 text-xs">Privacy-First</p>
                  </motion.div>

                  {/* Sidebar - desktop with proper scrolling */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: 1.7 }}
                    className="hidden lg:flex lg:flex-col lg:w-48 lg:pr-6 lg:border-r lg:border-gray-700"
                  >
                    <div className="text-center mb-4 flex-shrink-0">
                      <Brain size={28} className="text-purple-300 mx-auto mb-2" />
                      <h3 className="text-white font-bold text-base">FocusAI</h3>
                      <p className="text-purple-200 text-xs">Privacy-First Learning</p>
                    </div>

                    {/* Feature tabs - desktop vertical layout with scroll */}
                    <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                          onClick={() => setActiveFeature(index)}
                          className={`p-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                            activeFeature === index 
                              ? 'bg-purple-500 bg-opacity-30 border border-purple-400' 
                              : 'bg-black bg-opacity-30 hover:bg-purple-500 hover:bg-opacity-20'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <feature.icon size={14} className="text-purple-300" />
                            <span className="text-white text-xs font-medium">{feature.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Feature tabs - mobile horizontal layout */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="lg:hidden flex gap-1 overflow-x-auto pb-1 mb-2 flex-shrink-0"
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                        onClick={() => setActiveFeature(index)}
                        className={`p-1.5 rounded cursor-pointer transition-all duration-300 flex-shrink-0 ${
                          activeFeature === index 
                            ? 'bg-purple-500 bg-opacity-30 border border-purple-400' 
                            : 'bg-black bg-opacity-30'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <feature.icon size={12} className="text-purple-300" />
                          <span className="text-white text-xs font-medium whitespace-nowrap">{feature.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Main content area - improved flex layout with more space on mobile */}
                  <div className="flex-1 min-h-0 flex flex-col">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col min-h-0"
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="mb-2 lg:mb-3 flex-shrink-0"
                        >
                          <h4 className="text-white font-bold text-sm lg:text-base mb-1 lg:mb-1">
                            {features[activeFeature].name}
                          </h4>
                          <p className="text-purple-200 text-xs lg:text-sm mb-1 lg:mb-2 hidden sm:block">
                            {features[activeFeature].description}
                          </p>
                        </motion.div>

                        {/* Demo content area - mobile reverted to original, desktop with distribution */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex-1 bg-black bg-opacity-30 rounded p-2 lg:p-3 mb-2 lg:mb-3 min-h-0 flex flex-col lg:justify-center"
                        >
                          {/* Mobile layout - original compact version with correct text sizes */}
                          <div className="lg:hidden">
                            <div className="text-green-400 font-mono mb-2 flex-shrink-0" style={{ fontSize: '14px' }}>
                              {features[activeFeature].demo}
                            </div>
                            <div className="space-y-2 flex-1 flex flex-col justify-center">
                              <div className="w-full h-2 bg-gray-700 rounded">
                                <motion.div
                                  className="h-full bg-purple-400 rounded"
                                  animate={{ width: ['0%', '100%'] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              </div>
                              <div className="text-gray-400" style={{ fontSize: '10px' }}>Processing with Phi-3...</div>
                            </div>
                          </div>

                          {/* Desktop layout - with even distribution */}
                          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:space-y-4">
                            <div className="text-green-400 font-mono text-left text-base">
                              {features[activeFeature].demo}
                            </div>
                            
                            <div className="w-full h-2 bg-gray-700 rounded">
                              <motion.div
                                className="h-full bg-purple-400 rounded"
                                animate={{ width: ['0%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </div>
                            
                            <div className="text-gray-400 text-left text-xs">
                              Processing with Phi-3...
                            </div>
                          </div>
                        </motion.div>

                        {/* Privacy indicator - fixed at bottom with better mobile sizing */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="bg-green-500 bg-opacity-20 border border-green-500 rounded p-1.5 lg:p-2 flex-shrink-0"
                        >
                          <div className="flex items-center justify-center gap-1 lg:gap-2">
                            <Lock size={10} className="text-green-400 lg:hidden" />
                            <Lock size={12} className="text-green-400 hidden lg:block" />
                            <span className="text-green-400 text-xs lg:text-sm font-medium">LOCAL LLM</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Floating privacy shields - adjusted for mobile */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${8 + i * 12}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? {
                    opacity: 0.6,
                    scale: 1,
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3 + 2,
                  }}
                >
                  <Shield size={10} className="text-green-400 opacity-60 sm:hidden" />
                  <Shield size={12} className="text-green-400 opacity-60 hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features list - now centered vertically with the app mockup */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="flex flex-col justify-center space-y-4 lg:space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFeature(index)}
                className={`p-4 lg:p-6 border-2 cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-purple-400 bg-purple-500 bg-opacity-20' 
                    : 'border-purple-600 bg-black bg-opacity-40 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <feature.icon size={24} className="text-purple-400" />
                  <div>
                    <h3 className="text-white font-bold text-base lg:text-lg mb-1">{feature.name}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Phi-3 badge - centered above boss defeated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 lg:p-4 inline-block rounded-lg">
            <Monitor size={20} className="text-white mx-auto mb-2" />
            <div className="text-white font-bold text-sm lg:text-base">Built with Phi-3</div>
            <div className="text-purple-200 text-xs lg:text-sm">100% Local Processing on macOS</div>
          </div>
        </motion.div>

        {/* Boss defeated message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 1, delay: 2.8, type: 'spring', bounce: 0.4 }}
          className="text-center mt-8"
        >
          <div className="inline-block bg-green-500 bg-opacity-20 border-2 border-green-500 p-3 lg:p-4">
            <div className="text-green-400 font-bold text-base lg:text-lg">BOSS DEFEATED!</div>
            <div className="text-white text-xs lg:text-sm">Privacy-First AI Unlocked</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Level3FocusAI;