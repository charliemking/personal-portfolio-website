import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, Target, TrendingUp, ChevronDown, Info } from 'lucide-react';

const projects = [
  {
    name: 'Lunar Lander DQN',
    description: 'Built a Deep Q-Network in PyTorch to learn optimal landing policies in OpenAI Gym\'s Lunar Lander',
    tech: ['PyTorch', 'OpenAI Gym', 'Deep Q-Network', 'RL'],
    icon: Rocket,
    stats: { episodes: '1000+', exploration: 'ε-greedy', accuracy: '94%' },
    color: 'from-blue-500 to-purple-600',
    details: [
      'Implemented epsilon-greedy exploration strategy',
      'Used experience replay for stable learning',
      'Built target network for Q-learning stability',
      'Visual environment rollouts for evaluation'
    ]
  },
  {
    name: 'Breast Cancer Detection',
    description: 'Trained supervised learning models to detect breast cancer using the Wisconsin Diagnostic dataset',
    tech: ['scikit-learn', 'Logistic Regression', 'Decision Trees', 'SVM'],
    icon: Target,
    stats: { accuracy: '94%', library: 'sklearn', evaluation: 'ROC+CM' },
    color: 'from-orange-500 to-red-600',
    details: [
      'Implemented logistic regression classifier',
      'Built decision tree and SVM models',
      'Achieved 94% test accuracy',
      'Evaluated with ROC curves and confusion matrices'
    ]
  }
];

const Level2AI: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Floating AI elements */}
      <div className="absolute inset-0 opacity-20">
        {['🧠', '🤖', '⚡', '🎯', '📊', '🚀', '🔬'].map((emoji, i) => (
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
            className="text-sm text-blue-400 mb-2"
          >
            LEVEL 02
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            AI ADVENTURES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-cyan-300 max-w-2xl mx-auto"
          >
            "Discovered what ML can really do."
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 120, rotateX: 45, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: 120, rotateX: 45, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 1.1 + index * 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`bg-gradient-to-br ${project.color} p-1 rounded-lg`}
            >
              <div className="bg-black bg-opacity-80 p-6 rounded-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.8, delay: 1.3 + index * 0.4, type: 'spring', bounce: 0.4 }}
                  >
                    <project.icon size={32} className="text-white" />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: 1.5 + index * 0.4 }}
                    className="text-xl font-bold text-white"
                  >
                    {project.name}
                  </motion.h3>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.7 + index * 0.4 }}
                  className="text-gray-300 mb-4 text-sm leading-relaxed"
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.9 + index * 0.4 + techIndex * 0.1 }}
                      className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs border border-white border-opacity-30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Model performance visualization - bars on right with more label room */}
                <div className="space-y-3">
                  {Object.entries(project.stats).map(([metric, value], idx) => (
                    <motion.div 
                      key={metric} 
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.6, delay: 2.1 + index * 0.4 + idx * 0.1 }}
                      className="flex items-center justify-between gap-6"
                    >
                      <span className="text-gray-300 text-xs uppercase w-24 flex-shrink-0">{metric}:</span>
                      <div className="flex items-center gap-3">
                        <div className="w-20 bg-gray-700 h-2 border border-gray-600 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { 
                              width: metric === 'accuracy' ? value : 
                                     metric === 'episodes' ? '85%' : 
                                     metric === 'exploration' ? '90%' :
                                     metric === 'library' ? '100%' :
                                     metric === 'evaluation' ? '95%' : '80%' 
                            } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 2.3 + index * 0.4 + idx * 0.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          />
                        </div>
                        <span className="text-cyan-400 font-bold text-xs w-20 text-left">
                          {value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Training progress simulation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 2.5 + index * 0.4 }}
                  className="mt-4 p-3 bg-black bg-opacity-50 border border-cyan-500 text-xs"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={12} className="text-cyan-400" />
                    <span className="text-cyan-400">
                      {index === 0 ? 'Training Progress' : 'Model Evaluation'}
                    </span>
                  </div>
                  <div className="font-mono text-green-400">
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {index === 0 ? 
                        `Episode ${Math.floor(Math.random() * 1000) + 500}: Reward = ${Math.floor(Math.random() * 200) + 100}` :
                        `Test Accuracy: 94% | ROC-AUC: 0.${Math.floor(Math.random() * 10) + 90}`
                      }
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Info Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-400 hover:border-purple-400 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Info size={20} />
            {showMoreInfo ? 'HIDE DETAILS' : 'MORE INFO'}
            <motion.div
              animate={{ rotate: showMoreInfo ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Expanded Details Section */}
        <AnimatePresence>
          {showMoreInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -50 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="mt-8 overflow-hidden"
            >
              <div className="bg-black bg-opacity-60 border-2 border-purple-500 rounded-xl p-8">
                <div className="text-center mb-8">
                  <Brain size={40} className="text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">DETAILED PROJECT BREAKDOWN</h3>
                  <p className="text-purple-200">Deep dive into the technical implementation</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={`detailed-${project.name}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <project.icon size={28} className="text-cyan-400" />
                        <h4 className="text-xl font-bold text-white">{project.name}</h4>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-bold text-cyan-400 mb-3">TECHNICAL APPROACH:</h5>
                          <ul className="space-y-3">
                            {project.details.map((detail, idx) => (
                              <motion.li
                                key={detail}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + idx * 0.1 + 0.3 }}
                                className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                              >
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional insights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6"
                >
                  <h4 className="text-lg font-bold text-white mb-2">LEARNING OUTCOMES</h4>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    These projects provided hands-on experience with both supervised and reinforcement learning paradigms, 
                    from classical ML algorithms to modern deep learning architectures. Key insights gained include the importance 
                    of proper evaluation metrics, the challenges of exploration vs exploitation in RL, and the critical role of 
                    data preprocessing in model performance.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Neural network visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-black bg-opacity-60 border-2 border-purple-500 p-6">
            <Brain size={24} className="text-purple-400" />
            <div className="text-left">
              <div className="text-purple-400 text-sm">AI SYSTEMS STATUS</div>
              <div className="text-white font-bold">MODELS TRAINED & DEPLOYED</div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Level2AI;