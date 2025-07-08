import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mountain, Waves, Music, Cpu, Film, ShoppingBasket as Basketball, Gamepad2, Sparkles } from 'lucide-react';

const interests = [
  {
    icon: Mountain,
    title: 'Skiing',
    description: 'Carving through powder on mountain slopes',
    emoji: '⛷️'
  },
  {
    icon: Waves,
    title: 'Wake Surfing',
    description: 'Riding the endless wave behind the boat',
    emoji: '🏄‍♂️'
  },
  {
    icon: Sparkles,
    title: 'Football',
    description: 'Following the game and fantasy leagues',
    emoji: '🏈'
  },
  {
    icon: Basketball,
    title: 'Basketball',
    description: 'Playing pickup games and following the NBA',
    emoji: '🏀'
  },
  {
    icon: Music,
    title: 'Music',
    description: 'Discovering new artists and exploring different genres',
    emoji: '🎵'
  },
  {
    icon: Film,
    title: 'Movies',
    description: 'Exploring cinematic stories and visual storytelling',
    emoji: '🎬'
  },
  {
    icon: Gamepad2,
    title: 'Gaming',
    description: 'Exploring virtual worlds and competitive play',
    emoji: '🎮'
  },
  {
    icon: Cpu,
    title: 'Computing',
    description: 'Building systems and exploring new technologies',
    emoji: '🖥️'
  }
];

const InterestsLayer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Bioluminescent creatures */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['🌟', '✨', '💫', '🔮', '💎'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ocean Floor Treasures
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            The deepest passions and interests that drive my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: 'spring',
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-2xl group cursor-pointer"
            >
              <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-xl p-6 h-full flex flex-col items-center text-center hover:bg-opacity-20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-3"
                >
                  {interest.emoji}
                </motion.div>
                
                <interest.icon 
                  size={32} 
                  className="text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300" 
                />
                
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {interest.title}
                </h3>
                
                <p className="text-blue-100 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact section at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20 p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl border border-white border-opacity-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Surface?</h3>
          <p className="text-blue-100 mb-6">
            Let's connect and explore new depths together
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="mailto:charlie@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsLayer;