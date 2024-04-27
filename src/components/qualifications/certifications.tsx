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

const Certifications = () => {
  return (
    <div className="md:mt-2 md:w-1/1">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <BadgeCheck className="mr-2" />
              Certifications
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/google_cloud_logo.jpg" alt="gcp_logo" />
                <AvatarFallback>GCP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center font-medium">
                  Associate Cloud Engineer
                  <Link
                    href={
                      "https://www.credly.com/badges/a03f0ac2-2f43-491a-a1fc-b888b395f991"
                    }
                  >
                    <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <span>Google Cloud</span>
                  <div className="flex items-center gap-1">
                    <span>Mar &#39;24 - Mar &#39;27</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/google_cloud_logo.jpg" alt="gcp_logo" />
                <AvatarFallback>GCP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center font-medium">
                  Cloud Digital Leader
                  <Link
                    href={
                      "https://www.credly.com/badges/798713ee-7156-4401-b8d4-a537274821d5"
                    }
                  >
                    <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <span>Google Cloud</span>
                  <div className="flex items-center gap-1">
                    <span>Mar &#39;24 - Mar &#39;27</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/ibm_logo.jpg" alt="ibm_logo" />
                <AvatarFallback>IBM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center font-medium">
                  Full Stack Software Developer
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span>IBM</span>
                  <div className="flex items-center gap-1">
                    <span>Apr &#39;24</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/ibm_logo.jpg" alt="ibm_logo" />
                <AvatarFallback>IBM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center font-medium">
                  DevOps and Software Engineering
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span>IBM</span>
                  <div className="flex items-center gap-1">
                    <span>May &#39;24</span>
                  </div>
                </div>
              </div>
            </div>
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
