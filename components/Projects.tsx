"use client";
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Developed a sophisticated chatbot using state-of-the-art NLP techniques.",
    tech: ["Python", "TensorFlow", "BERT", "Flask"],
  },
  {
    title: "Computer Vision for Autonomous Vehicles",
    description: "Implemented object detection and tracking algorithms for self-driving cars.",
    tech: ["Python", "PyTorch", "OpenCV", "YOLO"],
  },
  {
    title: "Predictive Maintenance System",
    description: "Created a machine learning model to predict equipment failures in industrial settings.",
    tech: ["Python", "Scikit-learn", "Pandas", "Docker"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
