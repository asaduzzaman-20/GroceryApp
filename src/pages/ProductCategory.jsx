import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { categories } from "../assets/greencart_assets/assets";

const ProductCategory = () => {

  const { products } = useContext(AppContext);
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="mt-16">

      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <h1 className="text-3xl md:text-4xl font-medium">
            {searchCategory.text.toUpperCase()}
          </h1>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-gray-500">
          No products found in this category.
        </p>
      )}

    </div>
  );
};

export default ProductCategory;
