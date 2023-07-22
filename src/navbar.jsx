/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Icon from "Res/shopping-cart.svg";
import { toggle } from "./checkout-slice";
import "Styles/navbar.css";

const Navbar = () => {
  const flag = useSelector((state) => state.checkout.flag);
  const dispatch = useDispatch();
  const onClick = () => dispatch(toggle());
  return (
    <nav id="navbar">
      <Link to="/" style={{ pointerEvents: flag }}>
        <p id="navTitle">WhateverStore</p>
      </Link>
      <div id="navContent">
        <Link to="/" style={{ pointerEvents: flag }}>
          <p className="navElements">Home</p>
        </Link>
        <Link to="products" style={{ pointerEvents: flag }}>
          <p className="navElements">Products</p>
        </Link>
        <Link to="contact" style={{ pointerEvents: flag }}>
          <p className="navElements">Contact</p>
        </Link>
        <div className="navElements" id="navIcon" onClick={onClick}>
          <img src={Icon} alt="not found" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
