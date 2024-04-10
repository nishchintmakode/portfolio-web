import React from "react";
import Experience from "./about/experience";
import Profile from "./about/profile";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
    >
      <Profile />
      <Experience />
    </section>
  );
};

export default AboutSection;
