import AboutMeSection from "./Sections/AboutMeSection";
import AvailabilitySection from "./Sections/AvailabilitySection";
import ContactSection from "./Sections/ContactSection";
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
      <ContactSection />
      <AvailabilitySection />
    </div>
  );
};

export default LandingPageContent;
