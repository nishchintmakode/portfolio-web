import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/ToogleButton";

const Navbar = () => {
  return (
    <header className="w-full max-w-4xl">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">NM</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link className="text-gray-600 hover:text-gray-900" href="#about">
            About
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900"
            href="#certifications"
          >
            Certifications
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#projects">
            Projects
          </Link>
        </nav>
        <div className="md:hidden text-gray-600" />
        <div className="hidden md:block text-gray-600" />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
