import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { GLOBALS } from "../shared/constants";

const contactItems = [
  {
    label: "Email",
    value: "gabrielyyasuda@gmail.com",
    href: "mailto:gabrielyyasuda@gmail.com",
    icon: EnvelopeSimple,
  },
  {
    label: "Linkedin",
    value: "linkedin.com/yourname",
    href: GLOBALS.LINKEDIN_URL,
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    value: "github.com/gabrielyujiyasuda",
    href: GLOBALS.GITHUB_URL,
    icon: GithubLogo,
  },
] as const;

const ContactCards = () => {
  return (
    <div className="space-y-5">
      {contactItems.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f0ff] text-[#0b6bff] transition group-hover:bg-[#dce9ff]">
            <Icon size={22} weight="regular" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500">{label}</span>
            <span className="mt-1 block text-lg text-slate-700">{value}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default ContactCards;
