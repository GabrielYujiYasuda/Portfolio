import { STYLES, CONTACT_SECTION } from "../../../shared/constants";
import ContactCards from "../../../components/ContactCards";

const ContactSection = () => {
  return (
    <section id="contact" className="my-12 scroll-mt-24 sm:my-16 lg:my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} px-4 py-12 sm:px-6 sm:py-16 lg:py-20`}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">{CONTACT_SECTION.CONTACT_TEXT}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{CONTACT_SECTION.TITLE}</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{CONTACT_SECTION.DESCRIPTION}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8 lg:p-12">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
              {CONTACT_SECTION.COMING_SOON_LABEL}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 text-center">{CONTACT_SECTION.FORM_TITLE}</h3>
            <p className="mt-2 text-center text-slate-600">{CONTACT_SECTION.FORM_MESSAGE}</p>
          </div>
          <ContactCards />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
