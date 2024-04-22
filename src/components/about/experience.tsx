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
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
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
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/uob.jpg" alt="uob_logo" />
                <AvatarFallback>UOB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">
                  M.Sc. (Advanced Computer Science)
                </div>
                <div className="flex justify-between items-center">
                  <span>University of Birmingham</span>
                  <div className="flex items-center gap-1">
                    <span>Sep '23</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/rtmnu.jpg" alt="rtmnu_logo" />
                <AvatarFallback>NU</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">B.E. (Computer Engineering)</div>
                <div className="flex justify-between items-center">
                  <span>R.T.M. Nagpur University</span>
                  <div className="flex items-center gap-1">
                    <span>Jun '22</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;
