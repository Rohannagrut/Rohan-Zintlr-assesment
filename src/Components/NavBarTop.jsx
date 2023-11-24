import React from "react";
import {
  HiMagnifyingGlass,
  HiOutlineWallet,
  HiOutlineFolderOpen,
  HiOutlineBell,
  HiMiniFlag,
  HiChevronDown,
  HiFlag,
} from "react-icons/hi2";
import {
  BsFileBarGraph,
  BsFileBarGraphFill,
  BsFillFileEarmarkBarGraphFill,
  BsGraphDownArrow,
  BsGraphUp,
  BsGraphUpArrow,
  BsGripHorizontal,
  BsParagraph,
  BsPerson,
} from "react-icons/bs";
import { TbGraph, TbMoneybag } from "react-icons/tb";
import TopNavBarBottomSection from "./TopNavBarBottomSection";
import profileimg from "../assets/Ellipse 260.jpg";
const NavBarTop = () => {
  return (
    <div className="pl-6 pr-7">
      <div className="pt-2 pl-3 pr-5 mb-5 flex items-center">
        <form className=" flex  items-center justify-between bg-gray-100 w-fit rounded-3xl ">
          <input
            className="bg-gray-100 py-2 px-4 outline-none rounded-3xl text-gray-600"
            type="text"
            placeholder="Serch (Eg:Reward)"
          />
          <button className="text-gray-600 bg-white rounded-full w-8 h-8 mr-2 flex justify-center items-center text-lg ">
            <HiMagnifyingGlass />
          </button>
        </form>
        <div className="flex items-center flex-1 gap-10 justify-end">
          <div className="flex items-center gap-6 justify-center text-xl ">
            <span className="relative cursor-pointer">
              <TbMoneybag />
              <span
                className={` top-0 right-0 h-2 w-2 bg-red-600 rounded-full absolute hidden`}
              ></span>
            </span>
            <span className="relative cursor-pointer">
              <HiOutlineWallet />
              <span
                className={` top-0 right-0 h-2 w-2 bg-red-600 rounded-full absolute inline-block`}
              ></span>
            </span>
            <span className="relative cursor-pointer">
              <HiOutlineFolderOpen />
              <span
                className={` top-0 right-0 h-2 w-2 bg-red-600 rounded-full absolute inline-block`}
              ></span>
            </span>
            <span className="relative cursor-pointer">
              <HiOutlineBell />
              <span
                className={` top-0 right-0 h-2 w-2 bg-red-600 rounded-full absolute inline-block`}
              ></span>
            </span>
          </div>
          <div className="flex  gap-3 p-3 rounded-xl shadow-md text-sm font-semibold  ">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-orange-600">Gold</p>
              <div className="flex gap-1 text-xs items-center">
                <span>
                  <HiFlag className=" text-orange-400 " />
                </span>
                <span>IN</span>
                <span>
                  <HiChevronDown />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center text-green-600">
              <span>
                <BsGraphUp className="text-2xl" />
              </span>
              <span>+0.34 %</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Buy: $7,3900.00 </span>
              <span>Sell: $7,900.00 </span>
            </div>
          </div>
          <div className="rounded-lg py-2 px-4 flex items-center  gap-3 bg-blue-50">
            <span className="text-xl w-12 h-12 flex items-center justify-center bg-yellow-200 rounded-full">
              <img
                className="w-[53.37px] h-[53.37px] rounded-full"
                src={profileimg}
              />
            </span>
            <span className="text-sm">
              <HiChevronDown />
            </span>
          </div>
        </div>
      </div>
      <TopNavBarBottomSection />
    </div>
  );
};

export default NavBarTop;
