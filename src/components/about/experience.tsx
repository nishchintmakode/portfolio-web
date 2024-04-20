import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Briefcase } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-4 mb-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <Briefcase className="mr-2" />
              Work
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-10 border border-gray-200 rounded-lg w-full" />
            <div className="h-10 border border-gray-200 rounded-lg w-full" />
            <div className="h-10 border border-gray-200 rounded-lg w-full" />
          </div>
        </CardContent>
        <CardFooter>
          <Link className="text-blue-600 hover:underline" href="#">
            LinkedIn
          </Link>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <GraduationCap className="mr-2" />
              Education
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-10 border border-gray-200 rounded-lg w-full" />
            <div className="h-10 border border-gray-200 rounded-lg w-full" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;
