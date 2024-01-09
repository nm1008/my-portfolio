import React, { useContext } from "react";
import { DarkModeContext } from "../Hooks/ThemeContext";

import { motion } from "framer-motion";

const Project = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <section
      id="project"
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50"
      } transition duration-700 ease xl:h-full py-20 relative overflow-hidden px-5`}
    >
      <div className="m-auto w-[90%] xl:w-[60%]">
        <h1 className="text-xl font-bold text-blue-500 uppercase text-center">
          Projects
        </h1>

        {/* First Project */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
          className="border-r-8 border-blue-400 bg-white rounded-xl shadow-md  gap-5 mt-10 flex flex-wrap items-center xl:flex-nowrap "
        >
          <a className="" href="#" target="_blank" rel="noreferrer">
            <img
              className="w-full h-full border-slate-600 border-l-xl"
              src="../src/images/login.png"
              alt=""
            />
          </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3">
            <h1 className="text-center text-slate-900 font-bold text-[20px] ">
              Booking Website 📖
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] text-gray-500 px-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates impedit vel id expedita aliquam a repudiandae, officia,
              cupiditate, molestiae magnam quis vero. Omnis, quaerat sequi.
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Node JS
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Express
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                MongoDB
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://capstone-mern-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Second Project */}
      <div className="m-auto w-[90%] xl:w-[60%] rounded-xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
          viewport={{ once: true }}
          className="border-l-8 border-red-400 bg-white rounded-xl shadow-md  gap-5 mt-10 flex items-center flex-wrap-reverse xl:flex-nowrap "
        >
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3">
            <h1 className="text-center text-slate-900 font-bold text-[20px] ">
              Divimart 🛒
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] text-gray-500 px-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates impedit vel id expedita aliquam a repudiandae, officia,
              cupiditate, molestiae magnam quis vero. Omnis, quaerat sequi.
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Node JS
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Express
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                MongoDB
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://capstone-mern-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
          <a className="" href="#" target="_blank" rel="noreferrer">
            <img
              className="w-full h-full border-slate-600 rounded-r-lg "
              src="../src/images/login.png"
              alt=""
            />
          </a>
        </motion.div>

        {/* 3rd project */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
          className="border-r-8 border-blue-400 bg-white rounded-xl shadow-md  gap-5 mt-10 flex flex-wrap items-center xl:flex-nowrap "
        >
          <a className="" href="#" target="_blank" rel="noreferrer">
            <img
              className="w-full h-full border-slate-600 border-l-xl"
              src="../src/images/login.png"
              alt=""
            />
          </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3">
            <h1 className="text-center text-slate-900 font-bold text-[20px] ">
             Pokedex ⚡
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] text-gray-500 px-2"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates impedit vel id expedita aliquam a repudiandae, officia,
              cupiditate, molestiae magnam quis vero. Omnis, quaerat sequi.
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
           
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://capstone-mern-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
