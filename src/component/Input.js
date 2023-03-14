import React from "react";
import classes from "../style/Input.module.css";

export default function Input({ ...rest }) {
  return <input className={classes.input} {...rest} />;
}
