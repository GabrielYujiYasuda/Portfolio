import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-base-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="btn btn-ghost normal-case text-[16px]">
          dev.portfolio
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/home" className="text-[14px] font-medium text-[rgb(9,9,11)] hover:text-primary">
            About
          </Link>
          <Link to="/blog" className="text-[14px] font-medium text-[rgb(9,9,11)] hover:text-primary">
            Skills
          </Link>
          <Link to="/contact" className="text-[14px] font-medium text-[rgb(9,9,11)] hover:text-primary">
            Experience
          </Link>
          <Link to="/contact" className="text-[14px] font-medium text-[rgb(9,9,11)] hover:text-primary">
            Projects
          </Link>
          <Link to="/contact" className="text-[14px] font-medium text-[rgb(9,9,11)] hover:text-primary">
            Insights
          </Link>
          <Link to="/contact" className="text-[14px] font-medium text-[rgb(9,9,11)] hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn btn-primary btn-sm whitespace-nowrap">
            Work with me
          </Link>

          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu menu-compact mt-3 w-52 rounded-box bg-white p-2 shadow text-[14px] text-[rgb(9,9,11)]"
              >
                <li>
                  <Link to="/home">About</Link>
                </li>
                <li>
                  <Link to="/blog">Skills</Link>
                </li>
                <li>
                  <Link to="/contact">Experience</Link>
                </li>
                <li>
                  <Link to="/contact">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Insights</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact" className="btn btn-primary btn-sm w-full">
                    Work with me
                  </Link>
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
