import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { UserRound } from "lucide-react";
import { Separator } from "../ui/separator";

const Profile = () => {
  return (
    <div>
      <Card className="w-full rounded-lg border shadow-sm">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <UserRound className="mr-2" />
              <h2 className="text-xl">About me</h2>
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-justify">
            Hello, I&#39;m Nishchint, a Software Engineer with an <span className="font-bold">MSc in Advanced Computer Science</span> and an expertise in modern cloud technologies.{" "}
            <span className="font-bold">{" GCP-certified "}</span>specialist, skilled in
            <span className="font-bold">{" CI/CD pipelines"}</span>,  
            <span className="font-bold">{" cloud infrastructure management"}</span>,  
            <span className="font-bold">{" containerization"}</span>, and
            <span className="font-bold">{" automation"}</span>, with 
            proficiency in leveraging GCP services to design and deliver scalable, cost-efficient, and highly available cloud-based solutions.
          </p>
          <br />
          <p className="text-justify">
            I&#39;m a passionate computer science enthusiast with a strong interest in Cloud Technologies, DevOps, and AI/ML. 
            Currently, I&#39;m building &#39;gofs&#39; (Go file-search), a CLI utility tool for efficient local file searching, while also learning Go and Rust.
          </p>
          <br />
          <p className="text-justify">
            I am always open to new opportunities and collaborations that align with my vision of contributing to innovative and meaningful projects. 
            Connect with me using my links provided to discuss potential collaborations or to learn more about my work.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
