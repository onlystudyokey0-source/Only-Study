import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Mail, Video } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { platform: 'YouTube', url: 'https://youtube.com', icon: Youtube },
  { platform: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Side */}
          <div className="w-full md:w-2/5 bg-slate-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                Whether you want to discuss robotics, content creation, or just say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:bhattaraidipesh898@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span className="text-sm">hello@dipeshb.com</span>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Socials</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors"
                    aria-label={link.platform}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                  placeholder="Hello Dipesh..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-200"
              >
                Send Message
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;