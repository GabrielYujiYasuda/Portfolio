import AboutMeSection from "./Sections/AboutMeSection";
import ExperienceSection from "./Sections/ExperienceSection";
import IntroductionSection from "./Sections/IntroductionSection";
import ProjectsSection from "./Sections/ProjectsSection";
import SkillsSection from "./Sections/SkillsSection";

const LandingPageContent = () => {
  return (
    <div>
      <IntroductionSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
};

export default LandingPageContent;
