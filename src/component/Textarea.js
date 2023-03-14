import React from "react";
import classes from "../style/Textarea.module.css";

export default function Textarea({ ...rest }) {
  return <textarea className={classes.textarea} {...rest}></textarea>;
}
