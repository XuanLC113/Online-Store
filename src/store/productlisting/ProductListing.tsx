import React from "react";
import { Link } from "react-router-dom";
import ProductListingCard from "./ProductListingCard";

type Items = {
  id: number;
  sku: number;
  title: string;
  type: string;
  color: string[];
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
        <Link to={`/store/${type}/${item.sku}`} key={item.sku}>
          <ProductListingCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
