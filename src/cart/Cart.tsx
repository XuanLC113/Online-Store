import React, { useState, useEffect } from "react";
import { openDB } from "./CartLogic";
import { ICart } from "../data/Interfaces";
import CartItem from "./CartItem";
import "./Cart.css";

interface Props {
  closeCart: () => void;
}

const initialCart: ICart[] = [];

const Cart = ({ closeCart }: Props) => {
  const [cart, setCart] = useState(initialCart);
  const [reloadCart, setReloadCart] = useState(false);
  useEffect(() => {
    let request = openDB();
    request.onsuccess = () => {
      let db = request.result;
      let tx = db.transaction(["cart"]);
      let store = tx.objectStore("cart");
      let items: ICart[] = [];
      let cursorRequest = store.openCursor();
      cursorRequest.onsuccess = (e: any) => {
        let cursor = e.target.result;
        if (cursor) {
          items.push(cursor.value);
          cursor.continue();
        }
      };
      tx.oncomplete = () => {
        setCart(items);
      };
    };
  }, [reloadCart]);
  return (
    <div className="cart">
      <button onClick={() => closeCart()}>close</button>
      {cart.map(item => (
        <CartItem
          item={item}
          reload={() => setReloadCart(prevState => !prevState)}
        />
      ))}
      <p>
        ${cart.reduce((cost, cur) => cost + cur.product.price * cur.qty, 0)}
      </p>
    </div>
  );
};

export default Cart;
