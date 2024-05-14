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
import Image from "next/image";

const Experience = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-4 mb-8">
      <Card className="w-full rounded-lg border shadow">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <Briefcase className="mr-2" />
              Work
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center rounded-md border p-1 gap-4">
              <Avatar>
                <AvatarImage src="/uob.jpg" alt="uob_logo" />
                <AvatarFallback>UOB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">IT AV Assistant</div>
                <div className="flex justify-between items-center">
                  <span>University of Birmingham</span>
                  <div className="flex items-center gap-1">
                    <span>Aug &#39;23 - Jan &#39;24</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center rounded-md border p-1 gap-4">
              <Avatar>
                <AvatarImage src="/revature.jpg" alt="revature_logo" />
                <AvatarFallback>REV</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Software Developer</div>
                <div className="flex justify-between items-center">
                  <span>Revature</span>
                  <div className="flex items-center gap-1">
                    <span>Mar &#39;22 - Nov &#39;22</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center rounded-md border p-1 gap-4">
              <Avatar>
                <AvatarImage src="/agile.jpg" alt="agile_logo" />
                <AvatarFallback>AGI</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Project Intern</div>
                <div className="flex justify-between items-center">
                  <span>Agile Connects Pvt. Ltd.</span>
                  <div className="flex items-center gap-1">
                    <span>Aug &#39;21 - Feb &#39;22</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center rounded-md border p-1 gap-4">
              <Avatar>
                <AvatarImage src="/credy.jpg" alt="agile_logo" />
                <AvatarFallback>CRE</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Python Development Intern</div>
                <div className="flex justify-between items-center">
                  <span>Credy</span>
                  <div className="flex items-center gap-1">
                    <span>May &#39;20 - Jan &#39;21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="https://www.linkedin.com/in/nishchintmakode">
            <Button>More on LinkedIn</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="w-full rounded-lg border shadow">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <GraduationCap className="mr-2" />
              Education
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center rounded-md border p-1 gap-4">
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
                    <span>Sep &#39;23</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center rounded-md border p-1 gap-4">
              <Avatar>
                <AvatarImage src="/rtmnu.jpg" alt="rtmnu_logo" />
                <AvatarFallback>NU</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">B.E. (Computer Engineering)</div>
                <div className="flex justify-between items-center">
                  <span>R.T.M. Nagpur University</span>
                  <div className="flex items-center gap-1">
                    <span>Jun &#39;22</span>
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
