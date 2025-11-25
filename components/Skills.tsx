import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Box, Video, Cpu, Code } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Mechanical Basics', icon: Settings, level: 'Foundation' },
  { name: 'SolidWorks', icon: Box, level: 'Basic' },
  { name: 'DaVinci Resolve', icon: Video, level: 'Basic' },
  { name: 'Arduino + Sensors', icon: Cpu, level: 'Beginner' },
  { name: 'C Programming', icon: Code, level: 'Basic' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-600 tracking-widest uppercase mb-2">My Toolkit</h2>
          <h3 className="text-3xl font-bold text-slate-800">Skills & Tools</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-100 transition-all text-center flex flex-col items-center group"
            >
              <div className="p-4 bg-slate-50 rounded-full text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors mb-4">
                <skill.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">{skill.name}</h4>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;