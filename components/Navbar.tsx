"use client";
import Link from 'next/link';
import { Button } from './ui/button';
// import { Button } from './ClientButton';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-white">Reedham</Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
