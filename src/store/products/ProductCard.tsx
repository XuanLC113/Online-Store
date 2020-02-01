import React from "react";

type Items = {
  id: number;
  sku: number;
  title: string;
  type: string;
  color: string[];
  price: number;
};

interface Props {
  item: Items;
}

const ProductCard = ({ item }: Props) => {
  return (
    <div>
      <p>
        {item.title} ${item.price}
      </p>
    </div>
  );
};

export default ProductCard;
