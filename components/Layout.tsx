import { FC } from "react";
import Nav from "./Nav";

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
