import React, { Dispatch, SetStateAction } from "react";
import { IProductData } from "../data/Interfaces";

interface Props {
  product: IProductData;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  addToCart: () => void;
}

const ProductDetails = ({ product, color, setColor, addToCart }: Props) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.sku}</p>
      <select value={color} onChange={e => setColor(e.target.value)}>
        {product.color.map(color => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <button onClick={addToCart}>add to cart</button>
    </div>
  );
};

export default ProductDetails;
