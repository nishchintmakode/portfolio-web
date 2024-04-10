import React from "react";
import Experience from "./about/experience";
import Profile from "./about/profile";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              About me
            </h1>
            <p>
              Hello, I&#39;m Nishchint, a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" results-driven"}</span> software
              engineer based in Birmingham, UK.
            </p>
            <br />
            <p>
              Continuously seeking new experiences, I thrive on keeping myself
              engaged and learning. I firmly believe in the principle of
              perpetual growth. Fueled by my passion for technology, I
              constantly strive to push the limits of what&#39;s possible.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold">never stop growing</span> and
              that&#39;s what I strive to do, I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
