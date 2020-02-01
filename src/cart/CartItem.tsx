import React from "react";
import { ICart } from "../data/Interfaces";
import { modifyItem, deleteItem } from "./CartLogic";

interface Props {
  item: ICart;
  reload: () => void;
}

const CartItem = ({ item, reload }: Props) => {
  function modifyCartItem(count: number): void {
    modifyItem(item.product, item.color, count);
    reload();
  }

  function deleteCartItem(): void {
    deleteItem(item.product, item.color);
    reload();
  }

  return (
    <div>
      <p>{item.product.title}</p>
      <p>{item.color}</p>
      <p>${item.product.price}</p>
      <button onClick={() => modifyCartItem(-1)} disabled={item.qty === 1}>
        -
      </button>
      <p>{item.qty}</p>
      <button onClick={() => modifyCartItem(1)}>+</button>
      <button onClick={() => deleteCartItem()}>Delete</button>
    </div>
  );
};

export default CartItem;
