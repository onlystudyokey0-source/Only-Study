import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, GraduationCap, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-slate-100">
               {/* Placeholder for Dipesh's photo. Using a clean abstract shape if no photo is available, 
                   or a placeholder image as requested. */}
               <img 
                 src="https://picsum.photos/600/600" 
                 alt="Dipesh Bhattarai" 
                 className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-sm font-medium opacity-90">Creator of</p>
                 <p className="text-xl font-bold">Explore With DB</p>
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-sm font-bold text-cyan-600 tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Learning, Building, & Creating.</h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              I am a first-year Mechanical Engineering student with a curiosity for how things work. 
              My journey is just beginning, but I am diving deep into robotics, CAD design, and programming.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Beyond engineering, I express my creativity through video editing on my YouTube channel, 
              <span className="font-semibold text-slate-800"> "Explore With DB"</span>. I believe in continuous 
              growth and hands-on learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Student</h4>
                  <p className="text-xs text-slate-500">Mechanical Engineering</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                  <Youtube size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Creator</h4>
                  <p className="text-xs text-slate-500">YouTube Content</p>
                </div>
              </div>

               <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <PenTool size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Editor</h4>
                  <p className="text-xs text-slate-500">DaVinci Resolve</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;