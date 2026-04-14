import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useContactForm } from "../hooks/useContactForm";

const ContactForm = () => {
  const { register, handleSubmit, errors, isSubmitting, submitMessage, onSubmit } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className={`mt-2 h-11 w-full rounded-xl border px-4 text-[15px] text-slate-700 outline-none transition ${
              errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#0b6bff]"
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
            })}
            className={`mt-2 h-11 w-full rounded-xl border px-4 text-[15px] text-slate-700 outline-none transition ${
              errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#0b6bff]"
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="contact-project-type"
          className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500"
        >
          Project Type
        </label>
        <select
          id="contact-project-type"
          {...register("projectType", { required: "Please select a project type" })}
          className={`mt-2 h-11 w-full rounded-xl border bg-white px-4 text-[15px] text-slate-700 outline-none transition ${
            errors.projectType ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#0b6bff]"
          }`}
        >
          <option value="">Select a type...</option>
          <option value="website">Website</option>
          <option value="web-app">Web Application</option>
          <option value="mobile-app">Mobile App</option>
          <option value="consulting">Consulting</option>
        </select>
        {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>}
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Tell me about your project..."
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
          className={`mt-2 h-40 w-full resize-none rounded-xl border px-4 py-3 text-[15px] text-slate-700 outline-none transition ${
            errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#0b6bff]"
          }`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      {submitMessage && (
        <div
          className={`mt-6 rounded-xl p-4 text-sm font-medium ${
            submitMessage.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <button
        type="submit"
        disabled={true}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b6bff] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(11,107,255,0.35)] transition hover:bg-[#055de5] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <PaperPlaneTilt size={18} weight="fill" />
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
