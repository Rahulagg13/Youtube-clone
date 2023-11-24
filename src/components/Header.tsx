import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import {
  AlignJustify,
  BellIcon,
  UserCircle2,
  Search,
  Mic,
  ArrowLeft,
} from "lucide-react";

import { BiVideoPlus } from "react-icons/bi";
import YouTube from "../assets/youtubelogoLightMode.png";

type prop = {
  setSideDrawer: Dispatch<SetStateAction<boolean>>;
  screen: boolean;
  setScreen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setSideDrawer, screen, setScreen }: prop) => {
  return (
    <div className="px-2 mx-4 mb-6 sticky top-0 z-20  bg-white  flex justify-between gap-10 lg:gap:20 items-center overflow-x-hidden  pt-2">
      {/* left-Side */}
      <div
        className={` ${
          screen ? "hidden" : "flex"
        }   items-center  gap-x-4 md:flex `}
      >
        <button
          onClick={() => setSideDrawer((pre) => !pre)}
          className="  hover:border w-5   rounded-full flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 md:w-10 md:h-10"
        >
          <AlignJustify strokeWidth={0.5} />
        </button>
        <Link to="/" className="  md:w-24 gap-1  w-[65px]">
          <img src={YouTube} alt="" srcSet="" className="" />
        </Link>
      </div>

      {/* Middle-Side */}
      <form
        action=""
        className={`gap-4  items-center w-[650px]  justify-center  ${
          screen ? "flex" : "hidden md:flex"
        } `}
      >
        {screen && (
          <button
            onClick={() => setScreen((pre: boolean): boolean => !pre)}
            className={`md:hidden rounded-full w-10 h-10 flex items-center justify-center p-2.5 hover:border`}
          >
            <ArrowLeft />
          </button>
        )}
        <div className="flex w-full">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="rounded-l-full h-9 border shadow-inner w-full px-4 py-2 focus:border-blue-500 outline-none md:h-11"
          />
          <button className="rounded-r-full border2  px-3  bg-gray-200 md:px-5 ">
            <Search size={screen ? 18 : 20} />
          </button>
        </div>
        <button className="rounded-full w-10 h-10 flex items-center justify-center p-2.5 bg-gray-200">
          <Mic />
        </button>
      </form>

      {/* Right-Side */}

      <div
        className={`  ${
          screen ? "hidden" : "flex"
        }  items-center gap-3 md:gap-4 md:flex `}
      >
        <button
          onClick={() => setScreen((pre: boolean): boolean => !pre)}
          className="w-[38px] h-[38px] border md:hidden rounded-full  flex items-center justify-center p-2.5 hover:border  hover:bg-gray-200 active:bg-gray-300"
        >
          <Search />
        </button>
        <button className=" rounded-full w-[38px] h-[38px] md:w-10 md:h-10 flex items-center justify-center  p-2.5  hover:border  hover:bg-gray-200 active:bg-gray-300">
          <BiVideoPlus size={screen ? 18 : 20} />
        </button>
        <button className="rounded-full w-[38px] h-[38px] md:w-10 md:h-10 flex items-center justify-center p-2.5  hover:border  hover:bg-gray-200 active:bg-gray-300">
          <BellIcon />
        </button>
        <button className="rounded-full flex items-center  md:w-10 md:h-10 justify-center  ">
          <UserCircle2 />
        </button>
      </div>
    </div>
  );
};

export default Header;
