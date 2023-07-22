import React from "react";
import { useSelector } from "react-redux";
import "Styles/dark-cover.css";

const DarkCover = () => {
  const position = useSelector((state) => state.checkout.flag) === "auto" ? "-100%" : "0";
  return <div id="darkCover" style={{ left: `${position}` }} />;
};

export default DarkCover;
