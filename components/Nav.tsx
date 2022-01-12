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
      <div className="flex">
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
        <MenuItem text={"Home"} space={"-left-2/4"}>
          <SubItem title="Product" text="A SaaS for e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem
          text={"About Us"}
          space={"-left-3/4"}
          style={{ minWidth: 400 }}
        >
          <SubItem title="The Team" text="Get to know us better" />
          <SubItem title="The Company" text="Since 1998" />
          <SubItem
            title="Our Mission"
            text="Increase the GDP of the internet"
          />
          <SubItem title="Investors" text="who's backing us" />
        </MenuItem>
        <MenuItem
          text={"Products"}
          space={"-right-full"}
          style={{ minWidth: 400 }}
        >
          <SubItem
            title="Ecommerce"
            text="Unify online and in-person payments"
          />
          <SubItem
            title="Marketplaces"
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title="Platforms"
            text="Let customers accept payments within your platform"
          />
          <SubItem
            title="Creator Economy"
            text="Facilitate on-platform payments and pay creators globally"
          />
        </MenuItem>
      </motion.div>
      <a
        className="text-md font-bold cursor-pointer px-10 py-5"
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
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-pink-500 to-red-500"
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
          <span className="font-bold text-gray-400 dark:text-gray-200 group-hover:text-blue-400 text-sm">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
