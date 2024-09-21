"use client";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-purple-400">LinkedIn</a>
            <a href="#" className="hover:text-purple-400">GitHub</a>
            <a href="#" className="hover:text-purple-400">Twitter</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  