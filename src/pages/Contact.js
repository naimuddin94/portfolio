import React from "react";
import shapeimg from "../assets/images/shape.png";
import locationimg from "../assets/images/location.png";
import emailimg from "../assets/images/email.png";
import phoneimg from "../assets/images/phone.png";
import ContactForm from "../component/ContactForm";
import SocialMedia from "../component/SocialMedia";
import { Container } from "../style/StyledComponent";
import classes from "../style/Contact.module.css";

export default function Contact() {
  return (
    <Container>
      <span className={classes.bigCircle}></span>
      <img src={shapeimg} className={classes.square} alt="" />
      <div className={classes.contact}>
        <div className={classes.contactInfo}>
          <h3 className={classes.title}>Let's get in touch</h3>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className={classes.info}>
            <div className={classes.information}>
              <img src={locationimg} className={classes.icon} alt="" />
              <p>Bangladesh, Khulna, Satkhira</p>
            </div>
            <div className={classes.information}>
              <img src={emailimg} className={classes.icon} alt="" />
              <p>developernaimuddin@gmail.com</p>
            </div>
            <div className={classes.information}>
              <img src={phoneimg} className={classes.icon} alt="" />
              <p>+880 1911 21 14 21</p>
            </div>
          </div>

          <SocialMedia />
        </div>

        <div className={classes.contactForm}>
          <span className={classes.circleOne}></span>
          <span className={classes.circleTwo}></span>

          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
