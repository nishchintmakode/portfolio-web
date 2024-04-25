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
            <Badge className="flex items-center gap-2">
              <div className="font-medium">Python</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">Java</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">C</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">C++</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">HTML</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">CSS</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">JavaScript</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">TypeScript</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">SQL</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">PHP</div>
            </Badge>
            <Badge className="flex items-center gap-2">
              <div className="font-medium">Shell scripting</div>
            </Badge>
          </div>
          <div className="flex flex-wrap flex-row justify-center gap-1 md:justify-start">
            <Badge variant="secondary" className="flex items-center gap-2">
              <div className="font-medium">VS Code</div>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <div className="font-medium">Git Version Control</div>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <div className="font-medium">Postman</div>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <div className="font-medium">Kubernetes</div>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <div className="font-medium">Docker</div>
            </Badge>
          </div>
          <div className="flex flex-wrap flex-row justify-center gap-1 md:justify-start">
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Linux</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">GitHub</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Flutter</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">React</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Node.js</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Express.js</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Next.js</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">RESTful API</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">GraphQL</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">MongoDB</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Firebase</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Spring Boot</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Flask</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Django</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">MySQL</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">PostgreSQL</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Neural networks</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">TensorFlow</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Pandas</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">Numpy</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">scikit-learn</div>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <div className="font-medium">OpenCV</div>
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
