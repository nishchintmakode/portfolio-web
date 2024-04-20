import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { FolderGit } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="w-full mb-8">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <FolderGit className="mr-2" />
              Projects
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="h-24 border border-gray-200 rounded-lg w-1/3" />
            <div className="h-24 border border-gray-200 rounded-lg w-1/3" />
            <div className="h-24 border border-gray-200 rounded-lg w-1/3" />
          </div>
        </CardContent>
        <CardFooter>
          <Link className="text-blue-600 hover:underline" href="#">
            GitHub
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Projects;
