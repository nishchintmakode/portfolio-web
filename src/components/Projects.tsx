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
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center font-medium">
                Personality prediction using sentiment analysis
                <Link
                  href={
                    "https://github.com/nishchintmakode/personality_prediction_with_sentiment_analysis"
                  }
                >
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Sentiment-based personality profiling, using CNN and LSTM models
                to predict Big Five traits.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center font-medium">
                Lung disease detection using CNN
                <Link
                  href={
                    "https://github.com/nishchintmakode/lung_disease_detection_cnn"
                  }
                >
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Deep learning model, based on convolutional neural networks
                (CNNs), to classify lung diseases from X-ray images.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center font-medium">
                Speech Emotion Recognition using MLPClassifier
                <Link
                  href={
                    "https://github.com/nishchintmakode/speech_emotion_recognition"
                  }
                >
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Multilayer Perceptron (MLP) classification model to detect
                emotions from human speech.
              </div>
            </div>
          </div>
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
