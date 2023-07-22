import React from "react";
import { Link } from "react-router-dom";
import "Styles/home.css";

const Home = () => (
  <div id="home">
    <p>Insert corny quote here</p>
    <p>This is a bold statement, so it&apos;s important</p>
    <div>
      <Link to="products">To Shop</Link>
    </div>
  </div>
);

export default Home;
