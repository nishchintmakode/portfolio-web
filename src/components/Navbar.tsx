"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ui/ToogleButton";
import { Button } from "./ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="w-full max-w-6xl bg-background border p-2 rounded-xl shadow opacity-95">
      <div className="flex justify-between items-center">
        <div className=" text-lg font-bold border rounded-full p-1 shadow">
          <Link href="/">NM</Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <Link
              href="#about"
              className="nav-link cursor-default select-none items-center rounded-sm px-2 py-1.5 text-md outline-none bg-background hover:bg-accent hover:text-accent-foreground"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="#certifications"
              className="nav-link cursor-default select-none items-center rounded-sm px-2 py-1.5 text-md outline-none bg-background hover:bg-accent hover:text-accent-foreground"
              onClick={handleLinkClick}
            >
              Certifications
            </Link>
            <Link
              href="#projects"
              className="nav-link cursor-default select-none items-center rounded-sm px-2 py-1.5 text-md outline-none bg-background hover:bg-accent hover:text-accent-foreground"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </nav>
          <div className="relative md:hidden" ref={menuRef}>
            <Button
              className="shadow"
              variant="outline"
              size="icon"
              onClick={handleMenuToggle}
            >
              <Menu className="text-gray-600 dark:text-gray-400" />
            </Button>
            <div
              className={`absolute right-0 mt-2 w-40 px-1 py-1 bg-popover border rounded-md shadow-md transform-gpu transition-transform duration-200 ease-in-out ${
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              <a
                href="#about"
                className="relative flex cursor-default select-none items-center rounded-sm px-2.5 py-1.5 text-sm outline-none bg-background hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a
                href="#certifications"
                className="relative flex cursor-default select-none items-center rounded-sm px-2.5 py-1.5 text-sm outline-none bg-background hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                Certifications
              </a>
              <a
                href="#projects"
                className="relative flex cursor-default select-none items-center rounded-sm px-2.5 py-1.5 text-sm outline-none bg-background hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                Projects
              </a>
            </div>
          </div>
          <div className="rounded-md shadow">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
