import React, { FC } from "react";
import ProductCard from "./ProductCard";

export interface ProductListProps extends React.HTMLProps<HTMLDivElement> {
  products: any;
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
          Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) => (
            <ProductCard product={product} key={product.node.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
