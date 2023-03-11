import React from "react";
import Logo from "./Logo";
import { NavSpan } from "../style/StyledComponent";

export default function Navber() {
  return (
    <header>
      <Logo />
      <nav>
        <NavSpan delayTime="1">Home</NavSpan>
        <NavSpan delayTime="2">About</NavSpan>
        <NavSpan delayTime="3">Skills</NavSpan>
        <NavSpan delayTime="4">Portfolio</NavSpan>
        <NavSpan delayTime="5">Contact</NavSpan>
      </nav>
    </header>
  );
}
