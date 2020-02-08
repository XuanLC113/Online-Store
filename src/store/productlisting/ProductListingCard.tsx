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
  const [index, setIndex] = useState(0);
  return (
    <div className="product-card">
      <Link className="link image-link" to={`/store/${type}/${item.sku}`}>
        <img
          className="product-card-image"
          src={require(`../../data/images/${item.image[index]}`)}
          alt="product-card"
        />
      </Link>
      <div>
        {item.color.map((color, i) => (
          <span
            style={{
              background: color,
              border: i === index ? "2px solid black" : "none"
            }}
            className="color-picker"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <Link className="link" to={`/store/${type}/${item.sku}`}>
        <h3>{item.title}</h3>
      </Link>
      <p>${item.price}</p>
    </div>
  );
};

export default ProductListingCard;
