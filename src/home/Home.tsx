import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ul>
        <Link className="link link-earbud" to="/store/earbud">
          <li>Earbuds</li>
        </Link>
        <Link className="link link-headphone" to="/store/headphone">
          <li>Headphones</li>
        </Link>
        <Link className="link link-speaker" to="/store/speaker">
          <li>Speakers</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
