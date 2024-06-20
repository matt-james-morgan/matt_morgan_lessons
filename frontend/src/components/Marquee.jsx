import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import img from '../images/guitarImage.png'
import "../scss/Marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1985],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
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
          <h1>Book Now <img src={img} alt="Guitar" /> 
           </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;