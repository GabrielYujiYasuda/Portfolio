import SkillCard from "../../../components/SkillCard";
import { SKILLS_SECTION, STYLES } from "../../../shared/constants";

const skillGroups = [
  {
    title: SKILLS_SECTION.SKILL_GROUPS.FRONTEND.TITLE,
    tags: SKILLS_SECTION.SKILL_GROUPS.FRONTEND.TAGS,
  },
  {
    title: SKILLS_SECTION.SKILL_GROUPS.BACKEND.TITLE,
    tags: SKILLS_SECTION.SKILL_GROUPS.BACKEND.TAGS,
  },
  {
    title: SKILLS_SECTION.SKILL_GROUPS.TOOLS_INFRA.TITLE,
    tags: SKILLS_SECTION.SKILL_GROUPS.TOOLS_INFRA.TAGS,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="my-12 scroll-mt-24 sm:my-16 lg:my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} px-4 py-12 sm:px-6 sm:py-16 lg:py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{SKILLS_SECTION.SKILLS_TEXT}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{SKILLS_SECTION.TITLE}</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} title={group.title} tags={group.tags} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
