import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Star, Zap, Brain, Smartphone, Trophy, Sparkles, Dumbbell } from 'lucide-react';

interface GameUIProps {
  currentLevel: number;
  gameStarted: boolean;
}

const levels = [
  { name: 'START', icon: Gamepad2, color: 'text-green-400' },
  { name: 'FOUNDATIONS', icon: Star, color: 'text-blue-400' },
  { name: 'AI ADVENTURES', icon: Brain, color: 'text-purple-400' },
  { name: 'FOCUSAI BOSS', icon: Smartphone, color: 'text-pink-400' },
  { name: 'EXPERIENCE', icon: Zap, color: 'text-yellow-400' },
  { name: 'IRON SHARPENS', icon: Dumbbell, color: 'text-green-500' },
  { name: 'FUTURE', icon: Sparkles, color: 'text-cyan-400' }
];

const GameUI: React.FC<GameUIProps> = ({ currentLevel, gameStarted }) => {
  if (!gameStarted) return null;

  // Calculate score based on level (exponential growth)
  const calculateScore = (level: number) => {
    if (level === 0) return 0;
    return Math.pow(level, 3) * 1000 + level * 500;
  };

  return (
    <>
      {/* Level Progress Indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="bg-black bg-opacity-80 border-2 border-green-500 rounded-lg p-3">
          <div className="text-green-400 text-xs font-bold mb-3 text-center">LEVEL</div>
          <div className="space-y-3">
            {levels.slice(1).map((level, index) => {
              const levelIndex = index + 1;
              const isActive = currentLevel === levelIndex;
              const isCompleted = currentLevel > levelIndex;
              
              return (
                <motion.div
                  key={level.name}
                  className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-110' : isCompleted ? 'opacity-60' : 'opacity-40'
                  }`}
                  onClick={() => {
                    const element = document.querySelector(`[data-level="${levelIndex}"]`);
                    if (element) {
                      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementTop - 100; // Small offset for breathing room
                      
                      window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  <div className="relative">
                    <level.icon 
                      size={16} 
                      className={`${isActive ? level.color : 'text-gray-500'} transition-colors duration-300`} 
                    />
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full opacity-30"
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.3, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </div>
                  <div className="text-xs">
                    <div className={`font-bold ${isActive ? 'text-white' : 'text-gray-500'}`}>
                      {String(levelIndex).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top HUD */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-start">
        {/* Player Stats */}
        <div className="bg-black bg-opacity-80 border-2 border-green-500 p-3 text-xs">
          <div className="text-green-400 font-bold mb-1">PLAYER: CHARLIE</div>
          <div className="text-cyan-300">LEVEL: {String(currentLevel).padStart(2, '0')}</div>
          <div className="text-yellow-400">EXP: {currentLevel * 1337}</div>
        </div>

        {/* Current Level Display */}
        <div className="bg-black bg-opacity-80 border-2 border-green-500 p-3 text-xs text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <div className="text-green-400 font-bold mb-1">CURRENT LEVEL</div>
          <div className="text-white font-bold">{levels[currentLevel]?.name || 'UNKNOWN'}</div>
        </div>

        {/* Score */}
        <div className="bg-black bg-opacity-80 border-2 border-green-500 p-3 text-xs text-right">
          <div className="text-green-400 font-bold mb-1">SCORE:</div>
          <div className="text-yellow-400">{calculateScore(currentLevel).toLocaleString()}</div>
          <div className="text-cyan-300">LIVES: 1</div>
        </div>
      </div>

      {/* Mobile Level Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-black bg-opacity-80 border-2 border-green-500 rounded-full px-4 py-2">
          <div className="flex items-center gap-2">
            {levels[currentLevel] && (
              <>
                {(() => {
                  const CurrentLevelIcon = levels[currentLevel].icon;
                  return <CurrentLevelIcon size={16} className={levels[currentLevel].color} />;
                })()}
                <span className="text-white text-xs font-bold">
                  {String(currentLevel).padStart(2, '0')}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameUI;