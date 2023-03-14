import React from "react";
import classes from "../style/Button.module.css";

export default function Button({ text, ...rest }) {
  return (
    <button {...rest} className={classes.btn}>
      {text}
    </button>
  );
}
