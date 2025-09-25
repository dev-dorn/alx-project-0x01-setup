import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">© 2024 ALX Project. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;