import ExperienceSection from "./ExperienceSection";
import IntroducerBanner from "./IntroducerBanner";

const HomeContent = () => {
  return (
    <div className="flex flex-col ">
      <IntroducerBanner />
      <ExperienceSection />
    </div>
  );
};

export default HomeContent;
