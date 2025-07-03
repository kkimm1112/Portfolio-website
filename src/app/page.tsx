// src/app/page.tsx

import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Skills from "./components/Skills";

// คุณอาจจะมีส่วน Hero Section หรืออื่นๆ เพิ่มเติมที่นี่
// import HeroSection from "../src/component/HeroSection";

export default function HomePage() {
  return (
    <main>
      {/* <HeroSection /> ถ้ามี */}
      <AboutMeSection />
      <Skills />
      <ProjectsSection projects={[]} /> {/* ส่วน Work/Projects */}
      
      <ContactSection />
    </main>
  );
}