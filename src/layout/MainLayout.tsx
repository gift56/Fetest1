import { ReactNode } from "react";
import { Sidebar } from "../components";

interface ChildrenProp {
  children: ReactNode;
}

const MainLayout = ({ children }: ChildrenProp) => {
  return (
    <main className="w-full h-screen flex items-start justify-start bg-white">
      <nav aria-label="sidebar">
        <Sidebar />
      </nav>
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
