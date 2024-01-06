import { IoHomeOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { VscChecklist } from "react-icons/vsc";
import { MdOutlineContactPhone } from "react-icons/md";

const Header = () => {
  return (
    <header className="z-50 flex xl:flex justify-center fixed bottom-0 h-[8vh] w-full xl:top-40 xl:right-6 xl:h-[60vh] xl:w-[70px] bg-red-500 xl:rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 border-t xl:border border-blue-300 p-5">
      <nav className="flex space-x-10 xl:space-x-0 xl:flex-col xl:space-y-10 py-1 items-center justify-center">
        <a href="#" className="flex flex-col items-center">
          <IoHomeOutline className="w-7 h-7" />
          <span className="text-[12px]">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <FaRegAddressCard className="w-7 h-7" />
          <span className="text-[12px]">Profile</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <VscChecklist className="w-7 h-7" />
          <span className="text-[12px]">Projects</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <MdOutlineContactPhone className="w-7 h-7" />
          <span className="text-[12px]">Contact</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
