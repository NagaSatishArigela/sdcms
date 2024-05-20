import React from "react";
import cover from "../../assets/cover.png";
import text from "../../assets/text.png"
import { logos } from "../../Data";
import { motion } from "framer-motion";


const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
          <div className="md:w-[500px] md:h-[500px] flex justify-center items-center">
            <img src={text} alt="text" />
          </div>
        <div className="md:w-[80%]">
          <img src={cover} alt="cover" />
        </div>
      </div>
      <div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
