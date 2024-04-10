import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

const Skills = () => {
  return (
    <div className="md:mt-2 md:w-1/2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 bg-gray-200 rounded col-span-1" />
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
