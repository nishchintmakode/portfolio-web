import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ui/ToogleButton";

const Navbar = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/nishchintmakode.png" />
        <AvatarFallback>NM</AvatarFallback>
      </Avatar>
      About Certifications Projects
      <ModeToggle />
    </div>
  );
};

export default Navbar;
