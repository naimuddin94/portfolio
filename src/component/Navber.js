import React from "react";
import Logo from "./Logo";
import { NavSpan } from "../style/StyledComponent";
import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <header>
      <Logo />
      <nav>
        <Link to="/">
          <NavSpan delayTime="1">Home</NavSpan>
        </Link>
        <Link to="/about">
          <NavSpan delayTime="2">About</NavSpan>
        </Link>
        <Link to="/skills">
          <NavSpan delayTime="3">Skills</NavSpan>
        </Link>
        <NavSpan delayTime="4">Portfolio</NavSpan>
        <Link to="/contact">
          <NavSpan delayTime="5">Contact</NavSpan>
        </Link>
      </nav>
    </header>
  );
}
