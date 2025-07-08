import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StartScreen from './levels/StartScreen';
import Level1Foundations from './levels/Level1Foundations';
import Level2AI from './levels/Level2AI';
import Level3FocusAI from './levels/Level3FocusAI';
import Level4Experience from './levels/Level4Experience';
import LevelBonusFootball from './levels/LevelBonusFootball';
import Level5Future from './levels/Level5Future';
import GameUI from './GameUI';
import PixelBackground from './PixelBackground';

const RetroGameWebsite: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Transform scroll progress to background color - improved transitions for level 5
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.65, 0.7, 0.75, 0.84, 0.92, 1],
    [
      '#1a1a2e', // Dark purple (start screen)
      '#16213e', // Dark blue (foundations)
      '#0f3460', // Blue (AI)
      '#533483', // Purple (FocusAI)
      '#7209b7', // Bright purple (experience)
      '#4a5d23', // Transition to green (pre-football)
      '#2d5016', // Dark green (football entry)
      '#4a7c59', // Grass green (football active)
      '#3d6b4a', // Darker grass green (football exit)
      '#2d4b3a', // Transition back to purple
      '#2d1b69'  // Deep purple (future)
    ]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (progress < 0.14) setCurrentLevel(0);
      else if (progress < 0.28) setCurrentLevel(1);
      else if (progress < 0.42) setCurrentLevel(2);
      else if (progress < 0.56) setCurrentLevel(3);
      else if (progress < 0.7) setCurrentLevel(4);
      else if (progress < 0.84) setCurrentLevel(5); // Bonus football level
      else setCurrentLevel(6); // Future level
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleStartGame = () => {
    setGameStarted(true);
    // Scroll to Level 1 with offset to account for header
    const level1Element = document.querySelector('[data-level="1"]');
    if (level1Element) {
      const elementTop = level1Element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - 120; // Offset for header height
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback: scroll to slightly past the first screen
      window.scrollTo({ 
        top: window.innerHeight + 120, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="relative min-h-screen text-white"
    >
      <PixelBackground currentLevel={currentLevel} />
      <GameUI currentLevel={currentLevel} gameStarted={gameStarted} />
      
      <div className="relative z-10">
        <StartScreen onStartGame={handleStartGame} gameStarted={gameStarted} />
        <div data-level="1">
          <Level1Foundations />
        </div>
        <div data-level="2">
          <Level2AI />
        </div>
        <div data-level="3">
          <Level3FocusAI />
        </div>
        <div data-level="4">
          <Level4Experience />
        </div>
        <div data-level="5">
          <LevelBonusFootball />
        </div>
        <div data-level="6">
          <Level5Future />
        </div>
      </div>
    </motion.div>
  );
};

export default RetroGameWebsite;