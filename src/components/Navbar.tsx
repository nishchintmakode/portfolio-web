import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="text-gray-600 dark:text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link className="nav-link" href="#about">
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="nav-link" href="#certifications">
                    Certifications
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="nav-link" href="#projects">
                    Projects
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
