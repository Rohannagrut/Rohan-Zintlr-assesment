import React from "react";
import {
  HiOutlineHome,
  HiOutlineWindow,
  HiArrowsRightLeft,
  HiOutlineFolderOpen,
  HiArchiveBox,
} from "react-icons/hi2";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BsPeople, BsBank2, BsFillGearFill } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";

import LogoImage from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    name: "Dashboard",
    path: "/home",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    name: "Bullion Operation",
    path: "/home",
    icon: <HiOutlineWindow />,
  },
  {
    id: 3,
    name: "Transactions",
    path: "/home",
    icon: <HiArrowsRightLeft />,
  },
  {
    id: 4,
    name: "Your Network",
    path: "/home",
    icon: <LiaNetworkWiredSolid />,
  },
  {
    id: 5,
    name: "Consumers",
    path: "/",
    icon: <BsPeople />,
  },
  {
    id: 6,
    name: "Other Operations",
    path: "/home",
    icon: <HiOutlineFolderOpen />,
  },
  {
    id: 7,
    name: "Manage Bank Account",
    path: "/home",
    icon: <BsBank2 />,
  },
  {
    id: 8,
    name: "FAQ",
    path: "/home",
    icon: <HiArchiveBox />,
  },
  {
    id: 9,
    name: "Customize Dashboard",
    path: "/home",
    icon: <BsFillGearFill />,
  },
];
const NavBar = () => {
  const navigate = useNavigate();
  let isActive;
  return (
    <div className=" cursor-pointer bg-blue-50/100 pt-0  pr-2 pl-2 pb-5 flex flex-col space-y-5">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={LogoImage}
        className="ml-5 w-20 h-20 object-contain"
        alt="logo"
      />
      <div className="flex  flex-col font-semibold text-lg gap-3">
        {data.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3    bg-blue-400/100 px-2  py-1 rounded-[20px] text-white   "
                : "flex items-center gap-3   px-2 py-1  rounded-[20px] text-gray-600 transition-all"
            }
          >
            <span
              className={`
               flex items-center justify-center  w-6 h-6 rounded-full `}
            >
              {link.icon}
            </span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="ml-2">
        <h4 className="text-slate-600 font-semibold mb-1">Your Stack</h4>
        <div className="text-sm font-bold bg-blue-500 pt-4 pl-4 pr-2 pb-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl relative">
          <span className="top-1 left-1  text-white text-2xl absolute">
            <TbMoneybag />
          </span>
          <div className="space-y-2 pl-3 py-3   bg-white rounded-2xl">
            <div className=" flex gap-2 items-center">
              <span className="text-slate-600">
                TruCoin <span className="text-red-400">Gold</span>
                <h6 className="text-green-400">$ 2.54 (+1.25%)</h6>
              </span>
              <span className="text-slate-600">2.56k gm</span>
            </div>
            <div className=" flex gap-2 items-center ">
              <span className="text-slate-600">
                TruCoin <span className="text-red-400">Gold</span>
                <h6 className="text-green-400">$ 0.178 (+1.5%)</h6>
              </span>
              <span className="text-slate-600">9.5k gm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
