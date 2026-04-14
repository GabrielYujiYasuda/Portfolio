import ProjectsCards from "../../../components/ProjectsCards";
import type { ProjectCardData } from "../../../components/ProjectsCards";
import { STYLES } from "../../../shared/constants";

const projects: ProjectCardData[] = [
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive charts, role-based access, and automated reporting. Built for a fintech startup processing 2M+ events daily.",
    imageSrc: "/projects/dashboard.png",
    imageAlt: "Analytics dashboard screenshot",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Design System Library",
    description:
      "Reusable component library with a strict design token system, used across multiple web products to ensure UI consistency and accessibility.",
    imageSrc: "/projects/design-system.png",
    imageAlt: "Design system component library preview",
    tags: ["React", "Storybook", "Tailwind CSS", "Cypress"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected work.</h2>
        </div>

        <div className="mt-10">
          <ProjectsCards projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
