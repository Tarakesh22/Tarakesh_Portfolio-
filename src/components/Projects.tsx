import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Plus } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Hotel Management System",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "A scalable web-based hotel reservation system for automating booking processes, managing customer data, and improving operational efficiency for hotel management.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "HTML/CSS", "RESTful APIs"],
      achievements: [
        "Reduced booking time by 40%",
        "Increased user satisfaction by 30%",
        "Improved operational efficiency by 25%"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Student Attendance System",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      description: "Automated student attendance using fingerprint, GSM, and RFID technologies integrated with a robust SQL database.",
      technologies: ["Arduino", "SQL Server", "IoT", "RFID", "GSM", "Fingerprint Authentication"],
      achievements: [
        "Increased attendance accuracy by 90%",
        "Reduced processing time by 70%",
        "Improved data security"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "PCB Design Project",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      description: "Designed and developed a printed circuit board (PCB) system for electrical connections and optimized component support.",
      technologies: ["Altium Designer", "Eagle", "PCB Design", "Circuit Simulation", "Hardware Engineering"],
      achievements: [
        "Reduced production cost by 20%",
        "Improved system performance",
        "Optimized design for durability"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Developed a full-featured e-commerce platform with product management, user authentication, and payment processing.",
      technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "React", "Stripe API", "Azure"],
      achievements: [
        "Increased sales conversion by 35%",
        "Reduced page load time by 60%",
        "Implemented secure payment processing"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Inventory Management System",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Built a comprehensive inventory tracking system for small businesses with barcode scanning and reporting features.",
      technologies: [".NET MAUI", "C#", "SQLite", "Xamarin", "Barcode API", "PDF Generation"],
      achievements: [
        "Reduced inventory discrepancies by 85%",
        "Automated reordering process",
        "Implemented real-time inventory tracking"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Healthcare Patient Portal",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Created a secure patient portal for healthcare providers allowing appointment scheduling and medical record access.",
      technologies: ["ASP.NET Core", "Identity Server", "SQL Server", "HIPAA Compliance", "Angular", "Azure B2C"],
      achievements: [
        "Reduced administrative workload by 40%",
        "Improved patient satisfaction scores",
        "Ensured 100% HIPAA compliance"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card group h-full flex flex-col"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setActiveProject(activeProject === index ? null : index)}
                    className="text-secondary text-sm hover:underline self-start"
                  >
                    {activeProject === index ? "Show less" : "View details"}
                  </button>
                  
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <h4 className="font-semibold text-secondary mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {visibleProjects < projects.length && (
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mt-12"
            >
              <button 
                onClick={handleLoadMore}
                className="btn-outline flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Load More Projects
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;