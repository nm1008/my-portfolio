import { useContext } from "react";
import { motion } from "framer-motion";

import { DarkModeContext } from "../Hooks/ThemeContext";
import WavesNight from "../components/Waves-Night";
import WavesLight from "../components/Waves-Light";

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
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="about"
      className={`${
        darkMode ? "bg-slate-800" : ""
      }  relative transition duration-700 ease py-20 flex items-center justify-center overflow mx-2`}
    >
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="m-auto sm:w-[90%]  md:w-[60%] grid xl:grid-cols-2 gap-10  lg:mt-10 "
      >
        <motion.div
          variants={imageVariant}
          className="flex justify-center items-center"
        >
          <div className="relative ">
            <img
              className="w-72 h-full rounded-xl   "
              src="/images/portfolio-pic.png"
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
            As a devoted and enthusiastic learner in the field of development, I
            possess a keen interest in crafting interactive and user-focused web
            applications. My foundation lies in mastering the fundamentals of
            HTML, CSS, and JavaScript to create visually appealing and
            responsive front-end interfaces. I am passionate about leveraging my
            skills to design exceptional user experiences and thrive in
            collaborative, team-oriented settings. I am eager to contribute my
            expertise to the creation of innovative and engaging web
            applications.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="absolute top-[-10px] md:[top-[-20px]] w-full">
        {darkMode ? <WavesNight /> : <WavesLight />}
      </div>
    </section>
  );
};

export default About;
