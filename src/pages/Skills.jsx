import { useContext } from "react";
import { DarkModeContext } from "../Hooks/ThemeContext";

const Skills = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`${
        darkMode ? "bg-slate-800 text-white" : "bg-white"
      } transition duration-700 ease xl:h-full py-20 px-2 relative overflow-hidden`}
    >
      <main className="m-auto w-[95%] lg:w-[40%] md:w-[90%]">
        <h1 className="text-blue-400 font-bold uppercase tracking-wide text-2xl">
          Skills
        </h1>
        <p className="font-bold">Technical Level</p>

        <div className="grid mt-5">
          <div className={`${darkMode ? "bg-slate-900" : "bg-slate-800"} rounded-xl grid-cols-3 grid xl:grid-cols-4 justify-items-center content-center p-5 gap-2 rounded-md"`}>
            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="../src/images/react.svg"
              />
              <span className="text-white">React</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="../src/images/nextJS.png"
              />
              <span className="text-white">NextJS</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="../src/images/htmlLogo.png" />
              <span className="text-white">HTML</span>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src="../src/images/css.png" />
              <span className="text-white">CSS</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="../src/images/bootstrap.png"
              />
              <span className="text-white">Bootstrap</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[60px] h-[40px]"
                src="../src/images/tailwind.png"
              />
              <span className="text-white">Tailwind</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="../src/images/javascript.png"
              />
              <span className="text-white">Javascript</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="../src/images/typescript.png"
              />
              <span className="text-white">Typscript</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[40px] h-[40px]"
                src="../src/images/mongoDB.png"
              />
              <span className="text-white">MongoDB</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[100px] h-[40px]"
                src="../src/images/expressjs.png"
              />
              <span className="text-white">Express JS</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[60px] h-[40px]"
                src="../src/images/nodejs.png"
              />
              <span className="text-white">Node JS</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
