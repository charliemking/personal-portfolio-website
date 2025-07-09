import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Brain, Rocket, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'FocusAI',
    description: 'Privacy-first macOS study application using Phi-3 for personalized learning experiences and distraction management.',
    icon: Brain,
    tech: ['Swift', 'Phi-3', 'macOS'],
    github: '#',
    link: '#'
  },
  {
    title: 'Lunar Lander',
    description: 'Deep reinforcement learning agent that masters the classic Lunar Lander game using advanced neural networks.',
    icon: Rocket,
    tech: ['Python', 'PyTorch', 'OpenAI Gym'],
    github: '#',
    link: '#'
  },
  {
    title: 'Custom Malloc',
    description: 'High-performance memory allocator implementation with optimized heap management and fragmentation reduction.',
    icon: Cpu,
    tech: ['C', 'Assembly', 'Linux'],
    github: '#',
    link: '#'
  }
];

const ProjectLayer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Underwater particle effects */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 bg-opacity-40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
            Deep Dive Projects
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Exploring the depths of technology through hands-on projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4">
                <project.icon 
                  size={40} 
                  className="text-blue-200 group-hover:text-white transition-colors duration-300" 
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500 bg-opacity-30 text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  href={project.link}
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLayer;