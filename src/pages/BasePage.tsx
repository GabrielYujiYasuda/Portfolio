import type { ReactNode } from "react";
import Header from "../components/Header";

type PageLayoutProps = {
  content: ReactNode;
};

const BasePage = ({ content }: PageLayoutProps) => {
  return (
    <main>
      <Header />
      <div className="px-[20%] ">
        <main className="border-x border-base-500">{content}</main>
      </div>
    </main>
  );
};

export default BasePage;
