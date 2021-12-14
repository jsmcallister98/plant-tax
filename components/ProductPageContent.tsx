import { FC } from "react";

export interface ProductPageContentProps
  extends React.HTMLProps<HTMLDivElement> {
  product: any;
}

const ProductPageContent: FC<ProductPageContentProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPageContent;
