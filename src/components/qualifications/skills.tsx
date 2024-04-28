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
import { Code } from "lucide-react";

const skills1 = [
  "Python",
  "Java",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "PHP",
  "Shell scripting",
];

const skills2 = [
  "VS Code",
  "Git Version Control",
  "Postman",
  "Kubernetes",
  "Docker",
];

const skills3 = [
  "Linux",
  "GitHub",
  "Flutter",
  "React",
  "Node.js",
  "Express.js",
  "Next.js",
  "RESTful API",
  "GraphQL",
  "MongoDB",
  "Firebase",
  "Spring Boot",
  "Flask",
  "Django",
  "MySQL",
  "PostgreSQL",
  "Neural networks",
  "TensorFlow",
  "Pandas",
  "Numpy",
  "scikit-learn",
  "OpenCV",
];

const Skills = () => {
  return (
    <div className="md:mt-2 md:w-1/1">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <Code className="mr-2" />
              Skills
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap flex-row justify-center gap-2 md:justify-start">
          <div className="flex flex-wrap flex-row justify-center gap-1 md:justify-start">
            {skills1.map((skill, index) => (
              <Badge
                key={index}
                className="flex items-center gap-2"
                variant="default"
              >
                <div className="font-medium">{skill}</div>
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap flex-row justify-center gap-1 md:justify-start">
            {skills2.map((skill, index) => (
              <Badge
                key={index}
                className="flex items-center gap-2"
                variant="secondary"
              >
                <div className="font-medium">{skill}</div>
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap flex-row justify-center gap-1 md:justify-start">
            {skills3.map((skill, index) => (
              <Badge
                key={index}
                className="flex items-center gap-2"
                variant="outline"
              >
                <div className="font-medium">{skill}</div>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
