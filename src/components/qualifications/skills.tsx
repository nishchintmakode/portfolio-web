import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { SquareCode } from "lucide-react";

const Skills = () => {
  return (
    <div className="md:mt-2 md:w-1/1">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <SquareCode className="mr-2" />
              Skills
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-2">
          <Badge className="flex items-center gap-2">
            <div className="font-medium">JavaScript</div>
          </Badge>
          <Badge className="flex items-center gap-2">
            <div className="font-medium">React</div>
          </Badge>
          <Badge className="flex items-center gap-2">
            <div className="font-medium">Node.js</div>
          </Badge>
          <Badge className="flex items-center gap-2">
            <div className="font-medium">TypeScript</div>
          </Badge>
          <Badge className="flex items-center gap-2">
            <div className="font-medium">SQL</div>
          </Badge>
          <Badge className="flex items-center gap-2">
            <div className="font-medium">Git</div>
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
