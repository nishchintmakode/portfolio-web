import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FolderGit } from "lucide-react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Personality prediction using sentiment analysis",
    description:
      "Sentiment-based personality profiling, using CNN and LSTM models to predict Big Five traits.",
    github:
      "https://github.com/nishchintmakode/personality_prediction_with_sentiment_analysis",
  },
  {
    name: "Lung disease detection using CNN",
    description:
      "Deep learning model, based on convolutional neural networks (CNNs), to classify lung diseases from X-ray images.",
    github: "https://github.com/nishchintmakode/lung_disease_detection_cnn",
  },
  {
    name: "Speech Emotion Recognition using MLPClassifier",
    description:
      "Multilayer Perceptron (MLP) classification model to detect emotions from human speech.",
    github: "https://github.com/nishchintmakode/speech_emotion_recognition",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full mb-8">
      <Card className="rounded-lg border shadow">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <FolderGit className="mr-2" />
              Projects
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-center gap-4">
              <div>
                <div className="flex items-center font-medium">
                  {project.name}
                  <Link href={project.github}>
                    <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                  </Link>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="https://github.com/nishchintmakode">
            <Button>More on GitHub</Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Projects;
