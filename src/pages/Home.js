import React from "react";
import Img from "../assets/images/myimg01.JPG";
import SocialMedia from "../component/SocialMedia";
import classes from "../style/Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../component/Button";
import { Container } from "../style/StyledComponent";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "React Developer",
      "Django Developer",
      "Teacher",
      "Frelancer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 60,
  });
  return (
    <>
      <Container>
        <div className={classes.homeContent}>
          <h3>It's me</h3>
          <h1>Naim Uddin</h1>
          <h3>
            And I'm a{" "}
            <span>
              {text}
              <Cursor cursorColor="#0ef" />
            </span>
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>

          <SocialMedia />

          <Button type="button" text="Download CV" />
        </div>
        <div className={classes.homeImg}>
          <img src={Img} alt="Profile pic" />
        </div>
      </Container>
    </>
  );
}
