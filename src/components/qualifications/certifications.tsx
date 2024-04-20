import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Badge } from "lucide-react";

const Certifications = () => {
  return (
    <div className="md:mt-2 md:w-1/1">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <Badge className="mr-2" />
              Certifications
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
    </div>
  );
};

export default Certifications;
