import Card from "../../../../components/Card";
import { SKILLS_SECTION, STYLES } from "../../../../shared/constants";

const skillGroups = [
  {
    title: "Frontend",
    tags: ["React", "Android", "TypeScript", "Tailwind CSS", "Styled Components", "Redux"],
  },
  {
    title: "Backend",
    tags: [".NET", "REST APIs", "Microservices", "Unit Tests", "SQL", "SQLServer"],
  },
  {
    title: "Tools & Infra",
    tags: ["Git", "Docker", "Azure", "CI/CD", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section className="my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{SKILLS_SECTION.SKILLS_TEXT}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{SKILLS_SECTION.TITLE}</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} title={group.title} tags={group.tags} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
