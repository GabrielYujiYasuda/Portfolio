import ExperienceSection from "./ExperienceSection";
import IntroducerBanner from "./IntroducerBanner";

const HomeContent = () => {
  return (
    <div className="flex flex-col px-[20%]">
      <IntroducerBanner />
      <ExperienceSection />
    </div>
  );
};

export default HomeContent;
