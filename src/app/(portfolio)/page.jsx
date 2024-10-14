// import Image from "next/image";

import AboutSection from "../../section/AboutSection";
import ExpertiesSection from "../../section/ExpertiesSection";
import HeroSection from "../../section/HeroSection";
import LetsGetConnectSection from "../../section/LetsGetConnectSection";
import TestimonialSection from "../../section/TestimonialSection";

export default function Home() {
  return (
    <div>
      {/* <h1>Portfolio</h1> */}
      <HeroSection />
      <AboutSection />
      <ExpertiesSection />
      <TestimonialSection />
      <LetsGetConnectSection />
    </div>
  );
}
