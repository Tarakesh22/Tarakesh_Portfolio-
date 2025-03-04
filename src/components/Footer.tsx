import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="text-secondary w-8 h-8" />
            <span className="text-xl font-bold text-gradient">Tarakesh</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tarakesh-s-1a096523b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sayyapuredditarakesh23@gmail.com" className="text-white hover:text-secondary transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              &copy; {new Date().getFullYear()} Tarakesh Sayyapureddi. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed and built with ❤️ using React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;