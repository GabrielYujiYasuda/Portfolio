import AboutMeSection from "./Sections/AboutMe/AboutMeSection";
import IntroductionSection from "./Sections/Introduction/IntroductionSection";
import SkillsSection from "./Sections/Skills/SkillsSection";

const LandingPageContent = () => {
  return (
    <div>
      <IntroductionSection />
      <AboutMeSection />
      <SkillsSection />
    </div>
  );
};

export default LandingPageContent;
