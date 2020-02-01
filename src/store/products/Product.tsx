import React, { useState, useEffect } from "react";
import * as products_data from "../../data/products.json";
import { RouteComponentProps, withRouter } from "react-router";
import { IProductData, IData } from "../../data/Interfaces";
import { modifyItem } from "../../cart/CartLogic";
import ProductDisplay from "./ProductDisplay";

interface Props extends RouteComponentProps<{ id?: string }> {
  reload: () => void;
}

const initialProduct: IProductData = {
  id: 0,
  sku: 0,
  title: "",
  type: "",
  style: "",
  brand: "",
  color: [],
  price: 0
};

const Product: React.FC<Props> = props => {
  const [product, setProduct] = useState(initialProduct);
  const [color, setColor] = useState("");

  useEffect(() => {
    const { data }: IData = products_data;
    for (let item of data) {
      if (item.sku.toString() === props.match.params.id) {
        setProduct(item);
        setColor(item.color[0]);
      }
    }
  }, []);

  function addToCart() {
    modifyItem(product, color, 1);
    props.reload();
  }
  return (
    <div>
      <ProductDisplay
        product={product}
        color={color}
        setColor={setColor}
        addToCart={addToCart}
      />
    </div>
  );
};

export default withRouter(Product);
