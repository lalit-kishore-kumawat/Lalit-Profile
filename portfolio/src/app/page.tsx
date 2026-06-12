import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import StudentHubFeature from "@/components/ui/StudentHubFeature";
import Skills from "@/components/ui/Skills";
import Education from "@/components/ui/Education";
import ContactFooter from "@/components/ui/ContactFooter";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <StudentHubFeature />
      <Skills />
      <Education />
      <ContactFooter />
    </main>
  );
}
