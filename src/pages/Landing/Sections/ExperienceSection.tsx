import ExperienceCard from "../../../components/ExperienceCard";
import { EXPERIENCE_SECTION, STYLES } from "../../../shared/constants";

const experiences = EXPERIENCE_SECTION.EXPERIENCES;

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-12 scroll-mt-24 sm:my-16 lg:my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} px-4 py-12 sm:px-6 sm:py-16 lg:py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{EXPERIENCE_SECTION.EXPERIENCE_TEXT}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {EXPERIENCE_SECTION.TITLE}
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title + experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
