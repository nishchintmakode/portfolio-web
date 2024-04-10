import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import AboutSection from "@/components/About";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
