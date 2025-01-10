import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="w-full mb-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 space-y-4 mb-4 md:mb-0">
          <div className="md:mt-2 md:w-1/2">
            <div className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
              Hi, I&#39;m Nishchint!
            </div>
            <div className="text-lg mt-4 mb-6 md:text-2xl">
              I&#39;m a <span className="font-bold">Software Engineer </span>
              based in Birmingham, UK. Working towards creating software that
              makes life easier and more meaningful.
            </div>
          </div>
        </div>
        <div>
          <div className="w-60 h-60 rounded-full flex items-center justify-center mx-auto">
            <img alt="Profile" className="rounded-full" src="/pfp.svg" />
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="flex justify-center space-x-2">
              <Link
                href="NISHCHINT_MAKODE_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-15 shadow">CV</Button>
              </Link>
              <Link href="mailto:nishchintsmakode@gmail.com">
                <Button
                  className="rounded-full shadow"
                  variant="outline"
                  size="icon"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/nishchintmakode/">
                <Button
                  className="rounded-full shadow"
                  variant="outline"
                  size="icon"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.github.com/nishchintmakode/">
                <Button
                  className="rounded-full shadow"
                  variant="outline"
                  size="icon"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
