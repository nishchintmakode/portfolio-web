import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <footer className="w-full max-w-4xl">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">© 2024 Nischint Makode</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default Projects;
