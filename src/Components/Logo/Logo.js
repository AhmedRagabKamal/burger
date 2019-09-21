import React from "react";
import Burgerlogo from "../../assets/images/127 burger-logo.png";
import classes from "./Logo.css";

const logo = () => (
  <div className={classes.Logo}>
    <img src={Burgerlogo} alt="burgerLogo" />
  </div>
);

export default logo;
