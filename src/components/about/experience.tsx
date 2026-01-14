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
import { Button } from "../ui/button";

const workExperiences = [
  {
    title: "Assistant Professor",
    company: "Nagpur Institute of Technology",
    dateRange: "Jun '25 - Present",
    logo: "/nit.png",
    logoAlt: "NIT",
  },
  {
    title: "IT AV Assistant",
    company: "University of Birmingham",
    dateRange: "Aug '23 - Jan '24",
    logo: "/uob.jpg",
    logoAlt: "UOB",
  },
  {
    title: "Project Intern",
    company: "Agile Connects Pvt. Ltd.",
    dateRange: "Aug '21 - Feb '22",
    logo: "/agile.jpg",
    logoAlt: "AGI",
  },
];

const educationExperiences = [
  {
    title: "M.Sc. (Advanced Computer Science)",
    institution: "University of Birmingham",
    date: "Sep '23",
    logo: "/uob.jpg",
    logoAlt: "UOB",
  },
  {
    title: "B.E. (Computer Engineering)",
    institution: "R.T.M. Nagpur University",
    date: "Jun '22",
    logo: "/rtmnu.jpg",
    logoAlt: "NU",
  },
];

const Experience = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4">
      <Card className="w-full rounded-lg border shadow-sm">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <Briefcase className="mr-2" />
              <h2 className="text-xl">Work</h2>
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {workExperiences.map((experience, index) => (
              <div key={index} className="flex items-center p-1 gap-4">
                <Avatar className="border shadow-md">
                  <AvatarImage src={experience.logo} alt={experience.logoAlt} />
                  <AvatarFallback>{experience.logoAlt}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">{experience.title}</div>
                  <div className="flex justify-between items-center">
                    <span>{experience.company}</span>
                    <div className="flex items-center gap-1">
                      <span>{experience.dateRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="w-full rounded-lg border shadow-sm">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <GraduationCap className="mr-2" />
              <h2 className="text-xl">Education</h2>
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {educationExperiences.map((education, index) => (
              <div key={index} className="flex items-center p-1 gap-4">
                <Avatar className="shadow-md">
                  <AvatarImage src={education.logo} alt={education.logoAlt} />
                  <AvatarFallback>{education.logoAlt}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">{education.title}</div>
                  <div className="flex justify-between items-center">
                    <span>{education.institution}</span>
                    <div className="flex items-center gap-1">
                      <span>{education.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
