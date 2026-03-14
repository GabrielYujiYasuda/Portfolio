import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type PageLayoutProps = {
  content: ReactNode;
};

const BasePageV2 = ({ content }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="flex flex-col flex-1 ">
        <main className="flex-1">{content}</main>
        <Footer />
      </div>
    </div>
  );
};

export default BasePageV2;
