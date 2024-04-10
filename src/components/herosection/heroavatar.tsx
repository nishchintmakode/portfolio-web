import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";

const Heroavatar = () => {
  return (
    <div>
      <div className="w-60 h-60 justify-center bg-gray-200 rounded-full" />
      <div className="flex justify-center space-x-2 mt-4">
        <div className="flex justify-center space-x-1">
          <Link
            href="NISHCHINT_MAKODE_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-20 rounded-full" variant="outline">
              CV
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/nishchintmakode/">
            <Button
              className="bg-gray-300 rounded-full"
              variant="outline"
              size="icon"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.github.com/in/nishchintmakode/">
            <Button
              className="bg-gray-300 rounded-full"
              variant="outline"
              size="icon"
            >
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:nishchintsmakode@gmail.com">
            <Button
              className="bg-gray-300 rounded-full"
              variant="outline"
              size="icon"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroavatar;
