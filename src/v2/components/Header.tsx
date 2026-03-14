import { Link } from "react-router-dom";
import { STYLES } from "../shared/constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-base-200">
      <div className={`mx-auto flex ${STYLES.BASE_HORIZONTAL_PADDING} items-center justify-between px-6 py-4`}>
        <Link to="/" className="text-[18px] font-semibold text-[rgb(9,9,11)]">
          dev.portfolio
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              About
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              Skills
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              Experience
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              Projects
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              Insights
            </Link>
            <Link className="text-[14px] text-[#6c6c75] hover:opacity-70" to="/">
              Contact
            </Link>
          </nav>
          <Link to="/" className="btn bg-[#0064E6] text-white rounded-2xl">
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
