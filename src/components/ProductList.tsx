import { products } from "@/data/products";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const ProductList = () => {
  return (
    <div className="w-full">
      <Categories />

      {/* filter */}
      <Filter />

      {/* product card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
