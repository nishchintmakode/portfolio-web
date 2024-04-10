import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
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
      <h1 className="text-2xl">Hello, World</h1>
      <Navbar />
      <HeroSection />
    </main>
  );
}
