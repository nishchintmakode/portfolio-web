"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ui/ToogleButton";
import { Button } from "./ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
];

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
    <header className="w-full max-w-6xl bg-background p-0 opacity-100">
      <div className="flex justify-between items-center">
      <Link href="/">
        <div className="text-lg border-2 border-black-900 rounded-full shadow-lg font-bold p-2 hover:bg-accent hover:text-accent-foreground">
          NM
        </div>
      </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-md outline-none bg-background hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="relative md:hidden" ref={menuRef}>
            <Button
              className="rounded-lg shadow-sm"
              variant="outline"
              size="icon"
              onClick={handleMenuToggle}
            >
              <Menu className="text-black dark:text-white" />
            </Button>
            <div
              className={`absolute right-0 mt-2 w-40 px-1 py-1 bg-popover border rounded-md shadow-md transform-gpu transition-transform duration-200 ease-in-out ${
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative flex cursor-pointer select-none items-center rounded-sm px-2.5 py-1.5 text-sm outline-none bg-background hover:bg-accent hover:text-accent-foreground"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="shadow-sm">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
