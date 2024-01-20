import { useContext } from "react";
import { DarkModeContext } from "../Hooks/ThemeContext";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="contact"
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50"
      } transition duration-700 ease relative py-10 `}
    >
      <div className="absolute w-[100px] xl:w-[150px] top-0 right-0 xl:right-20">
        <img
          className="w-full h-full"
          src="/images/message.png"
        />
      </div>

      <div className="m-auto w-[90%] md:w-[60%]">
        <h1 className="text-blue-400 font-bold uppercase">Contact </h1>
        <p className=" text-2xl font-bold tracking-widest">Hit me up !👇</p>

        <div className="mt-5">
          <div className="xl:flex items-center justify-around space-y-2">
            {/* Location */}
            <div className="p-5 mb-5 bg-white text-slate-900 rounded-xl shadow-md border-t border-l border-slate-900 flex  items-center gap-1">
              <div className="w-[50px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/location.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-sm">Manila, Philippines</p>
              </div>
            </div>
            {/* Email */}
            <div className="p-5 bg-white text-slate-900 rounded-xl shadow-md border-t border-l border-slate-900 flex items-center gap-1  md:mt-0 ">
              <div className="w-[50px]">
                <img
                  className="w-full h-full"
                  src="/images/email.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className=" text-blue-600 text-sm">
                  mallari088nikko@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
