import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && circleRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = heroRef.current!.getBoundingClientRect();
        
        const x = clientX - left;
        const y = clientY - top;
        
        gsap.to(circleRef.current, {
          x: x - 150,
          y: y - 150,
          duration: 1,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Animated background circle */}
      <div 
        ref={circleRef}
        className="absolute w-[300px] h-[300px] rounded-full bg-secondary/20 blur-[100px] pointer-events-none"
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-secondary font-mono text-lg">Hello, I'm</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <TypeAnimation
              sequence={[
                'Tarakesh Sayyapureddi',
                1000,
                'a .NET Developer',
                1000,
                'a Full Stack Developer',
                1000,
                'Tarakesh Sayyapureddi',
                5000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light">
              <span className="font-mono text-secondary">&lt;</span> .NET Full Stack Developer <span className="font-mono text-secondary">/&gt;</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={700}>
              <button className="btn-primary">View My Work</button>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={700}>
              <button className="btn-outline">Contact Me</button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tarakesh-s-1a096523b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sayyapuredditarakesh23@gmail.com" className="text-white hover:text-secondary transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Link to="about" spy={true} smooth={true} offset={-70} duration={700} className="cursor-pointer">
          <ChevronDown className="w-8 h-8 text-secondary" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;