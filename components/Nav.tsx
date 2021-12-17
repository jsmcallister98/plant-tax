import Link from "next/link";
import { FC, useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

export interface NavProps extends React.HTMLProps<HTMLHeadingElement> {}

const Nav: FC<NavProps> = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item: any) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Shopify + Next.js</span>
          </a>
        </Link>
        <a
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Nav;
