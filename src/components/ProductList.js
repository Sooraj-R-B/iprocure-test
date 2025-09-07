"use client";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
const ProductList = ({ products }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {products?.map((product, i) => (
            <ProductCard
              key={i}
              image={product?.image || "/placeholder.png"}
              title={product?.title || "Porduct Title"}
              unspc={product?.unspc || null}
              category={product?.category || null}
              buttonText="Send Enquiry"
            />
          ))}
        </div>
        <Pagination totalPages={7} className="mb-16" />
      </div>
    </>
  );
};
export default ProductList;
