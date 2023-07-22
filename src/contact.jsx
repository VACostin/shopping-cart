import React from "react";
import Icons from "Res/contact-icons";
import "Styles/contact.css";

const Contact = () => (
  <div id="contact">
    <div id="iconSection">
      {Object.keys(Icons).map((key) => (
        <div key={key} id={key}>
          <img className="icons" src={Icons[key]} alt="not found" />
        </div>
      ))}
    </div>
    <p>WhateverStore</p>
    <p>Main Street, South Park, Colorado</p>
  </div>
);

export default Contact;
