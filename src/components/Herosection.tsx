import React from "react";
import { Button } from "./ui/button";
import Herointro from "./herosection/herointro";
import Heroavatar from "./herosection/heroavatar";

const HeroSection = () => {
  return (
    <section id="home" className="w-full mb-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 space-y-4 mb-4 md:mb-0">
          <Herointro />
        </div>
        <div className="w-48 h-48 bg-gray-200 rounded-full" />
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <Button className="w-20" variant="outline">
          CV
        </Button>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
