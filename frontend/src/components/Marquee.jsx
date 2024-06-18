import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import img from '../images/guitarImage.png'
import "../scss/Marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -2080],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};



const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>Let's Work Together. <img src={img} alt="Guitar" /></h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;