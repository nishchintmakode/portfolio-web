import React from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "NISHCHINT_MAKODE_CV.pdf",
    label: "CV",
    tooltip: "View CV",
    Icon: null,
    external: true,
  },
  {
    href: "mailto:nishchintsmakode@gmail.com",
    label: "Mail",
    tooltip: "Mail",
    Icon: Mail,
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/nishchintmakode/",
    label: "LinkedIn",
    tooltip: "LinkedIn",
    Icon: Linkedin,
    external: true,
  },
  {
    href: "https://www.github.com/nishchintmakode/",
    label: "GitHub",
    tooltip: "GitHub",
    Icon: Github,
    external: true,
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="w-full mb-8">
      <div className="flex flex-col md:flex-row md:gap-8 md:items-center md:justify-between space-y-4">
        <div className="md:mt-2 md:w-2/3 mb-4 space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl">
            Hi, I&#39;m Nishchint!
          </h1>
          <div className="text-lg md:text-2xl">
            I&#39;m a <span className="font-bold">GCP-certified software engineer</span> with over a year of experience in Cloud-native development and Cloud Technologies.
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-60 h-60 rounded-full overflow-hidden mx-auto">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              src="/pfp.svg"
            />
          </div>

          <TooltipProvider>
            <div className="flex justify-center gap-2">
              {socialLinks.map(({ href, label, tooltip, Icon, external }) => (
                <Tooltip key={tooltip}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <Button
                        variant={Icon ? "outline" : "default"}
                        size={Icon ? "icon" : "default"}
                        className="rounded-xl shadow-sm"
                      >
                        {Icon ? <Icon className="h-5 w-5" /> : label}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;