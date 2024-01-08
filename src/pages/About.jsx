import React, { useContext } from "react";
import { motion } from "framer-motion";

import { DarkModeContext } from "../Hooks/ThemeContext";
import Waves from "../components/waves";

const imageVariant = {
  offScreen: {
    y: 300,
    opacity: 0,
  },
  onScreen: {
    y: 5,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const textVariant = {
  offScreen: {
    x: 100,
    opacity: 0,
  },
  onScreen: {
    x: 5,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const About = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="about"
      className={`${
        darkMode ? "bg-slate-800" : ""
      }  relative transition duration-700 ease py-20 flex items-center justify-center overflow-hidden`}
    >
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="m-auto sm:w-[90%]  md:w-[60%] grid xl:grid-cols-2 gap-10 z-50 "
      >
        <motion.div
          variants={imageVariant}
          className="flex justify-center items-center"
        >
          <div className="relative z-50">
            <img
              className="w-72 h-full rounded-xl   "
              src="../src/images/portfolio-pic.png"
              alt="portfolio-pic"
            />
          </div>
        </motion.div>
        <motion.div
          variants={textVariant}
          className="flex z-30 flex-col justify-center space-y-5 space-x-2 "
        >
          <h1 className="text-blue-400 pl-2 font-bold ">ABOUT ME 😉</h1>
          <motion.p
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.8 }}
            className={`${
              darkMode ? "text-white" : "text-gray-500 "
            } tracking-wide space-y-2 leading-8`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde
            rem odio ex ut, consectetur debitis magnam, facere saepe iste
            inventore ea consequatur iure eaque accusantium veritatis sit
            recusandae, adipisci optio aut explicabo aliquid modi tenetur
            dolores! Debitis voluptas reiciendis deleniti sequi accusamus,
            facilis, repellendus vero mollitia officiis, non modi.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="absolute top-[-10px] md:[top-[-20px]] w-full">
        {darkMode ? <Waves /> : <div></div>}
      </div>
    </section>
  );
};

export default About;
