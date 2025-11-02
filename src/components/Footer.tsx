import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";

const Projects = () => {
  return (
    <footer className="w-full max-w-6xl">
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">© 2025 Nishchint Makode</span>
        <div className="flex space-x-2">
        <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="mailto:nishchintsmakode@gmail.com">
                      <Button
                        className="rounded-xl shadow-sm"
                        variant="outline"
                        size="icon"
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="shadow-sm">
                    <p>Mail</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.linkedin.com/in/nishchintmakode/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="rounded-xl shadow-sm"
                        variant="outline"
                        size="icon"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="shadow-sm">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.github.com/nishchintmakode/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="rounded-xl shadow-sm"
                        variant="outline"
                        size="icon"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="shadow-sm">
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
      </div>
    </footer>
  );
};

export default Projects;
