import { GLOBALS } from "../shared/constants";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-[#6c6c75] items-center border-t border-base-300 p-7 px-6 sm:px-10 lg:px-[25%]">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} Gabriel Yuji - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href={GLOBALS.GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={GLOBALS.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
