import { STYLES, ABOUT_ME_SECTION } from "../../../shared/constants";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="my-20 scroll-mt-24">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{ABOUT_ME_SECTION.ABOUT_TEXT}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {ABOUT_ME_SECTION.TITLE}
          </h2>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <p className="text-base leading-relaxed text-slate-600">{ABOUT_ME_SECTION.LEFT_PARAGRAPH}</p>
          <p className="text-base leading-relaxed text-slate-600">{ABOUT_ME_SECTION.RIGHT_PARAGRAPH}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
