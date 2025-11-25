import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Dipesh Bhattarai. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-600">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;