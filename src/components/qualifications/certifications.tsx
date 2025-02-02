import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { BadgeCheck } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ExternalLink } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const certifications = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    dateRange: "Mar '24 - Mar '27",
    link: "https://www.credly.com/badges/a03f0ac2-2f43-491a-a1fc-b888b395f991",
    logo: "/google_cloud_logo.jpg",
    logoAlt: "GCP",
  },
  {
    title: "Cloud Digital Leader",
    issuer: "Google Cloud",
    dateRange: "Mar '24 - Mar '27",
    link: "https://www.credly.com/badges/798713ee-7156-4401-b8d4-a537274821d5",
    logo: "/google_cloud_logo.jpg",
    logoAlt: "GCP",
  },
  {
    title: "Full Stack Software Developer",
    issuer: "IBM",
    dateRange: "Apr '24",
    link: "https://www.credly.com/badges/6e18d361-eac9-4469-9bd8-e5fe79818a37",
    logo: "/ibm_logo.jpg",
    logoAlt: "IBM",
  },
];

const Certifications = () => {
  return (
    <div className="md:mt-2 md:w-1/1">
      <Card className="w-full rounded-lg border shadow-sm">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <BadgeCheck className="mr-2" />
              <h2 className="text-xl">Certifications</h2>
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {certifications.map((certification, index) => (
              <div key={index}>
                <Link href={certification.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center p-2 gap-4 outline-none rounded-xl bg-background hover:bg-accent hover:text-accent-foreground">
                    <Avatar className="border shadow-md">
                      <AvatarImage
                        src={certification.logo}
                        alt={certification.logoAlt}
                      />
                      <AvatarFallback>{certification.logoAlt}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center font-medium">
                        {certification.title}
                        <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>{certification.issuer}</span>
                        <div className="flex items-center gap-1">
                          <span>{certification.dateRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certifications;
