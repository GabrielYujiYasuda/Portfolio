import type { ReactNode } from "react";

type PageLayoutProps = {
  content: ReactNode | null;
};

const BasePage = ({ content }: PageLayoutProps) => {
  return (
    <div>
      <main>{content}</main>
    </div>
  );
};

export default BasePage;
