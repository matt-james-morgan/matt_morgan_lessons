import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import img from '../images/guitarImage.png'
import "../scss/Marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -2080], // Adjust this value to match the total width of the content
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};



const Marquee = () => {

  return (
    <div>
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h2>
            Book Now
            <img src={img} />
            Book Now
            <img src={img} />
            Book Now
            <img src={img} />
            Book Now
            <img src={img} />
            Book Now
            <img src={img} />
            Book Now
            <img src={img} />
            Book Now
            <img src={img} />
          </h2>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;