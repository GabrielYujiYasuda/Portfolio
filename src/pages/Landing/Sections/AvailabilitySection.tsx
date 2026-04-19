import AvailabilityCard from "../../../components/AvailabilityCard";
import { STYLES, AVAILABILITY_SECTION } from "../../../shared/constants";

const AvailabilitySection = () => {
  return (
    <section className="my-0">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <AvailabilityCard
          statusLabel={AVAILABILITY_SECTION.STATUS_LABEL}
          title={AVAILABILITY_SECTION.TITLE}
          subtitle={AVAILABILITY_SECTION.SUBTITLE}
          ctaText={AVAILABILITY_SECTION.CTA_TEXT}
        />
      </div>
    </section>
  );
};

export default AvailabilitySection;
