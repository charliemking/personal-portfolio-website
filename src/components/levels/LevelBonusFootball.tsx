import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Clock, Zap, Shield, Target, Trophy } from 'lucide-react';

const LevelBonusFootball: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const stats = [
    { name: 'Discipline', level: 5, color: 'bg-green-500' },
    { name: 'Grit', level: 5, color: 'bg-green-500' },
    { name: 'Sleep', level: 2, color: 'bg-red-500' }
  ];

  const achievements = [
    {
      icon: Shield,
      title: 'Walk-On Warrior',
      description: 'Earned spot on Duke Football roster through determination',
      unlocked: true
    },
    {
      icon: Clock,
      title: 'Time Master',
      description: '30+ hours per week training while maintaining CS coursework',
      unlocked: true
    },
    {
      icon: Target,
      title: 'Precision Under Pressure',
      description: 'Applied athletic discipline to coding challenges',
      unlocked: true
    }
  ];

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Realistic football field background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full bg-green-600">
          {/* Field boundaries */}
          <div className="absolute inset-0 border-4 border-white" />
          
          {/* End zones with smooth fade and outline */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-[10%] border-b-4 border-white border-2 border-blue-500"
            animate={{
              backgroundColor: ['rgb(34, 139, 34)', 'rgb(0, 100, 200)', 'rgb(34, 139, 34)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold opacity-60">
              TOUCHDOWN
            </div>
          </motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[10%] border-t-4 border-white border-2 border-blue-500"
            animate={{
              backgroundColor: ['rgb(34, 139, 34)', 'rgb(0, 100, 200)', 'rgb(34, 139, 34)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold opacity-60">
              TOUCHDOWN
            </div>
          </motion.div>
          
          {/* Yard lines - every 5 yards */}
          {[15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85].map((yard, i) => (
            <div key={yard} className="absolute w-full border-t-2 border-white opacity-80" style={{ top: `${yard}%` }} />
          ))}
          
          {/* Major yard lines (every 10 yards) - thicker */}
          {[20, 30, 40, 50, 60, 70, 80].map((yard, i) => (
            <div key={`major-${yard}`} className="absolute w-full border-t-4 border-white" style={{ top: `${yard}%` }} />
          ))}
          
          {/* Yard numbers - fixed positioning for mobile */}
          {[
            { num: '10', pos: 20 }, { num: '20', pos: 30 }, { num: '30', pos: 40 }, 
            { num: '40', pos: 45 }, { num: '50', pos: 50 }, { num: '40', pos: 55 },
            { num: '30', pos: 60 }, { num: '20', pos: 70 }, { num: '10', pos: 80 }
          ].map((yard, i) => (
            <div key={`number-${i}`}>
              {/* Left side numbers */}
              <div 
                className="absolute text-white font-bold opacity-70 text-sm sm:text-xl"
                style={{ 
                  top: `${yard.pos}%`, 
                  left: '15%',
                  transform: 'translateY(-50%) rotate(90deg)',
                  transformOrigin: 'center'
                }}
              >
                {yard.num}
              </div>
              {/* Right side numbers */}
              <div 
                className="absolute text-white font-bold opacity-70 text-sm sm:text-xl"
                style={{ 
                  top: `${yard.pos}%`, 
                  right: '15%',
                  transform: 'translateY(-50%) rotate(-90deg)',
                  transformOrigin: 'center'
                }}
              >
                {yard.num}
              </div>
            </div>
          ))}
          
          {/* Hash marks */}
          {[20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80].map((yard, i) => (
            <div key={`hash-${yard}`}>
              {/* Left hash marks */}
              <div 
                className="absolute w-4 border-t-2 border-white opacity-60"
                style={{ top: `${yard}%`, left: '28%' }}
              />
              {/* Right hash marks */}
              <div 
                className="absolute w-4 border-t-2 border-white opacity-60"
                style={{ top: `${yard}%`, right: '28%' }}
              />
            </div>
          ))}
          
          {/* Goal posts */}
          <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl opacity-60">
            🥅
          </div>
          <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl opacity-60">
            🥅
          </div>
        </div>
      </motion.div>

      {/* Floating training elements */}
      <div className="absolute inset-0 opacity-20">
        {['🏈', '⚡', '💪', '🔥', '⏱️', '🎯'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? {
              opacity: 0.6,
              scale: 1,
              rotate: [0, 360],
              y: [0, -20, 0],
            } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5 + 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Locker door opening animation */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0, transformOrigin: 'top' }}
          animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-green-400 mb-2 font-bold"
          >
            SIDE QUEST
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            IRON SHARPENS IRON
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-green-300 max-w-2xl mx-auto mb-4"
          >
            "Walked on to Duke Football. Walked out sharper."
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Training 30+ hours per week while studying CS taught me how to show up, 
            push through friction, and trust the reps — whether it's on the field or in code.
          </motion.p>
        </motion.div>

        {/* Status bars */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="bg-black bg-opacity-80 border-4 border-green-500 p-6 mb-12"
        >
          <div className="text-center mb-6">
            <div className="text-green-400 font-bold text-lg mb-2">PLAYER STATS</div>
            <div className="text-white text-sm">TRAINING ARENA PERFORMANCE</div>
          </div>
          
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 1.8 + index * 0.2 }}
                className="flex items-center justify-between"
              >
                <span className="text-white font-bold text-sm uppercase w-24">
                  {stat.name}:
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        delay: 2 + index * 0.2 + i * 0.1,
                        type: 'spring',
                        bounce: 0.5
                      }}
                      className={`w-6 h-6 border-2 ${
                        i < stat.level 
                          ? `${stat.color} border-white` 
                          : 'bg-gray-700 border-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement unlocks */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 120, rotateX: 45, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: 120, rotateX: 45, scale: 0.8 }}
              transition={{ 
                duration: 1.2, 
                delay: 2.2 + index * 0.3,
                type: 'spring',
                bounce: 0.4
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-green-600 to-green-800 p-1 rounded-xl"
            >
              <div className="bg-black bg-opacity-80 rounded-xl p-6 h-full text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: 2.4 + index * 0.3, type: 'spring', bounce: 0.4 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className="mb-4"
                >
                  <achievement.icon size={40} className="text-green-400 mx-auto" />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 2.6 + index * 0.3 }}
                  className="text-white font-bold text-lg mb-2"
                >
                  {achievement.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 2.7 + index * 0.3 }}
                  className="text-gray-300 text-sm leading-relaxed mb-4"
                >
                  {achievement.description}
                </motion.p>

                {achievement.unlocked && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 2.8 + index * 0.3, type: 'spring', bounce: 0.6 }}
                    className="bg-green-500 bg-opacity-20 border border-green-500 px-3 py-1 rounded text-green-400 text-xs font-bold"
                  >
                    ✓ UNLOCKED
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training terminal */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="bg-black border-4 border-green-500 p-6 font-mono"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 3.4 }}
            className="flex items-center gap-2 mb-4 border-b border-green-500 pb-2"
          >
            <Dumbbell size={16} className="text-green-400" />
            <span className="text-green-400 text-sm">training_log.exe</span>
          </motion.div>
          
          <div className="space-y-2 text-sm">
            {[
              { text: '$ cat daily_schedule.txt', color: 'text-green-400' },
              { text: '05:00 - Wake up, fuel up', color: 'text-gray-300' },
              { text: '05:45 - Morning lift session', color: 'text-gray-300' },
              { text: '07:30 - Team meetings and film', color: 'text-gray-300' },
              { text: '09:30 - Team practice', color: 'text-gray-300' },
              { text: '13:30 - CS courses and labs', color: 'text-gray-300' },
              { text: '19:00 - Homework and coding', color: 'text-gray-300' },
              { text: '23:00 - Recovery (when possible)', color: 'text-gray-300' },
              { text: '$ grep "lessons_learned" experience.log', color: 'text-green-400' },
              { text: '• Consistency beats intensity', color: 'text-cyan-300' },
              { text: '• Pressure creates diamonds', color: 'text-cyan-300' },
              { text: '• Team > individual glory', color: 'text-cyan-300' },
              { text: '• Process > outcome', color: 'text-cyan-300' }
            ].map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 3.6 + lineIndex * 0.15 }}
                className={line.color}
              >
                {line.text}
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: [1, 0, 1] } : { opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity, delay: 5.5 }}
              className="text-green-400 inline-block mt-4"
            >
              $ █
            </motion.div>
          </div>
        </motion.div>

        {/* Side quest complete */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 1, delay: 4, type: 'spring', bounce: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-12 py-6 font-bold text-xl border-4 border-green-400">
            <Trophy size={32} className="inline mr-3" />
            SIDE QUEST COMPLETE!
            <div className="text-sm mt-2 font-normal">
              Mental toughness +100 | Discipline +100 | Team player +100
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LevelBonusFootball;