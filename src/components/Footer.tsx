import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";

const Projects = () => {
  return (
    <footer className="w-full max-w-6xl">
      <Separator className="my-4" />
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">© 2024 Nishchint Makode</span>
        <div className="flex space-x-1">
          <Link href="mailto:nishchintsmakode@gmail.com">
            <Button className="rounded-full" variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/nishchintmakode/">
            <Button className="rounded-full" variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.github.com/nishchintmakode/">
            <Button className="rounded-full" variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Projects;
