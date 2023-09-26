import React from "react";
import {AiOutlineMenu} from "react-icons/ai"
const Header = () => {
  return (
    <nav>
      <NavContent />
      <button>
        <AiOutlineMenu/>
      </button>
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Fahim Abd.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experience</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:basitabdullah1122@gmail.com">
      <button>Email</button>
    </a>
  </>
);
export default Header;
