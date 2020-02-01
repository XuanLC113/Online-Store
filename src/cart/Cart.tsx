import React, { useEffect, useRef } from "react";
import { ICart } from "../data/Interfaces";
import CartItem from "./CartItem";
import "./Cart.css";

interface Props {
  cartItems: ICart[];
  reload: () => void;
  closeCart: () => void;
}

const Cart = ({ cartItems, reload, closeCart }: Props) => {
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (cartRef && !cartRef.current?.contains(e.target)) {
        closeCart();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="cart" ref={cartRef}>
      {cartItems.map(item => (
        <CartItem item={item} reload={reload} />
      ))}
      <p>
        $
        {cartItems.reduce((cost, cur) => cost + cur.product.price * cur.qty, 0)}
      </p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
