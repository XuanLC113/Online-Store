import React from "react";
import ProductListingCard from "./ProductListingCard";

type Items = {
  id: number;
  sku: number;
  title: string;
  type: string;
  color: string[];
  image: string[];
  price: number;
};

type Props = {
  products: Array<Items>;
  type: string | undefined;
};

const ProductListing = ({ products, type }: Props) => {
  return (
    <div className="product-window">
      {products.map(item => (
        <ProductListingCard key={item.sku} item={item} type={type} />
      ))}
    </div>
  );
};

export default ProductListing;
