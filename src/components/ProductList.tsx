import { products } from "@/data/products";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  const filteredProducts =
    category && category != "all"
      ? products.filter((product) => product.category === category)
      : products;

  return (
    <div className="w-full">
      <Categories />

      {params === "products" && <Filter />}

      {/* product card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
