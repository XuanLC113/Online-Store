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
    <div className="cart-item">
      <span className="cart-item-img">
        <img
          src={require(`../data/images/${item.product.image[0]}`)}
          alt="cart-item"
        />
      </span>
      <div className="cart-item-details">
        <p className="cart-item-title">{item.product.title}</p>
        <p className="cart-item-color">
          color: <b>{item.color}</b>
        </p>
        <p className="cart-item-price">${item.product.price}</p>
        <div className="cart-item-qty">
          <button onClick={() => modifyCartItem(-1)} disabled={item.qty === 1}>
            -
          </button>
          <input type="text" value={item.qty} />
          <button onClick={() => modifyCartItem(1)}>+</button>
        </div>
        <button className="cart-item-delete" onClick={() => deleteCartItem()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
