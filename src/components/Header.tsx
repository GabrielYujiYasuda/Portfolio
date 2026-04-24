import { STYLES, HEADER } from "../shared/constants";
import { handleScroll } from "../shared/scrollUtils";
import { CaretDownIcon, GlobeIcon } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-white/70 backdrop-blur-md">
      <div
        className={`mx-auto flex ${STYLES.BASE_HORIZONTAL_PADDING} flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[18px] font-semibold text-[rgb(9,9,11)] bg-transparent border-none p-0 cursor-pointer hover:opacity-70"
        >
          {HEADER.LOGO}
        </button>
        <div className="flex items-center gap-3 sm:gap-6">
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
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 cursor-pointer sm:px-4 sm:py-3 sm:text-sm"
            >
              {HEADER.CTA_BUTTON}
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm btn-ghost text-[#6c6c75]">
                <GlobeIcon size={20} />
                <CaretDownIcon size={10} />
              </div>
              <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                <li className="text-xs text-gray-500 pointer-events-none">
                  <span>{HEADER.LANGUAGE_DROPDOWN.WORK_IN_PROGRESS}</span>
                </li>
                <li className="disabled">
                  <a>{HEADER.LANGUAGE_DROPDOWN.ENGLISH}</a>
                </li>
                <li>
                  <a>{HEADER.LANGUAGE_DROPDOWN.PORTUGUESE}</a>
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
