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
              About me
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-justify">
            Hello, I&#39;m Nishchint, a{" "}
            <span className="font-bold">{"results-driven"}</span>,
            <span className="font-bold">{" highly ambitious"}</span>, and
            <span className="font-bold">{" self-motivated"}</span>, 
            software engineer based in Birmingham, UK. With an MSc in Advanced Computer Science and expertise 
            in Python, Java, and full-stack development, I am passionate about leveraging technology to create impactful solutions.
          </p>
          <br />
          <p className="text-justify">
            I&#39;m a passionate computer science enthusiast with a strong interest in Artificial Intelligence, Machine Learning, and DevOps. 
            Currently, I&#39;m building &#39;gofs&#39; (Go file-search), a CLI utility tool for efficient local file searching, while also learning Go and Rust.
          </p>
          <br />
          <p className="text-justify">
          My technical skills include proficiency in modern frameworks like React and Django, as well as cloud computing and DevOps tools such as Kubernetes and Docker. 
          I am committed to continuous learning and personal growth, embracing new challenges as opportunities for development.
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
