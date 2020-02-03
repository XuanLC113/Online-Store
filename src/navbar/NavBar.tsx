import React, { useState, Dispatch } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

interface Props {
  cartSize: number;
  cartHandler: () => void;
  dispatch: Dispatch<any>;
}

const NavBar = ({ cartSize, cartHandler, dispatch }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="navbar">
      <ul>
        <Link
          className="link nav-home"
          to="/"
          onClick={() => dispatch({ type: "reset" })}
        >
          <li>Home</li>
        </Link>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Link
            className="link nav-store"
            to="/store"
            onClick={() => dispatch({ type: "reset" })}
          >
            <li>Shop</li>
          </Link>
          {hover && (
            <div className="store-dropdown">
              <Link
                className="link"
                to="/store/earbud"
                onClick={() => dispatch({ type: "reset" })}
              >
                <li>Earbuds</li>
              </Link>
              <Link
                className="link"
                to="/store/headphone"
                onClick={() => dispatch({ type: "reset" })}
              >
                <li>Headphones</li>
              </Link>
              <Link
                className="link"
                to="/store/speaker"
                onClick={() => dispatch({ type: "reset" })}
              >
                <li>Speakers</li>
              </Link>
            </div>
          )}
        </div>

        <li className="nav-cart" onClick={() => cartHandler()}>
          <span className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-badge">{cartSize}</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
