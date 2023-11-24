import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { BiSolidRightArrow } from "react-icons/bi";
const OverallFloat = () => {
  return (
    <div className="flex items-center gap-3 py-5 px-6 rounded-lg bg-green-50">
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-800">
        <FcMoneyTransfer />
      </span>
      <div className="mr-4">
        <p className="text-md text-gray-600">Overall Float Wallet</p>
        <button className="text-blue-600 text-sm font-semibold flex gap-1 items-center">
          Wallet History
          <span className="text-[8px]">
            <BiSolidRightArrow />
          </span>
        </button>
      </div>
      <h3 className="text-gray-900 font-semibold text-lg">₹1,35,342</h3>
    </div>
  );
};

export default OverallFloat;
