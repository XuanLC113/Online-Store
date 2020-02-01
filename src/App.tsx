import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import Store from "./store/Store";
import StoreHome from "./store/StoreHome";
import Product from "./store/products/Product";
import Cart from "./cart/Cart";
import { openDB } from "./cart/CartLogic";
import { ICart } from "./data/Interfaces";

const initialCart: ICart[] = [];

const App: React.FC = () => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState(initialCart);
  const [reloadCart, setReloadCart] = useState(false);
  const [cartSize, setCartSize] = useState(0);

  function reload(): void {
    setReloadCart(prevState => !prevState);
  }

  function handleCart(): void {
    setCart(prevState => !prevState);
  }

  //load cart items
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
        setCartItems(items);
      };
    };
  }, [reloadCart]);

  //change cart marker
  useEffect(() => {
    let request = openDB();
    request.onsuccess = () => {
      let db = request.result;
      let count = 0;
      let tx = db.transaction(["cart"]);
      let store = tx.objectStore("cart");
      let cursorRequest = store.openCursor();
      cursorRequest.onsuccess = (e: any) => {
        let cursor = e.target.result;
        if (cursor) {
          count += cursor.value.qty;
          cursor.continue();
        }
      };
      tx.oncomplete = () => {
        setCartSize(count);
      };
    };
  }, [reload]);

  return (
    <Router>
      <div className="App">
        <NavBar cartHandler={handleCart} cartSize={cartSize} />
        {cart && (
          <Cart closeCart={handleCart} cartItems={cartItems} reload={reload} />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store/" component={StoreHome} />
          <Route exact path="/store/:type" component={Store} />
          <Route path="/store/:type/:id">
            <Product reload={reload} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
