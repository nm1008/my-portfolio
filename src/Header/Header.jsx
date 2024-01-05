import { FaHouse } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { VscChecklist } from "react-icons/vsc";
import { FaAddressBook } from "react-icons/fa6";

const Header = () => {
  return (
    <header className=' className="z-50 flex xl:flex justify-center fixed bottom-0 h-[8vh] w-full xl:top-40 xl:right-6 xl:h-[60vh] xl:w-[70px] bg-red-500 xl:rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 border-t xl:border border-blue-300 p-5'>
      <nav className="flex space-x-10 xl:space-x-0 xl:flex-col xl:space-y-10 py-1 items-center justify-center">
        <a href="#" className="flex flex-col items-center">
          <FaHouse className="w-5 h-5" />
          <span className="text-[15px]">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <FaIdCard className="w-5 h-5" />
          <span className="text-[15px]">Profile</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <VscChecklist className="w-5 h-5" />
          <span className="text-[15px]">Projects</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <FaAddressBook className="w-5 h-5" />
          <span className="text-[15px]">Contact</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
