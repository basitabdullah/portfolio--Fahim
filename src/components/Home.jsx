import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {  BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import myImg from "../assets/pngFormat enhanced.png"
const Home = () => {
const clientCount = useRef(null)
const projectsCount = useRef(null)
const animationClientsCount = () =>{
    animate(0,2,{
        duration:1,
        onUpdate: (v)=> clientCount.current.textContent = v.toFixed()
    })
}

const animationProjectsCount = () =>{
    animate(0,50,{
        duration:1,
        onUpdate: (v)=> projectsCount.current.textContent = v.toFixed()
    })
}
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: "0",
            },

            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: "-100%",
                opacity: "0",
            },

            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I am <br /> Fahim Abd.
                    </motion.h1>

                    <Typewriter
                        options={{
                            strings: ["A Developer", "A Designer", "A Creator"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "typewriterpara",
                            cursor: "",
                        }}
                    />

                    <div>
                        <a href="mailto:basitabdullah1122@gmail.com">Hire Me</a>
                        <a href="#work">
                            Projects <BsArrowUpRight />{" "}
                        </a>
                    </div>

                    <article>
                        <p>
                            +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                        </p>

                        <span>Years of Experience </span>
                    </article>

                    <aside>
                        <article>
                            <p>
                            +<motion.span whileInView={animationProjectsCount} ref={projectsCount}>500</motion.span>
                            </p>

                            <span>Projects Made</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>

                            <span>basitabdullah1122@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>

            <section>
                <img src={myImg} alt="Fahim" />
            </section>
             <BsChevronDown/>
        </div>
    );
};

export default Home;
