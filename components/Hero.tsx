"use client";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
// import { Button } from './ClientButton';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">AI Engineer & Innovator</h1>
        <p className="text-xl mb-8">Crafting intelligent solutions for tomorrow's challenges</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Explore My Work
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
