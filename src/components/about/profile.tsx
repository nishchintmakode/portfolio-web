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
            <span className="font-bold">{"highly ambitious"}</span>,
            <span className="font-bold">{" self-motivated"}</span>, and
            <span className="font-bold">{" results-driven"}</span> software engineer
            based in Birmingham, UK.
          </p>
          <br />
          <p className="text-justify">
            Continuously seeking new experiences, I thrive on keeping myself engaged
            and learning. I firmly believe in the principle of perpetual growth.
            Fueled by my passion for technology, I constantly strive to push the
            limits of what&#39;s possible.
          </p>
          <br />
          <p className="text-justify">
            I believe that you should{" "}
            <span className="font-bold">never stop growing</span> and that&#39;s
            what I strive to do, I have a passion for technology and a desire to
            always push the limits of what is possible. I am excited to see where my
            career takes me and am always open to new opportunities. 🙂
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
