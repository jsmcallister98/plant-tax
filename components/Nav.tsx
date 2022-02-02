import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import MobileNav from "./MobileNav";
import MobileMiniCart from "./MobileMiniCart";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { Hashicon } from "@emeraldpay/hashicon-react";

const DesktopNav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item: any) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <div className="w-full hidden sticky top-0 z-50 md:flex justify-between bg-opacity-50 dark:bg-opacity-75 bg-white dark:bg-gray-900 backdrop-filter backdrop-blur h-16">
      <div className="flex w-52">
        <Link href="/" passHref>
          <a className="cursor-pointer pl-10 pr-4 py-5">
            <span className="text-lg pt-1 font-bold">McAllister</span>
          </a>
        </Link>
        <div className="p-5">
          <ThemeToggle />
        </div>
      </div>
      <motion.div className="px-10 py-5 flex justify-center">
        <MenuItem text={"Collections"} space={"-left-2/4"}>
          <SubItem
            title="McGolf"
            text="Are you McSlice, McHook, or McScratch?"
          />
          <SubItem
            title="Swang"
            text="Beautiful designs, beautiful shot shapes"
          />
          <SubItem
            title="OnCourse"
            text="Relaxed vibes to game on the course"
          />
        </MenuItem>
        <MenuItem
          text={"Products"}
          space={"-right-full"}
          style={{ minWidth: 400 }}
        >
          <SubItem title="Hoodies" text="Stay warm and look cool" />
          <SubItem
            title="Sweaters"
            text="Cozy and casual long sleeve sweaters"
          />
          <SubItem title="Tees" text="Short sleeve necessities for warm days" />
          <SubItem
            title="Hats"
            text="Golfers just look weird without hats, you know?"
          />
        </MenuItem>
        <MenuItem
          text={"About Us"}
          space={"-left-3/4"}
          style={{ minWidth: 400 }}
        >
          <SubItem title="The Team" text="Get to know us better" />
          <SubItem
            title="Our Mission"
            text="Provide the best casual golf wear"
          />
          <SubItem
            title="Contact Us"
            text="Keep us in the loop about how we are doing"
          />
        </MenuItem>
      </motion.div>
      <a
        className="text-md text-center font-bold cursor-pointer px-10 py-5 w-52"
        onClick={() => setCartOpen(!cartOpen)}
      >
        Cart ({cartQuantity})
      </a>
      <MiniCart cart={cart} />
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <MobileMiniCart />
    </>
  );
};

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-cyan-300 to-emerald-400"
    layoutId="underline"
    layout
  >
    {/* <div className="rotate-45 w-5 h-5 bg-white absolute z-50 border-t border-l top-3"></div> */}
  </motion.div>
);

const MenuItem = ({ text, space, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="px-10 relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">
        {text}
        {isBeingHovered && <Underline />}
      </span>
      {isBeingHovered && (
        <div className="py-5 -mx-10 min-w-max ">
          <motion.div
            {...props}
            layoutId="menu"
            className={`absolute shadow-lg py-5 px-8 bg-white dark:bg-slate-700 dark:shadow-slate-400 dark:shadow-md rounded-lg ${space}`}
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const SubItem = ({ title, text }: any) => {
  return (
    <motion.div
      className="my-2 group cursor-pointer min-w-max"
      layout
      variants={SubItemVariants}
    >
      <div className="flex items-center gap-4">
        <Hashicon value={title} size={25} />
        <div className="">
          <p className="font-bold text-gray-800 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-300 text-md">
            {title}
          </p>
          <span className="text-gray-400 dark:text-gray-200 group-hover:text-blue-400 text-sm">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
