import React from "react";
import Herointro from "./herosection/herointro";
import Heroavatar from "./herosection/heroavatar";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <Herointro />
        <Heroavatar />
      </div>
    </section>
  );
};

export default HeroSection;
