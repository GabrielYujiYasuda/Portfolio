import { Link } from "react-router-dom";
import { INTRODUCTION_SECTION, STYLES } from "../../../shared/constants";
import myPhoto from "../../../assets/my-photo.jpg";

const IntroductionSection = () => {
  return (
    <section className="my-20">
      <div
        className={`mx-auto flex ${STYLES.BASE_HORIZONTAL_PADDING} flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center`}
      >
        <div className="flex-1">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{INTRODUCTION_SECTION.STACK_TEXT}</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900 ">{INTRODUCTION_SECTION.TITLE}</h1>
          <p className="mt-6 max-w-xl text-base text-slate-600 text-[18px]">{INTRODUCTION_SECTION.SUB_TITLE}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {INTRODUCTION_SECTION.WORK_WITH_ME_TEXT}
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              {INTRODUCTION_SECTION.VIEW_PROJECTS_TEXT}
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 via-white to-slate-100 p-8 shadow-xl ring-1 ring-black/5">
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-200">
              <img src={myPhoto} alt="My Photo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
