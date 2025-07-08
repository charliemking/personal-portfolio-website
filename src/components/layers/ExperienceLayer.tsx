import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Duke in Silicon Valley',
    role: 'Immersive Program',
    period: 'Summer 2025',
    location: 'San Francisco, CA',
    description: 'Intensive software engineering program with top tech companies in Silicon Valley.',
    highlights: [
      'Collaborated with industry professionals on real-world projects',
      'Developed scalable web applications using modern frameworks',
      'Participated in technical workshops and community building'
    ],
    color: 'from-blue-500 to-purple-600'
  },
  {
    company: 'Underdog Fantasy',
    role: 'Product Operations Intern',
    period: 'Summer 2024',
    location: 'Remote',
    description: 'Worked on product operations and user experience optimization at a leading fantasy sports platform.',
    highlights: [
      'Improved user onboarding flow and product metrics',
      'Analyzed user behavior data to drive product decisions',
      'Collaborated with product and engineering teams on feature development'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    company: 'Pro Football Focus (PFF)',
    role: 'Data Analytics Volunteer',
    period: 'Winter 2023',
    location: 'Cincinnati, OH',
    description: 'Analyzed college football player performance data for transfer portal analytics.',
    highlights: [
      'Built predictive models for player performance analytics',
      'Created data visualizations for transfer portal reporting',
      'Processed and cleaned large datasets of transfer portal statistics'
    ],
    color: 'from-orange-500 to-red-600'
  }
];

const ExperienceLayer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Deep sea creatures */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            🐠
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Depths
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Navigating the currents of industry experience
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
                className={`bg-gradient-to-r ${exp.color} p-1 rounded-xl cursor-pointer`}
              >
                <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="text-white" size={24} />
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      </div>
                      
                      <p className="text-xl text-blue-100 mb-2">{exp.role}</p>
                      
                      <div className="flex items-center gap-4 text-blue-200 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: selectedExperience === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="text-white" size={24} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {selectedExperience === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
                  >
                    <p className="text-blue-100 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 text-blue-200"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceLayer;