import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatter } from "@utils/helpers";

export interface ProductCardProps extends React.HTMLProps<HTMLDivElement> {
  product: any;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { handle, title } = product.node;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;
  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full relative bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-700 dark:text-slate-300">
          {formatter.format(price)}
        </p>
      </a>
    </Link>
  );
};

export default ProductCard;
