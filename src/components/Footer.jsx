import React from "react";
import footerImg from "../assets/pngFormat enhanced.png";
import { AiOutlineArrowUp, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={footerImg} alt="not found" />
        <h2>Fahim Abd.</h2>
        <p>The greater the effort, the greater the glory.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a target="blank" href="https://github.com/basitabdullah">
            <AiFillGithub />
          </a>
          <a target="blank" href="https://www.instagram.com/developing_pain/">
            <AiFillInstagram />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/fahim-abdullah-474900253/"
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
