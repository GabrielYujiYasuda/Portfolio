import ProjectsCards from "../../../components/ProjectsCards";
import { STYLES, PROJECTS_SECTION } from "../../../shared/constants";
import cellphoneAppImg from "../../../assets/cellphone-app.png";
import webAppImg from "../../../assets/web-app.png";
import orcasoundImg from "../../../assets/orcasounde-photo.png";

const imageMap: Record<string, string> = {
  "cellphone-app": cellphoneAppImg,
  "web-app": webAppImg,
  "orcasounde-photo": orcasoundImg,
};

const projects = PROJECTS_SECTION.PROJECTS.map((project) => ({
  ...project,
  imageSrc: imageMap[project.imageSrc] || project.imageSrc,
}));

const ProjectsSection = () => {
  return (
    <section id="projects" className="my-12 scroll-mt-24 sm:my-16 lg:my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} px-4 py-12 sm:px-6 sm:py-16 lg:py-20`}>
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
