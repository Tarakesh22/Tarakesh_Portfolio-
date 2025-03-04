import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { name: "ASP.NET Core", category: "backend" },
    { name: "C#", category: "backend" },
    { name: "SQL Server", category: "database" },
    { name: "Entity Framework", category: "backend" },
    { name: "JavaScript", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "RESTful APIs", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "Azure", category: "cloud" },
    { name: "MVC Pattern", category: "architecture" },
    { name: "LINQ", category: "backend" },
    { name: "Web Services", category: "backend" },
    { name: "Agile/Scrum", category: "methodology" },
    { name: "Unit Testing", category: "testing" },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools & DevOps" },
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-secondary text-primary'
                    : 'bg-primary-light text-white hover:bg-secondary/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;