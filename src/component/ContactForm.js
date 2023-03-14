import React from "react";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import classes from "../style/ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={classes.form}>
      <h3 className={classes.title}>Contact me</h3>
      <div className={classes.inputContainer}>
        <Input type="text" name="name" placeholder="Username" />
      </div>
      <div className={classes.inputContainer}>
        <Input type="email" name="email" placeholder="Email" />
      </div>
      <div className={classes.inputContainer}>
        <Input type="tel" name="phone" placeholder="Enter contact number" />
      </div>
      <div className={classes.inputContainer}>
        <Textarea name="message" placeholder="Message type here..." />
      </div>
      <Button text="Send" />
    </form>
  );
}
