import Image from "next/image";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Experience from "./Experience";
import ResumeCTA from "./Resume";
import Contact from "./Contact";


export default function Home() {
  return (
    <div>
        <main className="min-h-screen bg-[#f8f8f8] pb-10">
          <NavBar/>
          <Hero/>
          <Projects/>
          <Experience/>

          <Contact/>
        </main>
    </div>
  );
}
