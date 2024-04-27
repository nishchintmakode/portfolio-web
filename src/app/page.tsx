import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import AboutSection from "@/components/About";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-6">
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-5xl mt-8 space-y-4 md:space-y-8">
        <HeroSection />
        <AboutSection />
        <Qualifications />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
