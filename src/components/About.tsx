import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Hi! I'm Tarakesh, a passionate .NET Full Stack Developer with hands-on experience in creating dynamic web applications using technologies like ASP.NET MVC Core, C#, and SQL. My focus is on building highly responsive, robust web solutions that drive efficiency and user engagement.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in C#, ASP.NET, and SQL, with a focus on clean code, problem-solving, and collaboration. I'm passionate about continuously learning new technologies and staying up to date with industry trends. Let's create something great together!
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Code className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                <p className="text-gray-300">Creating responsive and intuitive user interfaces with modern web technologies.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Server className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                <p className="text-gray-300">Building robust server-side applications with ASP.NET Core and C#.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Database className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Database Management</h3>
                <p className="text-gray-300">Designing and optimizing SQL databases for performance and scalability.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Full Stack Solutions</h3>
                <p className="text-gray-300">Delivering end-to-end web applications that solve real-world problems.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;