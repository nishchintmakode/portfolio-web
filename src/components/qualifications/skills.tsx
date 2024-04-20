import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
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
        <CardContent>
          <div className="grid grid-cols-4 gap-2">
            <div className="h-8 bg-gray-200 text-center rounded col-span-1">
              Java
            </div>
            <div className="h-8 bg-gray-200 rounded col-span-2" />
            <div className="h-8 bg-gray-200 rounded col-span-1" />
            <div className="h-8 bg-gray-200 rounded col-span-1" />
            <div className="h-8 bg-gray-200 rounded col-span-1" />
            <div className="h-8 bg-gray-200 rounded col-span-2" />
            <div className="h-8 bg-gray-200 rounded col-span-1" />
            <div className="h-8 bg-gray-200 rounded col-span-1" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
