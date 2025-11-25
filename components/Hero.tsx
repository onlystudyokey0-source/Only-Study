import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-white"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wider mb-6">
            PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Hi, I'm <span className="text-cyan-600">Dipesh Bhattarai</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            A first-year Mechanical Engineering student passionate about robotics, design, and creating content.
          </p>
          
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-slate-800 border border-slate-200 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-600 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-slate-400 hover:text-cyan-600 transition-colors">
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;