import ExperienceCard from "../../../components/ExperienceCard";
import type { ExperienceCardProps } from "../../../components/ExperienceCard";
import { STYLES } from "../../../shared/constants";

const experiences: ExperienceCardProps[] = [
  {
    dateRange: "2022 — Present",
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    highlights: [
      "Led migration from CRA to Next.js, reducing load times by 40%",
      "Built a component library used across 3 product teams",
      "Reduced bundle size by 22% through code-splitting and tree shaking",
    ],
  },
  {
    dateRange: "2020 — 2022",
    title: "Software Engineer",
    company: "Startup Studio",
    highlights: [
      "Built a multi-tenant SaaS platform used by 200+ customers",
      "Improved developer DX with a custom CLI and shared UI toolkit",
      "Automated release pipelines, cutting deployment time by 60%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">Experience</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Where I've contributed.</h2>
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
