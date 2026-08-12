import React from 'react';
import { Pixel8BitMascot } from './Pixel8BitMascot';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2 group cursor-default">
        <Pixel8BitMascot className="w-5 h-5" />
        <span className="group-hover:text-zinc-400 transition-colors">be happy :)</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:lotzp@proton.me"
          className="hover:text-zinc-300 hover:underline transition-colors"
        >
          Email
        </a>

        <a
          href="https://github.com/paullotz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 hover:underline transition-colors"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/paul-lotz/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300 hover:underline transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
