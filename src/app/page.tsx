import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import AboutSection from "@/components/About";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
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
    <main className="flex flex-col items-center min-h-screen p-4 bg-gray-50 sm:p-6">
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-4xl mt-8 space-y-4 md:space-y-8">
        <HeroSection />
        <AboutSection />
        <Qualifications />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
