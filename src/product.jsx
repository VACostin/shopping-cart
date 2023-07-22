import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { add } from "./cart-slice";

const images = require.context("Res", true);

const Product = (props) => {
  const { id, text, price } = props;
  const image = images(`./${id}.png`);
  const dispatch = useDispatch();
  const onClick = () => dispatch(add(props));

  return (
    <div className="items">
      <div className="imgWraps">
        <img src={image} alt="Not found" />
      </div>
      <p className="descriptions">{text}</p>
      <p className="prices">${price}</p>
      <div>
        <button type="button" onClick={onClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
