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
  {
    name: "Go File Search (gofs)",
    description:
      "CLI utility tool for efficient local file searching, built using Go.",
    github: "https://github.com/cope-ai/gofs",
  },
  {
    name: "Full Stack Notes App",
    description:
      "Full stack Notes App with user authentication, CRUD functionalities, pinning, and efficient search capabilities for personal productivity.",
    github: "https://github.com/nishchintmakode/notes",
  },
  {
    name: "HowNetWorks",
    description:
      "A dynamic, interactive web application designed to educate and explore how networks operate.",
    github: "https://github.com/cope-ai/hownetworks",
  },
  {
    name: "Book Review Application",
    description:
      "Secure book review app using JWT and session-level authentication, enabling users to access book info and manage reviews.",
    github: "https://github.com/nishchintmakode/expressBookReviews",
  },
  {
    name: "Budget Allocation Application",
    description:
      "Budgeting application containing editable budget fields with validation to ensure limits and prevent values below spent amounts.",
    github: "https://github.com/nishchintmakode/ejtos-react_budget_app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full mb-8">
      <Card className="rounded-lg border shadow-sm">
        <CardHeader>
          <CardTitle className="space-y-2">
            <div className="flex items-center">
              <FolderGit className="mr-2" />
              <h2 className="text-xl">Projects</h2>
            </div>
            <div className="flex w-full justify-center items-center">
              <Separator />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index}>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center p-2 outline-none rounded-xl bg-background hover:bg-accent hover:text-accent-foreground">
                  <div>
                    <div className="flex items-center font-medium">
                      {project.name}
                      <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link 
            href="https://github.com/nishchintmakode?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-xl border shadow-sm" variant="secondary">More</Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Projects;
