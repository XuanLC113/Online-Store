import React, { Dispatch, SetStateAction, useState } from "react";
import { IProductData } from "../data/Interfaces";
import ProductBanner from "./ProductBanner";

interface Props {
  product: IProductData;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  addToCart: (count: number) => void | undefined;
}

const ProductDetails = ({ product, color, setColor, addToCart }: Props) => {
  const [count, setCount] = useState(1);
  return (
    <div className="product-details">
      <ProductBanner images={product.image} />
      <div className="product-description">
        <h1>{product.title}</h1>
        <p className="product-price">${product.price}</p>
        <div className="color-selector">
          <select value={color} onChange={e => setColor(e.target.value)}>
            {product.color.map(color => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="product-add">
          <div className="product-count">
            <button
              onClick={() => setCount(prevState => prevState - 1)}
              disabled={count === 1}
            >
              &lt;
            </button>
            <p>{count}</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>
              &gt;
            </button>
          </div>
          <button onClick={() => addToCart(count)}>add to cart</button>
        </div>
        <p>features:</p>
        <ul>
          {product.feature.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
        <p>
          description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum, repellendus.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
