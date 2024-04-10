import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="text-center md:text-left">
      <div className="w-full my-2">
        <Card className="mx-28">
          <CardHeader>
            <CardTitle className="pt-2 pl-2">Work</CardTitle>
          </CardHeader>

          <div className="w-full flex justify-center items-center">
            <Separator className="w-[95%]" />
          </div>

          <CardContent className="mt-4 flex flex-col justify-center items-center">
            <Card className="w-full flex flex-col items-center justify-center py-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center">
                  <div>
                    <Image
                      src="/uob_logo.png"
                      alt="uob-logo"
                      width={60}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div>
                      <div className="text-lg font-medium">
                        University of Birmingham
                      </div>
                      <div className="text-sm font-light">
                        M.Sc. in Advanced Computer Science
                      </div>
                    </div>
                    <div className="font-medium">Classification: Merit</div>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end pr-4">
                  <div className="text-lg font-medium">Sep 2022 – Sep 2023</div>
                  <div className="text-sm font-light">
                    Birmingham, United Kingdom
                  </div>
                </div>
              </div>
            </Card>

            <Card className="w-full flex flex-col items-center justify-center py-4 mt-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center gap-2 pl-4">
                  <div className="pr-2">
                    <Image
                      src="/uob_logo.png"
                      alt="uob-logo"
                      width={30}
                      height={20}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div>
                      <div className="text-lg font-medium">
                        Rashtrasant Tukdoji Maharaj Nagpur University
                      </div>
                      <div className="text-sm font-light">
                        B.E. in Computer Engineering
                      </div>
                    </div>
                    <div className="font-medium">
                      Classification: Distinction
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end pr-4">
                  <div className="text-lg font-medium">Aug 2018 – Jul 2022</div>
                  <div className="text-sm font-light">Belagavi, India</div>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
      <div className="w-full my-2">
        <Card className="mx-28">
          <CardHeader>
            <CardTitle className="pt-2 pl-2">Education</CardTitle>
          </CardHeader>

          <div className="w-full flex justify-center items-center">
            <Separator className="w-[95%]" />
          </div>

          <CardContent className="mt-4 flex flex-col justify-center items-center">
            <Card className="w-full flex flex-col items-center justify-center py-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center">
                  <div>
                    <Image
                      src="/uob_logo.png"
                      alt="uob-logo"
                      width={60}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div>
                      <div className="text-lg font-medium">
                        University of Birmingham
                      </div>
                      <div className="text-sm font-light">
                        Masters of Science in Advanced Computer Science
                      </div>
                    </div>
                    <div className="font-medium">Classification: Merit</div>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end pr-4">
                  <div className="text-lg font-medium">Sep 2022 – Sep 2023</div>
                  <div className="text-sm font-light">
                    Birmingham, United Kingdom
                  </div>
                </div>
              </div>
            </Card>

            <Card className="w-full flex flex-col items-center justify-center py-4 mt-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center gap-2 pl-4">
                  <div className="pr-2">
                    <Image
                      src="/uob_logo.png"
                      alt="uob-logo"
                      width={30}
                      height={20}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div>
                      <div className="text-lg font-medium">
                        Visvesvaraya Technological University
                      </div>
                      <div className="text-sm font-light">
                        Bachelor of Technology in Computer Science and
                        Engineering
                      </div>
                    </div>
                    <div className="font-medium">
                      Classification: Distinction
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end pr-4">
                  <div className="text-lg font-medium">Aug 2018 – Jul 2022</div>
                  <div className="text-sm font-light">Belagavi, India</div>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
