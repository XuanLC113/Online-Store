import React, { useState, useEffect, useRef, Dispatch } from "react";
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
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (dropDown && dropDownRef && !dropDownRef.current?.contains(e.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dropDown]);

  return (
    <div>
      <div className="navbar">
        <ul>
          <Link
            className="link nav-home"
            to="/"
            onClick={() => dispatch({ type: "reset" })}
          >
            <li>Home</li>
          </Link>
          <div onClick={() => setDropDown(prevState => !prevState)}>
            <li className="link nav-store">Shop</li>
          </div>

          <li className="nav-cart" onClick={() => cartHandler()}>
            {cartSize > 0 && <span className="cart-badge">{cartSize}</span>}
            <span className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
          </li>
        </ul>
      </div>
      {dropDown && (
        <div className="store-dropdown" ref={dropDownRef}>
          <ul>
            <Link
              className="link link-earbud"
              to="/store/earbud"
              onClick={() => dispatch({ type: "reset" })}
            >
              <li>Earbuds</li>
            </Link>
            <Link
              className="link link-headphone"
              to="/store/headphone"
              onClick={() => dispatch({ type: "reset" })}
            >
              <li>Headphones</li>
            </Link>
            <Link
              className="link link-speaker"
              to="/store/speaker"
              onClick={() => dispatch({ type: "reset" })}
            >
              <li>Speakers</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
