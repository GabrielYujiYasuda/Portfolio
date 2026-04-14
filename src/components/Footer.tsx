const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-[#6c6c75] items-center p-7 border-t border-base-300 px-[25%]">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} Gabriel Yuji - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>GitHub</a>
        <a>Linkedin</a>
        <a>Email</a>
      </nav>
    </footer>
  );
};

export default Footer;
