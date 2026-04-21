import { STYLES, HEADER } from "../shared/constants";
import { CaretDownIcon, GlobeIcon } from "@phosphor-icons/react";

const Header = () => {
  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-base-300">
      <div className={`mx-auto flex ${STYLES.BASE_HORIZONTAL_PADDING} items-center justify-between px-6 py-4`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[18px] font-semibold text-[rgb(9,9,11)] bg-transparent border-none p-0 cursor-pointer hover:opacity-70"
        >
          {HEADER.LOGO}
        </button>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleScroll("about-me")}
              className="text-[14px] text-[#6c6c75] hover:opacity-70 cursor-pointer bg-transparent border-none p-0"
            >
              {HEADER.NAV_ABOUT}
            </button>
            <button
              onClick={() => handleScroll("skills")}
              className="text-[14px] text-[#6c6c75] hover:opacity-70 cursor-pointer bg-transparent border-none p-0"
            >
              {HEADER.NAV_SKILLS}
            </button>
            <button
              onClick={() => handleScroll("experience")}
              className="text-[14px] text-[#6c6c75] hover:opacity-70 cursor-pointer bg-transparent border-none p-0"
            >
              {HEADER.NAV_EXPERIENCE}
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="text-[14px] text-[#6c6c75] hover:opacity-70 cursor-pointer bg-transparent border-none p-0"
            >
              {HEADER.NAV_PROJECTS}
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-[14px] text-[#6c6c75] hover:opacity-70 cursor-pointer bg-transparent border-none p-0"
            >
              {HEADER.NAV_CONTACT}
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 cursor-pointer"
            >
              {HEADER.CTA_BUTTON}
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm btn-ghost text-[#6c6c75]">
                <GlobeIcon size={20} />
                <CaretDownIcon size={10} />
              </div>
              <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                <li>
                  <a>🇺🇸 English</a>
                </li>
                <li>
                  <a>🇧🇷 Português</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
