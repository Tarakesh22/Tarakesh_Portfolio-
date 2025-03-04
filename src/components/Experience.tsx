import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const experiences = [
    {
      title: "Junior .NET Developer (Apprenticeship)",
      company: "SilverXis Inc.",
      period: "Jan 2024 - Present · 1 yr 3 mos",
      location: "On-site",
      description: "I am a Junior .NET Developer with hands-on experience in designing, developing, and maintaining .NET applications. I specialize in C#, ASP.NET, and SQL, with a focus on clean code, problem-solving, and collaboration. During my time at SilverXis Inc., I contributed to various projects by developing robust applications, optimizing databases, and enhancing user interfaces. I’m passionate about continuously learning new technologies and staying up to date with industry trends.",
      skills: ["Back-End Web Development", "Microsoft SQL Server", "C#", "ASP.NET Core", "Entity Framework"]
    },
    {
      title: "Internship Trainee",
      company: "Naresh i Technologies",
      period: "Jul 2023 - Dec 2023 · 6 mos",
      location: "Hyderabad, Telangana, India · On-site",
      description: "Trained in full-stack development with a focus on .NET technologies. Participated in hands-on projects and gained practical experience in the software development lifecycle.",
      skills: ["Back-End Web Development", "Software Requirements", "C#", "ASP.NET MVC"]
    },
    {
      title: "Subject Matter Expert",
      company: "Chegg Inc.",
      period: "Jan 2023 - Aug 2023 · 8 mos",
      location: "Remote",
      description: "Provided expert assistance and solutions for technical questions related to programming and computer science concepts.",
      skills: ["Problem Solving", "Technical Writing", "Programming"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="mt-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-card p-6 ml-4 mb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-secondary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-gray-300">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
