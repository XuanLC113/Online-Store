import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ul>
        <Link className="link link-earbud" to="/online-store/store/earbud">
          <li>Earbuds</li>
        </Link>
        <Link className="link link-headphone" to="/online-store/store/headphone">
          <li>Headphones</li>
        </Link>
        <Link className="link link-speaker" to="/online-store/store/speaker">
          <li>Speakers</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
