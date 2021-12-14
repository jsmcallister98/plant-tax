import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { getAllProducts, getProduct } from "@lib/shopify";
import ProductPageContent from "@components/ProductPageContent";

export interface ProductPageProps extends React.HTMLProps<HTMLDivElement> {
  product: any;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <div>
      <ProductPageContent product={product} />
    </div>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();

  const paths = products.map((item: any) => {
    const product = String(item.node.handle);

    return { params: { product } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProduct(params?.product);

  return {
    props: {
      product,
    },
  };
};
