import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

interface Props {
  cartSize: number;
  cartHandler: () => void;
}

const NavBar = ({ cartSize, cartHandler }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="navbar">
      <ul>
        <Link className="link nav-home" to="/">
          <li>Home</li>
        </Link>
        <Link className="link nav-store" to="/store">
          <li
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Shop
            {hover && (
              <div className="store-dropdown">
                <Link className="link" to="/store/earbud">
                  <li>Earbuds</li>
                </Link>
                <Link className="link" to="/store/headphone">
                  <li>Headphones</li>
                </Link>
                <Link className="link" to="/store/speaker">
                  <li>Speakers</li>
                </Link>
              </div>
            )}
          </li>
        </Link>

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
