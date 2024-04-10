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
        <Heroavatar />
      </div>
    </section>
  );
};

export default HeroSection;
