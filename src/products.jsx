import React from "react";
import Product from "./product";
import "Styles/products.css";

const IDS = ["cpu", "gpu", "ssd", "ram", "case", "mobo", "psu"];
const DESCRIPTIONS = [
  "10 year old CPU and still kicking",
  "We promise we didn't use it for crypto mining",
  "Thought this was an USB stick",
  "LEDs work even when they throw bluescreens",
  "The dents and holes give the case a whole new personality",
  "Please do not look on the back",
  "Foolproof as in didn't get fried so far"
];
const PRICES = [200, 1000, 300, 100, 200, 200, 0.52];

const Products = () =>
  IDS.map((item, index) => (
    <Product key={IDS[index]} id={IDS[index]} text={DESCRIPTIONS[index]} price={PRICES[index]} />
  ));

export default Products;
