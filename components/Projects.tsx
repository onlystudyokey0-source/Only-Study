import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, PenTool, Palette } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Remote control car',
    description: 'A car that can be controllrd and moved using the application in the phone,IR sensor used.',
    tags: ['Arduino', 'Robotics', 'Sensors'],
    icon: Zap,
    status: 'Completed',
  },
  
  {
    title: 'Workshop Prototypes',
    description: 'Various hands-on mechanical builds created during college workshops.',
    tags: ['Mechanical', 'Fabrication', 'Tools'],
    icon: PenTool,
    status: 'In Progress',
  },
  {
    title: 'Scrap Metal Art',
    description: 'A creative concept to recycle metal waste into artistic sculptures.',
    tags: ['Art', 'Design', 'Sustainability'],
    icon: Palette,
    status: 'Concept',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-600 tracking-widest uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl font-bold text-slate-800">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-200 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700 border-green-200' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                    'bg-slate-200 text-slate-600 border-slate-300'
                }`}>
                    {project.status}
                </span>
              </div>

              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-600 mb-6">
                <project.icon size={24} />
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;