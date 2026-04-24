import { INTRODUCTION_SECTION, STYLES } from "../../../shared/constants";
import { handleScroll } from "../../../shared/scrollUtils";
import myPhoto from "../../../assets/my-photo.jpg";
import ScrollArrowDown from "../../../components/ScrollArrowDown";

const IntroductionSection = () => {
  return (
    <section className="relative my-12 pb-16 sm:my-16 sm:pb-24 lg:my-20 lg:pb-28">
      <div
        className={`mx-auto flex ${STYLES.BASE_HORIZONTAL_PADDING} flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:py-20`}
      >
        <div className="flex-1">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{INTRODUCTION_SECTION.STACK_TEXT}</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {INTRODUCTION_SECTION.TITLE}
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">{INTRODUCTION_SECTION.SUB_TITLE}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => handleScroll("contact")}
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
            >
              {INTRODUCTION_SECTION.WORK_WITH_ME_TEXT}
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto"
            >
              {INTRODUCTION_SECTION.VIEW_PROJECTS_TEXT}
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 via-white to-slate-100 p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-200">
              <img src={myPhoto} alt="My Photo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <ScrollArrowDown scrollTo={() => handleScroll("about-me")} className="bottom-4 sm:bottom-6" />
    </section>
  );
};

export default IntroductionSection;
