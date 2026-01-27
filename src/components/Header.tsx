import { Link } from "react-router-dom";
import { Smiley, Heart, Horse } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-400 px-[20%] border-b border-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">YUJI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/code">Code</Link>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <details>
                <summary>Language</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
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
