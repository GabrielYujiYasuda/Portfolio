import type { ReactNode } from "react";
import { PROJECTS_SECTION } from "../shared/constants";

export type ProjectCardData = {
  /** Card title (e.g. "Analytics Dashboard") */
  title: string;
  /** Short description of the project */
  description: string;
  /** Image URL / path to show on the left */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Tags or tech stack badges */
  tags?: string[];
  /** URL to a live demo */
  liveUrl?: string;
  /** URL to source code */
  sourceUrl?: string;
  /** Optional trailing content (e.g. badges, actions) */
  children?: ReactNode;
  className?: string;
  /** Disable clicking on the Live Demo button */
  isLiveDemoDisabled?: boolean;
  /** Hide the Source button */
  hideSource?: boolean;
};

type ProjectsCardsProps = {
  projects: ProjectCardData[];
  className?: string;
};

const ProjectsCards = ({ projects, className }: ProjectsCardsProps) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className={`flex flex-col gap-8 ${className ?? ""}`}>
      {projects.map((project) => (
        <div
          key={project.title}
          className={
            "card w-full rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl " +
            (project.className ?? "")
          }
        >
          <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div className="p-4 lg:p-5">
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-slate-200 lg:h-full">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{project.description}</p>
                </div>

                {Array.isArray(project.tags) && project.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.liveUrl ? (
                    project.isLiveDemoDisabled ? (
                      <span className="text-sm font-semibold text-gray-400 cursor-not-allowed">
                        {PROJECTS_SECTION.LIVE_DEMO_TEXT}
                      </span>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        {PROJECTS_SECTION.LIVE_DEMO_TEXT}
                      </a>
                    )
                  ) : null}

                  {!project.hideSource && project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-500 hover:text-slate-700"
                    >
                      {PROJECTS_SECTION.SOURCE_TEXT}
                    </a>
                  ) : null}

                  {project.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
