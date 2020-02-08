import React, { Dispatch, SetStateAction, useState } from "react";
import { IProductData } from "../data/Interfaces";
import ProductBanner from "./ProductBanner";

interface Props {
  product: IProductData;
  selectedColor: string;
  setColor: Dispatch<SetStateAction<string>>;
  addToCart: (count: number) => void | undefined;
}

const ProductDetails = ({
  product,
  selectedColor,
  setColor,
  addToCart
}: Props) => {
  const [count, setCount] = useState(1);
  return (
    <div className="product-details">
      <ProductBanner images={product.image} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <h2 className="product-price">${product.price}</h2>
        <div className="product-features">
          <h3>Features</h3>
          <ul>
            {product.feature.map(feature => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            qui eaque aliquam dolorem porro ab similique laboriosam aliquid
            explicabo velit vero sunt, natus, numquam consequatur dolores
            ducimus laborum et voluptatem?
          </p>
        </div>
        <div className="color-selector">
          <h3>Colors</h3>
          {product.color.map(color => (
            <span
              style={{
                background: color,
                outline: color === selectedColor ? "2px solid black" : "none"
              }}
              onClick={() => setColor(color)}
            />
          ))}
        </div>
        <h3>Qty</h3>
        <div className="product-add">
          <div className="product-count">
            <button
              onClick={() => setCount(prevState => prevState - 1)}
              disabled={count === 1}
            >
              &lt;
            </button>
            <input type="text" value={count} />
            <button onClick={() => setCount(prevState => prevState + 1)}>
              &gt;
            </button>
          </div>
          <button className="cart-add-button" onClick={() => addToCart(count)}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
