import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Code, Cpu, Coffee } from 'lucide-react';

const projects = [
  {
    name: 'Data Structures',
    description: 'Strong fundamental algorithms and data structures built via 7+ years of computer science courses and projects such as air hockey and hangman games',
    tech: ['Python', 'Java', 'Algorithms', 'DSA'],
    icon: Code,
    stats: { complexity: 'O(n)', tests: '100%', coverage: '95%' }
  },
  {
    name: 'Computer Systems',
    description: 'Learned via Duke coursework including implementing a custom memory allocator in C that uses segregated free lists and slab allocation',
    tech: ['C', 'Assembly', 'x86'],
    icon: Cpu,
    stats: { performance: '40%', memory: '85%', efficiency: '92%' }
  }
];

const Level1Foundations: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Floating code snippets */}
      <div className="absolute inset-0 opacity-20">
        {['malloc()', 'free()', 'sizeof()', 'struct', 'pointer*', 'ArrayList<>', 'HashMap', 'def __init__', 'list.sort()'].map((code, i) => (
          <motion.div
            key={code}
            className="absolute text-green-400 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
              opacity: [0.3, 0.7, 0.3],
              scale: 1,
              y: [0, -20, 0],
            } : { opacity: 0, scale: 0 }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5 + 0.5,
            }}
          >
            {code}
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
            className="text-sm text-green-400 mb-2"
          >
            LEVEL 01
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            FOUNDATIONS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-cyan-300 max-w-2xl mx-auto"
          >
            "Learned to walk... in Java, Python, and C."
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120, rotateY: index % 2 === 0 ? -15 : 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: index % 2 === 0 ? -120 : 120, rotateY: index % 2 === 0 ? -15 : 15 }}
              transition={{ 
                duration: 1.6, 
                delay: 1.1, 
                ease: [0.23, 1, 0.32, 1],
                type: 'tween'
              }}
              className="bg-black bg-opacity-60 border-4 border-green-500 p-6 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.3, 
                    type: 'spring', 
                    bounce: 0.2,
                    damping: 18
                  }}
                >
                  <project.icon size={32} className="text-green-400" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
                  className="text-xl font-bold text-white"
                >
                  {project.name}
                </motion.h3>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.7, ease: [0.23, 1, 0.32, 1] }}
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
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.9 + techIndex * 0.1,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 text-xs border border-green-500"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Stats bars with adjusted width for better text spacing */}
              <div className="space-y-3">
                {Object.entries(project.stats).map(([stat, value], statIndex) => (
                  <motion.div 
                    key={stat} 
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2.1 + statIndex * 0.1,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-400 uppercase">{stat}:</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-700 h-2 border border-gray-600 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: typeof value === 'string' && value.includes('%') ? value : '100%' } : { width: 0 }}
                          transition={{ 
                            duration: 1.2, 
                            delay: 2.3 + statIndex * 0.2, 
                            ease: [0.23, 1, 0.32, 1]
                          }}
                          className="h-full bg-green-400"
                        />
                      </div>
                      <span className="text-green-400 w-16 text-right whitespace-nowrap">{value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 1.2, delay: 2.7, ease: [0.23, 1, 0.32, 1] }}
          className="mt-12 bg-black border-4 border-green-500 p-4"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-green-500 pb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 2.9 }}
            >
              <Terminal size={16} className="text-green-400" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 3.0 }}
              className="text-green-400 text-sm"
            >
              terminal.exe
            </motion.span>
          </div>
          <div className="font-mono text-sm space-y-1">
            {[
              { text: '$ python3 data_structures.py', color: 'text-green-400' },
              { text: 'Running algorithms...', color: 'text-gray-300' },
              { text: '$ javac DataStructures.java', color: 'text-green-400' },
              { text: 'Compiling Java...', color: 'text-gray-300' },
              { text: '$ gcc -o malloc custom_malloc.c', color: 'text-green-400' },
              { text: 'Compiling C...', color: 'text-gray-300' },
              { text: 'All tests passed! ✓', color: 'text-cyan-300' },
              { text: '$ valgrind --leak-check=full ./malloc', color: 'text-green-400' },
              { text: 'No memory leaks detected ✓', color: 'text-cyan-300' }
            ].map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 3.1 + lineIndex * 0.15 }}
                className={line.color}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: [1, 0, 1] } : { opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity, delay: 5.0 }}
              className="text-green-400 inline-block"
            >
              $ █
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Level1Foundations;