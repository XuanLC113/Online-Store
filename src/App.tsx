import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import Store from "./store/Store";
import StoreHome from "./store/StoreHome";
import Product from "./store/products/Product";
import Cart from "./cart/Cart";

const App: React.FC = () => {
  const [cart, setCart] = useState(false);
  function peekCart(): void {
    setCart(true);
    setTimeout(() => setCart(false), 1500);
  }
  return (
    <Router>
      <div className="App">
        <NavBar cartHandler={() => setCart(prevState => !prevState)} />
        {cart && <Cart closeCart={() => setCart(false)} />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store/" component={StoreHome} />
          <Route exact path="/store/:type" component={Store} />
          <Route
            path="/store/:type/:id"
            component={() => <Product peekCart={() => peekCart()} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
