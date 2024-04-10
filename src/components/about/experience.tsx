import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-4 mb-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Work</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-10 bg-gray-200 rounded w-full" />
            <div className="h-10 bg-gray-200 rounded w-full" />
            <div className="h-10 bg-gray-200 rounded w-full" />
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
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-10 bg-gray-200 rounded w-full" />
            <div className="h-10 bg-gray-200 rounded w-full" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;
