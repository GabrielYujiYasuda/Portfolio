import { Link } from "react-router-dom";
import { AppWindow, HouseSimple, Book, EnvelopeSimpleOpen, GlobeHemisphereWest, BowlFood } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-400 px-[20%] border-b border-base-300">
        <div className="flex-1 items-center gap-2">
          <a className="btn btn-ghost text-xl">
            <BowlFood size={40} />
            YUJI
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home" className="flex items-center gap-1">
                <HouseSimple size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <Book size={18}></Book>
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/code" className="flex items-center gap-1">
                <AppWindow size={18} />
                <span>Code</span>
              </Link>
            </li>
            <li>
              <Link to="/contacgt" className="flex items-center gap-1">
                <EnvelopeSimpleOpen size={18} />
                <span>Contact</span>
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <details>
                <summary className="flex items-center gap-1">
                  <GlobeHemisphereWest size={18} />
                  <span>Language</span>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>Portuguese</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
