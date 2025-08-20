import React from "react";
 import ProductCard from "./product_card";

type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null; // <-- allow null
};

interface ProductListProps {
  data: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListProps> = ({ data, title }) => {
  const limitedData = data.slice(0, 8);

  return (
    <div className="my-10">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}

      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product) => (
           <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
