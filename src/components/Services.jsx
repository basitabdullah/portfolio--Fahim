import React from "react";
import { motion } from "framer-motion";
import { BsWindows, BsBrowserChrome, BsApple } from "react-icons/bs";
const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-50%",
      opacity: 0,
    },

    twoThree: {
      y: "-50%",
      opacity: 0,
    },

    four: {
      x: "50%",
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>2+</h3>
          <p>Years of Experience</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoThree}
        >
          <BsBrowserChrome />
          <span>Web Development</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoThree}
          transition={{
            delay:0.2
          }}
        >
          <BsApple />
          <span>App Development</span>
        </motion.div>

        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <BsWindows />
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
