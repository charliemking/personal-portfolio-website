import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles, Mountain, Waves, Music, Cpu, Film, ShoppingBasket as Basketball, Gamepad2, Mail, Github, Linkedin, User, X } from 'lucide-react';

const interests = [
  { 
    name: 'Skiing', 
    icon: Mountain, 
    emoji: '⛷️',
    description: 'Ever since I was two years old skiing for the first time in Sun Valley, it has been my favorite hobby. Gliding down the slopes on a snowy day is the best way to enjoy nature at its purest.'
  },
  { 
    name: 'Wake Surfing', 
    icon: Waves, 
    emoji: '🏄‍♂️',
    description: 'During the summer, I love to wake surf in Lake Tahoe with friends and family. There\'s no better feeling than dragging your hand in the water as you carve up and down that infinite wave.'
  },
  { 
    name: 'Football', 
    icon: Sparkles, 
    emoji: '🏈',
    description: 'In addition to my playing career, I have always been a huge fan of watching football. I grew up watching RedZone with my dad every Sunday and playing fantasy football with my friends. My favorite team is the Packers.'
  },
  { 
    name: 'Basketball', 
    icon: Basketball, 
    emoji: '🏀',
    description: 'I love watching basketball, especially Duke and the Warriors. There\'s a different energy inside Cameron Indoor, and it\'s infectious. I try to go to every home game.'
  },
  { 
    name: 'Music', 
    icon: Music, 
    emoji: '🎵',
    description: 'I love listening to music when I\'m doing pretty much anything: studying, lifting, driving, eating, etc. My favorite genres are rock, hip-hop, and house, and my favorite song is Hotel California.'
  },
  { 
    name: 'Movies', 
    icon: Film, 
    emoji: '🎬',
    description: 'I\'m a big movie fan. My favorite director is Christopher Nolan, and in my opinion his best movies are The Dark Knight, Memento, and the Prestige. Some of my other favorite movies include Gladiator, Parasite, and Prisoners.'
  },
  { 
    name: 'Gaming', 
    icon: Gamepad2, 
    emoji: '🎮',
    description: 'Growing up, I always loved playing video games. Some of my favorites included Fortnite, The Last of Us, Madden, Rocket League, and Valorant.'
  },
  { 
    name: 'Computing', 
    icon: Cpu, 
    emoji: '🖥️',
    description: 'For as long as I can remember, I have been fascinated by computing. I attended my first hackathon at age 12 and built my first PC at age 15. The AI revolution has only bolstered this passion. The possibilities of computing are endless.'
  }
];

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:charlie.king@duke.edu', color: 'text-orange-400' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/charliemking', color: 'text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/charliemking', color: 'text-blue-400' },
  { name: 'ESPN', icon: User, href: 'https://www.espn.com/college-football/player/_/id/5218794/charlie-king', color: 'text-red-400' }
];

const Level5Future: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [selectedInterest, setSelectedInterest] = useState<number | null>(null);

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Sparkle effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? {
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3 + 0.5,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            className="text-sm text-yellow-400 mb-2"
          >
            FINAL LEVEL
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            FUN + FUTURE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-cyan-300 max-w-2xl mx-auto"
          >
            "Next quest: Ethics of AI."
          </motion.p>
        </motion.div>

        {/* Interests grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.1 + index * 0.1,
                type: 'spring',
                bounce: 0.6
              }}
              onClick={() => setSelectedInterest(index)}
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-lg group cursor-pointer"
            >
              <div className="bg-black bg-opacity-80 rounded-lg p-4 h-full flex flex-col items-center text-center hover:bg-opacity-60 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: 1.3 + index * 0.1, type: 'spring', bounce: 0.4 }}
                  className="text-3xl mb-2"
                >
                  {interest.emoji}
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <interest.icon 
                    size={24} 
                    className="text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300" 
                  />
                </motion.div>
                
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-white text-xs font-bold group-hover:text-yellow-300 transition-colors duration-300"
                >
                  {interest.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interest Detail Popup */}
        <AnimatePresence>
          {selectedInterest !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedInterest(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: 'spring', bounce: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-xl max-w-md w-full mx-4"
              >
                <div className="bg-black bg-opacity-90 rounded-xl p-6 relative">
                  {/* Close button */}
                  <motion.button
                    onClick={() => setSelectedInterest(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X size={24} />
                  </motion.button>

                  {/* Interest content */}
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
                      className="text-5xl mb-4"
                    >
                      {interests[selectedInterest].emoji}
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
                      className="mb-4"
                    >
                      {(() => {
                        const InterestIcon = interests[selectedInterest].icon;
                        return <InterestIcon size={32} className="text-yellow-300 mx-auto" />;
                      })()}
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      {interests[selectedInterest].name}
                    </motion.h3>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 leading-relaxed text-center"
                  >
                    {interests[selectedInterest].description}
                  </motion.p>

                  {/* Decorative elements */}
                  <div className="absolute top-2 left-2 text-yellow-400 opacity-60">✨</div>
                  <div className="absolute bottom-2 right-2 text-purple-400 opacity-60">💫</div>
                  <div className="absolute top-1/2 left-2 text-pink-400 opacity-40">🌟</div>
                  <div className="absolute top-1/2 right-2 text-cyan-400 opacity-40">⭐</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Future quest */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-xl inline-block">
            <div className="bg-black bg-opacity-80 rounded-xl p-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: 2.2, type: 'spring', bounce: 0.4 }}
              >
                <Sparkles size={48} className="text-yellow-400 mx-auto mb-4" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 2.3 }}
                className="text-2xl font-bold text-white mb-4"
              >
                NEXT QUEST UNLOCKED
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 2.4 }}
                className="text-cyan-300 text-lg mb-6"
              >
                Ethics of AI course at the London School of Economics and Political Science
              </motion.p>
              <div className="flex justify-center gap-4 text-sm">
                {[
                  { label: 'ETHICAL', color: 'border-green-500 text-green-400', delay: 2.5 },
                  { label: 'ABROAD', color: 'border-blue-500 text-blue-400', delay: 2.6 }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: badge.delay, type: 'spring', bounce: 0.4 }}
                    className={`bg-opacity-20 border px-3 py-1 rounded ${badge.color}`}
                  >
                    <span>{badge.label} ✓</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal footer with social links */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="bg-black border-4 border-green-500 p-6 font-mono"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 3 }}
            className="flex items-center gap-2 mb-4 border-b border-green-500 pb-2"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 text-sm ml-2">terminal.exe - Contact</span>
          </motion.div>
          
          <div className="space-y-2 text-sm">
            {[
              { text: '$ whoami', color: 'text-green-400' },
              { text: 'charlie_matsushima_king', color: 'text-white' },
              { text: '$ cat contact.txt', color: 'text-green-400' }
            ].map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 3.2 + lineIndex * 0.2 }}
                className={line.color}
              >
                {line.text}
              </motion.div>
            ))}
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 3.8 + index * 0.1 }}
                  className={`flex items-center gap-2 ${link.color} hover:text-white transition-colors duration-300`}
                >
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 4.2 }}
              className="mt-4 pt-4 border-t border-green-500"
            >
              <div className="text-cyan-300">Ready for the next adventure? Let's build something amazing together.</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [1, 0, 1] } : { opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, delay: 4.5 }}
                className="text-green-400 inline-block mt-2"
              >
                $ █
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Game complete */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 1, delay: 4.5, type: 'spring', bounce: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 font-bold text-2xl">
            🏆 GAME COMPLETE! 🏆
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 4.8 }}
            className="text-white mt-4 text-lg"
          >
            Thanks for playing! Ready to start a new game together?
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Level5Future;