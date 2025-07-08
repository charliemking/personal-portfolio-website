import React from 'react';
import { motion } from 'framer-motion';
import { Play, Gamepad2 } from 'lucide-react';

interface StartScreenProps {
  onStartGame: () => void;
  gameStarted: boolean;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame, gameStarted }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Gamepad2 size={64} className="mx-auto mb-4 text-green-400" />
          <h1 className="text-4xl md:text-6xl mb-4 text-green-400 pixel-text">
            LEVEL UP
          </h1>
          <div className="text-lg md:text-xl mb-2 text-cyan-300">
            CHARLIE KING
          </div>
          <div className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            CS + AI @ Duke | Builder of FocusAI | User-First Engineer
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          <motion.button
            onClick={onStartGame}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-green-500 hover:bg-green-400 text-black px-8 py-4 text-lg font-bold border-4 border-green-600 hover:border-green-500 transition-all duration-200 flex items-center gap-3 mx-auto"
            style={{ imageRendering: 'pixelated' }}
          >
            <Play size={20} />
            PRESS START
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-4 bg-black ml-2"
            />
          </motion.button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-gray-400 mt-8"
          >
            ↓ SCROLL TO PLAY ↓
          </motion.div>
        </motion.div>

        {/* Retro game UI elements - only show when game hasn't started */}
        {!gameStarted && (
          <>
            <div className="absolute top-4 left-2 sm:left-8 text-xs">
              <div className="bg-black bg-opacity-50 p-1.5 sm:p-2 border border-green-400 sm:border-2 h-16 sm:h-20 flex flex-col justify-center">
                <div className="text-green-400 text-xs sm:text-sm">PLAYER: CHARLIE</div>
                <div className="text-cyan-300 text-xs sm:text-sm">LEVEL: 00</div>
              </div>
            </div>

            <div className="absolute top-4 right-2 sm:right-8 text-xs">
              <div className="bg-black bg-opacity-50 p-1.5 sm:p-2 border border-green-400 sm:border-2 h-16 sm:h-20 flex flex-col justify-center">
                <div className="text-green-400 text-xs sm:text-sm">STATUS: READY</div>
                <div className="text-cyan-300 text-xs sm:text-sm">MODE: STORY</div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default StartScreen;