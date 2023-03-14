import React from "react";
import Img from "../assets/images/myimg01.JPG";
import classes from "../style/About.module.css";
import { Container } from "../style/StyledComponent";

export default function About() {
  return (
    <>
      <Container>
        <div className={classes.aboutImg}>
          <img src={Img} alt="Profile pic" />
        </div>
        <div className={classes.homeContent}>
          <h1>Naim Uddin</h1>
          <h3>From Bangladesh</h3>
          <h3>Full Stack Web Developer</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </Container>
    </>
  );
}
