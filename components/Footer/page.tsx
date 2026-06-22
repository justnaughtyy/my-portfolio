import React from 'react';
import Link from 'next/link';
import { CodeXml, Heart } from 'lucide-react';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
   
    <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/" className="flex items-center text-white font-bold text-xl">
            <span className="p-1 bg-yellow-500 hover:bg-purple-500 transition-colors rounded text-black mr-2">
              <CodeXml size={18} />
            </span>
            Natkamon
          </Link>
          
          <div className="hidden md:block w-px h-4 bg-gray-700"></div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Natkamon. All rights reserved.
          </p>
        </div>

        
        <div className="flex items-center text-sm text-gray-400">
          <span>Built with</span>
          
          <Heart size={16} className="mx-1.5 text-red-500 fill-red-500 animate-pulse" />
          <span>using Next.js & Tailwind</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;