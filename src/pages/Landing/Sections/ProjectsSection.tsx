import ProjectsCards from "../../../components/ProjectsCards";
import { STYLES, PROJECTS_SECTION } from "../../../shared/constants";

const projects = PROJECTS_SECTION.PROJECTS;

const ProjectsSection = () => {
  return (
    <section className="my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{PROJECTS_SECTION.PROJECTS_TEXT}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {PROJECTS_SECTION.TITLE}
          </h2>
        </div>

        <div className="mt-10">
          <ProjectsCards projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
