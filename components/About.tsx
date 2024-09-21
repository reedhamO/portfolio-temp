"use client";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-300"
        >
          <p className="mb-4">
            As an AI Engineer, I'm passionate about pushing the boundaries of what's possible with artificial intelligence. With a strong background in machine learning, deep learning, and software engineering, I strive to create innovative solutions that make a real impact.
          </p>
          <p>
            My expertise spans across various domains of AI, including natural language processing, computer vision, and reinforcement learning. I'm constantly exploring new technologies and methodologies to stay at the forefront of this rapidly evolving field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
