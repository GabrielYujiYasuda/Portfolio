import { Link } from "react-router-dom";
import { AppWindow, HouseSimple, Book, EnvelopeSimpleOpen, GlobeHemisphereWest, BowlFood } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-400 px-[15%] py-5 border-b border-base-300">
        <div className="flex-1 items-center gap-2">
          <Link to="/" className="btn btn-ghost text-xl">
            <BowlFood size={40} />
            YUJI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
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
              <Link to="/contact" className="flex items-center gap-1">
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
