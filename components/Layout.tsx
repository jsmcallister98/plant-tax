import { FC } from "react";
import Nav from "./Nav";
// import Nav from "./MobileNav";

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white dark:bg-slate-900">
      <Nav />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
