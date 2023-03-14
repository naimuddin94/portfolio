import React from "react";
import { Container } from "../style/StyledComponent";
import ReactImg from "../assets/images/React.png";
import DjangoImg from "../assets/images/Django.png";
import DatabaseImg from "../assets/images/Database.jpg";
import classes from "../style/Skills.module.css";

export default function Skills() {
  return (
    <Container>
      <div className={classes.main}>
        <div className={classes.firstContent}>
          <img className={classes.img} src={ReactImg} alt="" />
          <h2>Frontend</h2>
          <h4>React JS,Javascript, HTML, CSS, Ajax, Redux, jQuery</h4>
          <ul>
            <li>I'm a React medium lavel developer.</li>
            <li>I can make a single page application with React.</li>
            <li>Can convert any website to React.</li>
            <li>And importantly Can make a website fully responsive.</li>
          </ul>
        </div>
        <div className={classes.secoundContent}>
          <img className={classes.img} src={DjangoImg} alt="" />
          <h2>Backend</h2>
          <h4>Django,Django-rest-framework, Python</h4>
          <ul>
            <li>I can make api with Django-rest-framwork.</li>
            <li>
              For a website singup, login, contact and user I mostly used
              Django.
            </li>
            <li>Expert for make a any application with Django.</li>
            <li>Can handle a Django application without reload.</li>
          </ul>
        </div>
        <div className={classes.thirdContent}>
          <img className={classes.img} src={DatabaseImg} alt="" />
          <h2>Databases</h2>
          <h4>PostgreSQL, SQLite, MySQL, MariaDB, Oracle.</h4>
          <ul>
            <li>I work with databases for user friendly.</li>
            <li>Mostly I do database connection with Django</li>
            <li>At a time maintain a website every clint need Databases.</li>
            <li>
              Databases can help manage business growing amounts of critical
              data centrally.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
