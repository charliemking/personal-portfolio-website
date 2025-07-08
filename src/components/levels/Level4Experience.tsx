import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Building, Zap, TrendingUp, Star, Award, Users, ChevronDown, Info, DollarSign } from 'lucide-react';

const experiences = [
  {
    company: 'Duke in Silicon Valley',
    role: 'Immersive Program',
    period: 'Summer 2025',
    location: 'San Francisco, CA',
    highlights: [
      'Selected for Duke\'s immersive tech and entrepreneurship program',
      'Gained valuable insight into innovation, company building, and what it takes to turn ideas into real-world products',
      'Met with founders, venture capitalists, and executives at companies like Apple, Google, Meta, OpenAI, and Netflix'
    ],
    color: 'from-blue-500 to-purple-600',
    icon: Star,
    powerUp: '+10 Vision'
  },
  {
    company: 'Underdog Fantasy',
    role: 'Product Operations Intern',
    period: 'Summer 2024',
    location: 'Remote',
    highlights: [
      'Supported product operations by helping report daily statistics to a database used by 20+ team members',
      'Collaborated with other team members to ensure data accuracy in more niche sports such as Korean and Japanese baseball, cricket, surfing, and eSports'
    ],
    color: 'from-green-500 to-teal-600',
    icon: Zap,
    powerUp: '+20 Speed'
  },
  {
    company: 'Palo Alto Investors',
    role: 'Analyst Intern',
    period: 'May 2024',
    location: 'Palo Alto, CA',
    highlights: [
      'Completed a speaker-driven internship focused on investment strategy in healthcare and tech',
      'Learned from fund managers and analysts about long-term research, portfolio construction, and firm operations'
    ],
    color: 'from-yellow-500 to-orange-600',
    icon: DollarSign,
    powerUp: '+15 Strategy'
  },
  {
    company: 'Pro Football Focus',
    role: 'Data Analytics Volunteer',
    period: 'Winter 2023',
    location: 'Cincinnati, OH',
    highlights: [
      'Built models analyzing player transfer success through Duke Sports Analytics Club',
      'Worked with a five-person team to track NCAA performance trends before and after transfers'
    ],
    color: 'from-orange-500 to-red-600',
    icon: TrendingUp,
    powerUp: '+15 Analytics'
  }
];

const Level4Experience: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Floating power-up icons */}
      <div className="absolute inset-0 opacity-20">
        {['⭐', '⚡', '🚀', '💎', '🏆'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? {
              opacity: 0.6,
              scale: 1,
              rotate: [0, 180, 360],
              y: [0, -30, 0],
            } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.8 + 0.5,
            }}
          >
            {emoji}
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
            LEVEL 04
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            EXPERIENCE POWER-UPS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-cyan-300 max-w-3xl mx-auto"
          >
            "Gained +10 Vision from DSV, +20 Speed at Underdog Fantasy."
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={exp.company}>
              <motion.div
                initial={{ opacity: 0, y: 120, scale: 0.8, rotateX: 45 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 120, scale: 0.8, rotateX: 45 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.1 + index * 0.3,
                  type: 'spring',
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-gradient-to-br ${exp.color} p-1 rounded-xl group cursor-pointer`}
              >
                {/* Power-up glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div className="bg-black bg-opacity-80 rounded-xl p-6 h-full relative z-10">
                  {/* Power-up indicator */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 1.3 + index * 0.3, type: 'spring', bounce: 0.6 }}
                    className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-full border-2 border-yellow-300"
                  >
                    {exp.powerUp}
                  </motion.div>

                  <div className="text-center mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: 1.5 + index * 0.3, type: 'spring', bounce: 0.4 }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      className="inline-block mb-3"
                    >
                      <exp.icon size={40} className="text-white" />
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1.7 + index * 0.3 }}
                      className="text-white font-bold text-lg mb-1"
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ delay: 1.8 + index * 0.3 }}
                      className="text-gray-300 text-sm mb-1"
                    >
                      {exp.role}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 1.9 + index * 0.3 }}
                      className="text-gray-400 text-xs"
                    >
                      {exp.period}
                    </motion.p>
                  </div>

                  {/* More Info Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 2.1 + index * 0.3 }}
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Info size={16} />
                    {expandedExperience === index ? 'HIDE DETAILS' : 'MORE INFO'}
                    <motion.div
                      animate={{ rotate: expandedExperience === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  {/* Collectible animation */}
                  <motion.div
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    <div className="text-yellow-400 text-lg">💫</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedExperience === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="bg-black bg-opacity-60 border-2 border-yellow-500 rounded-xl p-6">
                      <h4 className="text-yellow-400 font-bold text-sm mb-4 flex items-center gap-2">
                        <Award size={16} />
                        KEY ACHIEVEMENTS:
                      </h4>
                      <div className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Vision', value: '+10', icon: '👁️' },
            { label: 'Speed', value: '+20', icon: '⚡' },
            { label: 'Strategy', value: '+15', icon: '💡' },
            { label: 'Analytics', value: '+15', icon: '📊' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 2.7 + index * 0.1, type: 'spring', bounce: 0.5 }}
              className="bg-black bg-opacity-60 border-2 border-yellow-500 p-4 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-yellow-400 font-bold text-lg">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Level complete message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 1, delay: 3, type: 'spring', bounce: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 font-bold text-lg">
            <Users size={24} className="inline mr-2" />
            EXPERIENCE LEVEL: MAXED OUT!
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Level4Experience;