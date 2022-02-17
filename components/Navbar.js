import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { families } from "../data/families";
import { IconContext } from "react-icons";
import ThemeToggle from "@components/ThemeToggle";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="w-full sticky top-0 z-50 md:flex justify-between bg-opacity-50 dark:bg-opacity-75 bg-white dark:bg-gray-900 backdrop-filter backdrop-blur h-16">
          <a href="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
          <ThemeToggle />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <a href="#" className="menu-close" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {Object.keys(families).map((item, index) => {
              return (
                <li key={index} className={"families-list"}>
                  {/* {item.icon} */}
                  <span>{item.toUpperCase()}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
