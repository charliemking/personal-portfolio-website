import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentLayer: number;
}

const layers = [
  { name: 'Surface', depth: '0m', icon: '🌊' },
  { name: 'Projects', depth: '50m', icon: '🚀' },
  { name: 'Experience', depth: '200m', icon: '🏢' },
  { name: 'Interests', depth: '1000m', icon: '💎' }
];

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentLayer }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl p-4 border border-white border-opacity-20">
        <div className="space-y-6">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                currentLayer === index ? 'text-white' : 'text-blue-300 opacity-60'
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                const element = document.querySelector(`section:nth-child(${index + 1})`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className={`relative ${currentLayer === index ? 'scale-110' : ''}`}>
                <motion.div
                  animate={{
                    scale: currentLayer === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: currentLayer === index ? Infinity : 0,
                  }}
                  className="text-xl"
                >
                  {layer.icon}
                </motion.div>
                {currentLayer === index && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full opacity-30"
                    animate={{
                      scale: [1, 2],
                      opacity: [0.3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
              
              <div className="text-right">
                <div className="font-semibold text-sm">{layer.name}</div>
                <div className="text-xs opacity-70">{layer.depth}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Depth indicator line */}
        <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-300 to-purple-500 opacity-30" />
        <motion.div
          className="absolute left-2 top-4 w-0.5 bg-gradient-to-b from-white to-blue-300"
          style={{
            height: `${((currentLayer + 1) / layers.length) * 100}%`
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;