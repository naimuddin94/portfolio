import React from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MediaSpan } from "../style/StyledComponent";

export default function SocialMedia() {
  return (
    <div>
      <MediaSpan delayTime="1">
        <FaFacebookSquare />
      </MediaSpan>
      <MediaSpan delayTime="2">
        <FaGithub />
      </MediaSpan>
      <MediaSpan delayTime="3">
        <FaInstagram />
      </MediaSpan>
      <MediaSpan delayTime="4">
        <FaLinkedin />
      </MediaSpan>
    </div>
  );
}
