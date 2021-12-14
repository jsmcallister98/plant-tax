import { GetStaticProps } from "next";
import { getProductsInCollection } from "lib/shopify";
import ProductList from "@components/ProductList";

export default function Home({ products }: any) {
  return (
    <div className="text-3xl">
      <ProductList products={products} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
};
