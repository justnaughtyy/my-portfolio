import Image from "next/image";
import Navbar from "@/components/Navbar/page";
import { Circle, Languages } from 'lucide-react';
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import MySkill from "@/components/MySkill/page";
import PersonalProjects from "@/components/PersonalProjects/page"
import Contact from "@/components/Contact/page"
import Footer from "@/components/Footer/page"

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <div id="aboutme" className="relative pt-32 pb-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">

        
        <div data-aos="fade-right" className="left w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          <div className="flex items-center text-white">
            <Circle color="#FDC700" size={16} className="animate-pulse" />
            <p className="ml-2 text-xl md:text-base">Available for Internship</p>
          </div>

          <div className="text-white mt-6 w-full">
            <div className="text-4xl md:text-8xl lg:text-[100px] leading-tight font-bold">
              <HeroSection />
            </div>
            <p className="text-base md:text-xl md:mx-auto lg:mx-0 text-gray-300 mt-6 max-w-2xl leading-relaxed">
              A 4th-year Information Technology student at Pibulsongkram Rajabhat University. Interested and committed to Frontend web development (with a foundation in Next.js, React, and Tailwind CSS). Responsible, with good communication skills and the ability to work well with a team. Ready to learn new technologies to develop myself and the organization.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <Languages color="#fff" />
            <div className="flex bg-yellow-500 py-2 px-4 rounded font-bold hover:bg-yellow-400 text-sm md:text-base transition duration-300">
              THAI (Native)
            </div>
            <div className="flex bg-purple-500 py-2 px-4 rounded font-bold hover:bg-purple-400 text-sm md:text-base transition duration-300">
              ENGLISH (BASIC)
            </div>
          </div>
        </div>

        
        <div data-aos="fade-left" className="right w-full lg:w-1/2 flex justify-center lg:justify-end pointer-events-none">
          <Image
            src="/profilepic.jpg"
            width={450}
            height={450}
            alt="Picture"
            className="rounded-2xl w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto object-cover transition duration-500 hover:-translate-y-2 shadow-xl pointer-events-auto"
          />
        </div>

      </div>

      <MySkill/>
      <PersonalProjects />
      <Contact />
      <Footer />
    </main>
  );
}