import { Link } from "react-router-dom";
import { STYLES, HEADER } from "../shared/constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-base-300">
      <div className={`mx-auto flex ${STYLES.BASE_HORIZONTAL_PADDING} items-center justify-between px-6 py-4`}>
        <Link to="/" className="text-[18px] font-semibold text-[rgb(9,9,11)]">
          {HEADER.LOGO}
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              {HEADER.NAV_ABOUT}
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              {HEADER.NAV_SKILLS}
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              {HEADER.NAV_EXPERIENCE}
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              {HEADER.NAV_PROJECTS}
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              {HEADER.NAV_CONTACT}
            </Link>
          </nav>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            {HEADER.CTA_BUTTON}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
