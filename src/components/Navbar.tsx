import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@nextui-org/popover";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ui/ToogleButton";

const Navbar = () => {
  return (
    <header className="w-full max-w-5xl">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">NM</Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <Link className="nav-link" href="#about">
              About
            </Link>
            <Link className="nav-link" href="#certifications">
              Certifications
            </Link>
            <Link className="nav-link" href="#projects">
              Projects
            </Link>
          </nav>
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger>
                <Button variant="outline" size="icon">
                  <Menu className="text-gray-600 dark:text-gray-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4 space-y-2 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                <div className="flex flex-col space-y-2">
                  <Link className="nav-link" href="#about">
                    About
                  </Link>
                  <Link className="nav-link" href="#certifications">
                    Certifications
                  </Link>
                  <Link className="nav-link" href="#projects">
                    Projects
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
