import { motion, useCycle } from "framer-motion";
import { useRef, useContext } from "react";
import { CartContext } from "../context/shopContext";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, numItems }: any) => (
  <button
    className="relative bg-white text-black dark:bg-slate-200 rounded-full w-16 h-16 flex justify-center items-center drop-shadow-xl border"
    onClick={toggle}
  >
    {numItems > 0 && (
      <span className="absolute -right-2 -top-1 px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
        {numItems}
      </span>
    )}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    {/* <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg> */}
  </button>
);

const MobileMiniCart = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { cartOpen, setCartOpen, cart } = useContext(CartContext);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="fixed md:hidden bottom-8 right-8 z-40"
    >
      <MenuToggle
        numItems={cart.length}
        toggle={() => {
          setCartOpen(!cartOpen);
          toggleOpen();
        }}
      />
    </motion.div>
  );
};

export default MobileMiniCart;
