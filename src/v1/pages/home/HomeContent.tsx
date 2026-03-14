import ExperienceSection from "./ExperienceSection";
import IntroducerBannerSection from "./IntroducerBannerSection";
import LatestPostsSection from "./LatestPostsSection";

const HomeContent = () => {
  return (
    <div className="flex flex-col ">
      <IntroducerBannerSection />
      <ExperienceSection />
      <LatestPostsSection />
    </div>
  );
};

export default HomeContent;
