import React, { useContext } from "react";
import { motion } from "framer-motion";

//React icons
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DarkModeContext } from "../Hooks/ThemeContext";

//framer motion
const titleVariant = {
  offScreen: {
    opacity: 0,
    x: -50,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const textVariant = {
  offScreen: {
    opacity: 0,
    x: -50,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="home"
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50"
      } transition duration-700 ease relative  h-screen sm:py-20 flex items-center justify-center`}
    >
      <div className="m-auto sm:w-[90%]  md:w-[80%] flex md:flex-col xl:flex-row items-center justify-around">
        <div className="z-50 da">
          <motion.h1
            variants={titleVariant}
            initial="offScreen"
            whileInView={`onScreen`}
            id="name"
            className={`${
              darkMode ? "text-white" : ""
            } relative text-3xl md:text-5xl text-center font-bold  md:text-start tracking-wide`}
          >
            Nikko Mallari<span className="wave"> 👋🏻</span>
          </motion.h1>
          <motion.h2
            variants={textVariant}
            initial="offScreen"
            whileInView={`onScreen`}
            className={`${
              darkMode ? "text-white" : ""
            } text-center text-xl font-bold tracking-relaxed sm:mt-0 md:my-5 leading-6 md:text-start`}
          >
            Full Stack Developer 📍
          </motion.h2>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/nm1008/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className=" text-4xl "
                style={{ color: `${darkMode ? "white" : ""}` }}
              />
            </a>
            <a
              href="https://github.com/nm1008"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareGithub
                className="text-4xl ml-5"
                style={{ color: `${darkMode ? "white" : ""}` }}
              />
            </a>
          </div>
          <div className="relative flex sm:flex-col xl:flex-row items-center  xl:mt-5 sm:mt-10 z-40 ">
            <div className=" tech-icons  transition flex flex-wrap justify-center gap-5 xl:mt-0 mt-5">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="  w-[60px] bg-white shadow-xl rounded-full  p-2    "
              >
                <img
                  className="w-full h-full rounded-full"
                  src="../src/images/htmlIcon.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className=" w-[60px] bg-white shadow-xl rounded-full  p-2   "
              >
                <img
                  className="w-full h-full "
                  src="../src/images/cssIcon.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className=" w-[60px]      bg-white shadow-xl rounded-full  p-2   "
              >
                <img
                  className="w-full h-full  rounded-full"
                  src="../src/images/javascriptIcon.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className=" w-[60px]    bg-white shadow-xl rounded-full  p-2  "
              >
                <img
                  className="w-full h-full"
                  src="../src/images/reactIcon.svg"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.7, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="  w-[60px] bg-white shadow-xl rounded-full  p-2   "
              >
                <img
                  className="w-full h-full "
                  src="../src/images/tailwindIcon.svg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          darkMode ? "scale-100" : "scale-0"
        } transition duration-1000 ease-in absolute top-[20px] right-[10px]`}
      >
        <div className="w-[100px] md:w-[200px]">
          <img src="../src/images/moon.svg" alt="Moon" />
          <div className="w-[30px] md:w-[60px] absolute top-[30px] left-[17px] md:top-[60px] md:left-[60px]">
            <img src="../src/images/stars.svg" alt="Stars" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-[-190px] left-[-190px]"
      >
        <div className="w-[400px] md:w-[500px]">
          <img
            className="w-full h-full object-cover"
            src="../src/images/splatter.svg"
            alt="splatter"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
