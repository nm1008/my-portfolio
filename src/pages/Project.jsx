import { useContext } from "react";
import { DarkModeContext } from "../Hooks/ThemeContext";

import { FaSquareGithub } from "react-icons/fa6";
import { BsFillFolderSymlinkFill } from "react-icons/bs";

import { motion } from "framer-motion";

const Project = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      id="project"
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50"
      } transition duration-700 ease xl:h-full py-20 relative overflow-hidden px-5`}
    >
      <div className="m-auto w-[90%] xl:w-[60%] md:w-[80%]">
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
          <a
            className=""
            href="https://capstone-mern-front.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-full h-full border-slate-600 border-l-xl"
              src="/images/login.PNG"
              alt=""
            />
          </a>

          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3">
            <h1 className="text-center text-slate-900 font-bold text-[20px] ">
              Simply Book 📖
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] text-gray-500 px-2"
            >
              Simply Book is a robust web application that leverages MongoDB,
              Express JS, React JS, and Node JS technologies to deliver a secure
              and user-friendly platform, featuring comprehensive course
              browsing, secure user authentication via JSON web tokens, and an
              intuitive admin panel for efficient management of courses and user
              data.
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center ">
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Node JS
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Express
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                MongoDB
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="https://github.com/nm1008/simply-book-capstone"
                target="_blank"
                rel="noreferrer"
              >
                Code <FaSquareGithub className="text-2xl md:text-3xl" />
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://capstone-mern-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <BsFillFolderSymlinkFill className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Second Project */}
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
              className="text-center text-[14px] text-gray-500 px-3"
            >
              Welcome to Divimart, a cutting-edge MERN stack-based e-commerce
              web application seamlessly integrating MongoDB, Express.js, React,
              and Node.js to deliver a dynamic and feature-rich online shopping
              experience. <p className="mt-2">(Currently developing)</p>
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center lg:px-2">
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Node JS
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Express
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                MongoDB
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="https://github.com/nm1008/divimart"
                target="_blank"
                rel="noreferrer"
              >
                Code <FaSquareGithub className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
          <a
            className=""
            href="https://github.com/nm1008/divimart"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w- h-full border-slate-600 rounded-r-lg "
              src="/images/divimart-frontPage.PNG"
              alt="divimart-frontPage"
            />
          </a>
        </motion.div>

        {/* 3rd project */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          className="border-r-8 border-green-400 bg-white rounded-xl shadow-md  gap-5 mt-10 flex items-center flex-wrap xl:flex-nowrap "
        >
          <a className="" href="#" target="_blank" rel="noreferrer">
            <img
              className="w-full h-full border-slate-600 border-l-xl"
              src="/images/pokedex-frontPage.PNG"
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
              A web app utilizing the Pokemon API seamlessly integrates React,
              Tailwind CSS, and React Infinite Scroll Component for a dynamic
              and responsive interface.
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center">
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="https://github.com/nm1008/poked-react"
                target="_blank"
                rel="noreferrer"
              >
                Code <FaSquareGithub className="text-2xl md:text-3xl" />
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://poked-react.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <BsFillFolderSymlinkFill className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4th project */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
          viewport={{ once: true }}
          className="border-l-8 border-purple-400 bg-white rounded-xl shadow-md  gap-5 mt-10 flex flex-wrap-reverse items-center xl:flex-nowrap "
        >
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col space-y-5 py-3">
            <h1 className="text-center text-slate-900 font-bold text-[20px] ">
              4-in-1 ⭐
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-[14px] text-gray-500 px-3"
            >
              A versatile 4-in-1 web application that combines a calculator,
              to-do list, weather app, and a clock featuring a countdown timer
              and stopwatch. This all-in-one platform is designed to cater to
              various tasks seamlessly.
            </motion.p>
            <div className="flex flex-wrap gap-5 text-slate-900 justify-center lg:px-2">
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                React
              </span>
              <span className="shadow-md border-t border-l border-slate-600 px-5 py-2 rounded-md">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2"
                href="https://github.com/nm1008/4-in-1-typescript"
                target="_blank"
                rel="noreferrer"
              >
                Code <FaSquareGithub className="text-2xl md:text-3xl" />
              </a>
              <a
                className="flex text-slate-900 font-semibold items-center justify-between gap-2 "
                href="https://4-in-1-typescript.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <BsFillFolderSymlinkFill className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
          <a className="" href="#" target="_blank" rel="noreferrer">
            <img
              className="w- h-full border-slate-600 rounded-r-lg "
              src="/images/4-in-1-frontPage.PNG"
              alt=""
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
