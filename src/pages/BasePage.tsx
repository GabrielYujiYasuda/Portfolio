import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type PageLayoutProps = {
  content: ReactNode;
};

const BasePage = ({ content }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-1 px-[20%] border-x border-base-500">
        <main className="flex-1 p-4">{content}</main>
        <Footer />
      </div>
    </div>
  );
};

export default BasePage;
