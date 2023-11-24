import React from "react";
import { BiSolidRightArrow, BiSolidWalletAlt } from "react-icons/bi";
const OverallBullion = () => {
  return (
    <div className="flex items-center gap-3 px-3 py-4 rounded-lg bg-red-100">
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-amber-600">
        <BiSolidWalletAlt />
      </span>
      <div className="mr-1">
        <p className="text-md text-gray-600">Overall Bullion Wallet</p>
        <button className="text-blue-600 text-sm font-semibold flex gap-1 items-center">
          Wallet History
          <span className="text-[8px]">
            <BiSolidRightArrow />
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <button className="text-sm text-amber-600  py-1 px-2 bg-amber-200 rounded-2xl">
          Gold
        </button>
        <button className="text-sm py-1 px-2 text-gray-400 bg-white rounded-2xl">
          Silver
        </button>
      </div>
      <div className="flex gap-3 flex-col text-sm justify-center">
        <div className="flex flex-col justify-center">
          <span className="text-xs self-end mr-[-4px]">4232 gm</span>
          <span className=" text-xs self-start px-2 py-1 rounded-lg bg-white text-blue-800 ml-[-6px]">
            ₹9242.5
          </span>
        </div>
        <div className="flex flex-col">
          <span className=" text-xs self-end mr-[-4px]">4,232 gm</span>
          <span className=" self-start px-2 py-1 rounded-lg bg-white text-blue-800 ml-[-4px]">
            ₹922.5
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverallBullion;
