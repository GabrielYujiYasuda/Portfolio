import { STYLES } from "../../../shared/constants";

const ContactSection = () => {
  return (
    <section className="my-20">
      <div className={`mx-auto ${STYLES.BASE_HORIZONTAL_PADDING} py-20`}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-gray-500">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let's work together.</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
