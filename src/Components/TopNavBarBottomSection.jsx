import React from "react";
import image from "../assets/Tech Life Communication.png";
import {
  BsPersonPlus,
  BsPersonGear,
  BsPersonSquare,
  BsLightningChargeFill,
  BsTicket,
  BsTicketDetailedFill,
  BsTicketPerforatedFill,
} from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import TopNavBarCard from "./TopNavBarCard";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { TbTicket } from "react-icons/tb";
const TopNavBarBottomSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex gap-5 items-center">
      <div className="flex bg-blue-50 p-3 w-fit rounded-xl gap-1">
        <div className="flex flex-col">
          <div className="flex gap-2 tracking-wider text-sm">
            {location.pathname === "/customize" ? (
              <div>
                <div className=" p-4  rounded-lg ">
                  <p className="text-sky-500 font-bold">
                    <button
                      onClick={() => {
                        navigate("/");
                      }}
                      className="text-gray-800 bg-white border-2 border-gray-900 font-bold  py-1 px-2 rounded-md flex items-center gap-2 "
                    >
                      <BsPersonGear />
                      Consumer {">"} Manage Consumers
                    </button>
                  </p>
                  <p className="text-neutral-950 text-xl">Actions</p>
                  <div className="mt-2">
                    <button className="text-white bg-slate-800 tracking-wider py-1 px-2 rounded-md font-bold flex items-center gap-2 ">
                      <BsPersonPlus /> Add Customers
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl text-gray-900 font-normal mb-1">
                  Hello Shakir!
                </h2>
                <p className="text-sm text-gray-500  tracking-wider mb-4">
                  you have 134 consumers this week.
                </p>
                <div className=" p-4  rounded-lg ">
                  <p className="text-sky-500 font-bold"></p>
                  <p className="text-neutral-950 text-xl">Actions</p>
                  <div className="mt-2 flex ">
                    <button className="text-white bg-slate-800 tracking-wider py-1 px-2 rounded-md font-bold flex items-center gap-2 ">
                      <BsPersonPlus /> Add Customers
                    </button>
                    <button className="text-white ml-5 bg-slate-800 tracking-wider py-1 px-2 rounded-md font-bold flex items-center gap-2 ">
                      <button
                        onClick={() => {
                          navigate("/customize");
                        }}
                        className=" text-white border-2 border-gray-900 font-bold  py-1 px-2 rounded-md flex items-center gap-2 "
                      >
                        <BsPersonPlus /> Manage Customers
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <img src={image} className="w-24 h-24" alt="illustration" />
      </div>
      <div className="flex gap-5">
        <TopNavBarCard bgColor={"bg-red-100"}>
          <div className="  text-gray-600 flex flex-col ">
            <p className="flex gap-1 items-center">
              <span className="text-lg text-yellow-700">
                <BsPersonSquare />
              </span>
              <span className="text-gray-800 text-2xl font-semibold">276</span>
            </p>
            <p>KYC approval pending</p>
          </div>
        </TopNavBarCard>
        <TopNavBarCard bgColor={"bg-red-100"}>
          <div className="  text-gray-600 flex flex-col ">
            <p className="flex gap-1 items-center">
              <span className="text-xl text-red-700">
                <HiOutlineExclamationCircle />
              </span>
              <span className="text-gray-800 text-2xl font-semibold">182</span>
            </p>
            <p>high risk consumers</p>
          </div>
        </TopNavBarCard>
        <TopNavBarCard bgColor={"bg-blue-50"}>
          <div className="  text-gray-600">
            <p className="flex gap-1 items-center">
              <span className="text-lg text-blue-700">
                <TbTicket />
              </span>
              <span className="text-gray-800 text-2xl font-semibold">32</span>
            </p>
            <p>tickets open</p>
          </div>
        </TopNavBarCard>
      </div>
    </div>
  );
};

export default TopNavBarBottomSection;
