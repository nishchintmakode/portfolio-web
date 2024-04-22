import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { FolderGit } from "lucide-react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="w-full mb-8">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <FolderGit className="mr-2" />
              Projects
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <div className="font-medium">
                Personality prediction using sentiment analysis
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Sentiment-based personality profiling, using CNN and LSTM models
                to predict Big Five traits.
              </div>
              <div className="flex items-center gap-1 mt-1">
                <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="font-medium">
                Lung disease detection using CNN
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Deep learning model, based on convolutional neural networks
                (CNNs), to classify lung diseases from X-ray images.
              </div>
              <div className="flex items-center gap-1 mt-1">
                <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="font-medium">
                Speech Emotion Recognition using MLPClassifier
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Multilayer Perceptron (MLP) classification model to detect
                emotions from human speech.
              </div>
              <div className="flex items-center gap-1 mt-1">
                <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link className="text-blue-600 hover:underline" href="#">
            GitHub
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Projects;
