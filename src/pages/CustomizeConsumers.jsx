import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineReload } from "react-icons/ai";
import { SiGoogledocs } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { BiSolidDownArrow } from "react-icons/bi";
import TableData from "../Components/consumerComponetns/TableData";
import KycDropDown from "../Components/dropdowns/KycDropDown";
import ZoneDropDown from "../Components/dropdowns/ZoneDropDown";
import AccountTypsDropDown from "../Components/dropdowns/AccountTypsDropDown";
import { data } from "../data";
const CustomizeConsumers = () => {
  const [isKycOpen, setIsKycOpen] = useState(false);
  const [isRevenueOpen, setRevenueOpen] = useState(false);
  const [isZoneOpen, setIsZoneOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const [serch, setSerch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const handleClick = (item) => {
    setActivePage(item);
  };

  const PER_PAGE_DATA = 5;
  let noOfPages;
  if (data.length % PER_PAGE_DATA === 0) {
    noOfPages = data.length / 5;
  } else {
    noOfPages = Math.round(data.length / 5) + 1;
  }
  let arr = [];
  for (let i = 0; i < noOfPages; i++) {
    arr = [...arr, i + 1];
  }
  console.log(arr, data.length, noOfPages);
  return (
    <div className="ml-6 mr-10 mt-6 ">
      <p className="text-gray-800 mb-2 text-md font-semibold">
        Customize Consumers
      </p>
      <div className="flex justify-between items-center">
        <form className="border-[1px] flex overflow-hidden py-1 px-2 w-72 border-gray-800 rounded-md">
          <input
            value={serch}
            onChange={(e) => {
              setSerch(e.target.value);
            }}
            type="text"
            placeholder="Serch Consumers"
            className="px-2 py-1 flex-1 outline-none text-gray-700 text-md"
          />
          <button>
            <HiMagnifyingGlass />
          </button>
        </form>
        <div className=" flex gap-3 text-sm items-center ">
          <span className=" px-4 py-1 flex items-center rounded-md border-[1px] border-gray-800">
            <AiOutlineReload />
          </span>
          <span className="flex items-center py-1 px-4 rounded-md border-[1px] border-gray-800">
            <SiGoogledocs />
          </span>
          <span className="flex items-center px-4 py-1 rounded-md border-[1px] border-gray-800">
            <FaFileCsv />
          </span>
          <span className="flex items-center gap-1 py-[2px] px-4  bg-blue-600 text-white rounded-md border-[1px] border-gray-800">
            <HiOutlineFilter /> Filter
          </span>
        </div>
      </div>
      <div className="mt-4 bg-blue-100 py-4 grid grid-cols-[1.3fr_2fr_.8fr_1fr_1.5fr_.8fr_1.3fr_1.5fr] gap-1 items-center justify-items-center text-sm font-semibold ">
        <div className="text-gray-800  ">Consumer Name</div>
        <div className="text-gray-800   ">Assets</div>
        <div className="text-gray-800 flex items-center relative ">
          <span className=""> Revenue </span>{" "}
          <span
            onClick={() => {
              setRevenueOpen((state) => !state);
            }}
            className="text-[10px]"
          >
            <BiSolidDownArrow />
          </span>
          {isRevenueOpen && (
            <span
              className={` absolute top-0 translate-y-9 -translate-x-9 `}
            >
              <KycDropDown />
            </span>
          )}
        </div>
        <div className="relative text-gray-800  flex gap-[2px] items-center  ">
          <span> KYC Status</span>
          <span
            onClick={() => {
              setIsKycOpen((state) => !state);
            }}
            className="text-[10px]"
          >
            <BiSolidDownArrow />
          </span>
          {isKycOpen && (
            <span className="absolute top-0 translate-y-9">
              <KycDropDown />
            </span>
          )}
        </div>
        <div className="text-gray-800 flex-1 basis  ">
          Facilitator
        </div>
        <div className="relative flex items-center gap-2 text-gray-800  ">
          <span> zone</span>
          <span
            onClick={() => {
              setIsZoneOpen((state) => !state);
            }}
            className="text-[10px]"
          >
            <BiSolidDownArrow />
          </span>
          {isZoneOpen && <ZoneDropDown />}
        </div>
        <div className="text-gray-800 flex items-center gap-1 relative">
          <span>Account Type </span>
          <span
            onClick={() => {
              setIsAccountOpen((state) => !state);
            }}
            className="text-[10px]"
          >
            <BiSolidDownArrow />
          </span>
          {isAccountOpen && <AccountTypsDropDown />}
        </div>
        <div className="text-gray-800 flex-1  ">TPA</div>
      </div>
      <TableData activePage={activePage} serch={serch} />
      <div className="flex gap-3 w-[30%] m-auto mb-3">
        {arr.map((item) => (
          <span
            onClick={() => {
              handleClick(item);
            }}
            key={item}
            className={`${
              activePage === item
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-700"
            } px-2 py-[2px] border-[1px] border-blue-700 cursor-pointer `}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomizeConsumers;
