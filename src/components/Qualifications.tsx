import React from "react";
import Certifications from "./qualifications/certifications";
import Skills from "./qualifications/skills";

const Qualifications = () => {
  return (
    <section
      id="certifications"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
    >
      <Certifications />
      <Skills />
    </section>
  );
};

export default Qualifications;
