import { STYLES } from "../../../shared/constants";
import ContactForm from "../../../components/ContactForm";
import ContactCards from "../../../components/ContactCards";

const ContactSection = () => {
  return (
    <section id="contact" className="my-20 ">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let's work together.</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Have a project in mind? I'm available for freelance work and would love to hear about your needs. Fill out
            the form or reach out directly.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <ContactForm />
          <ContactCards />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
