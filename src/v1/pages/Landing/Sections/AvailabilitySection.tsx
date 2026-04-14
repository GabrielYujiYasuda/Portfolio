import AvailabilityCard from "../../../components/AvailabilityCard";
import { STYLES } from "../../../shared/constants";

const AvailabilitySection = () => {
  return (
    <section className="my-0">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <AvailabilityCard
          statusLabel="Available for freelance"
          title="Ready to bring your next project to life?"
          subtitle="I deliver production-ready code on time and on budget. Let's discuss how I can help you ship faster."
          ctaText="Start a conversation"
          ctaUrl="#contact"
        />
      </div>
    </section>
  );
};

export default AvailabilitySection;
