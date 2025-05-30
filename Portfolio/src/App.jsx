import NavbarMain from "./Components/Navbar/NavbarMain";
import { HeroMain } from "./Components/HeroSection/HeroMain";
import { HeroGradiant } from "./Components/HeroSection/HeroGradiant";
import SubHero from "./Components/HeroSection/SubHero";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import { SkillsMain } from "./Components/SkillsSection/SkillsMain";
import ProjectsMain from "./Components/ProjectsSection/ProjectsMain";
import ContactMeMain from "./Components/ContactSection/ContactMeMain";
import { FouterMain } from "./Components/FouterSection/FouterMain";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradiant />
      <SubHero />
      <AboutMeMain />
      <SkillsMain />
      <ProjectsMain />
      <ContactMeMain />
      <FouterMain />
    </main> 
  );
}

export default App;
