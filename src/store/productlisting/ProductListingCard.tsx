import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductListingCard.css";

type Items = {
  id: number;
  sku: number;
  title: string;
  type: string;
  color: string[];
  image: string[];
  price: number;
};

interface Props {
  item: Items;
  type: string | undefined;
}

const ProductListingCard = ({ item, type }: Props) => {
  const [image, setImage] = useState(item.image[0]);
  return (
    <div className="product-card">
      <Link to={`/store/${type}/${item.sku}`}>
        <img src={require(`../../data/images/${image}`)} />
      </Link>
      <div>
        {item.color.map((color, index) => (
          <span
            style={{ background: color }}
            className="color-picker"
            onClick={() => setImage(item.image[index])}
          />
        ))}
      </div>
      <Link to={`/store/${type}/${item.sku}`}>
        <p>{item.title}</p>
      </Link>
      <p>${item.price}</p>
    </div>
  );
};

export default ProductListingCard;
