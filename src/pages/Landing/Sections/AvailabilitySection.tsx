import AvailabilityCard from "../../../components/AvailabilityCard";
import { STYLES, AVAILABILITY_SECTION } from "../../../shared/constants";

const AvailabilitySection = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="my-0">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <AvailabilityCard
          statusLabel={AVAILABILITY_SECTION.STATUS_LABEL}
          title={AVAILABILITY_SECTION.TITLE}
          subtitle={AVAILABILITY_SECTION.SUBTITLE}
          ctaText={AVAILABILITY_SECTION.CTA_TEXT}
          onCtaClick={handleScrollToContact}
        />
      </div>
    </section>
  );
};

export default AvailabilitySection;
