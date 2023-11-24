import React from "react";
import { BsPeopleFill, BsInfoCircleFill } from "react-icons/bs";
import peoples from "../../assets/heroicons_user-group-20-solid.jpg";
const ConsumerCount = () => {
  return (
    <div className=" w-fit flex items-center  rounded-lg  border-[1px] border-gray-100  ">
      <div className="flex items-center gap-2 bg-blue-200/50 py-3 px-4 rounded-lg">
        <span className="text-4xl text-blue-800">
          <img src={peoples} />
        </span>
        <p className="flex flex-col items-center">
          <span className=" text-gray-600">Total Customers</span>
          <span className="text-2xl text-gray-900 font-semibold">1,342</span>
        </p>
      </div>
      <div className="flex  px-5  flex-col gap-2">
        <div className="flex gap-5 ">
          <p className="flex gap-6 ">
            <span className="flex items-center gap-2 text-gray-700 text-sm">
              Diect Consumers
              <span className="text-xs text-blue-700">
                <BsInfoCircleFill />{" "}
              </span>
            </span>
            <span className="text-lg text-gray-800 font-semibold">342</span>
          </p>
          <p className="flex gap-6 items-center">
            <span className="flex items-center gap-1 text-gray-700 text-sm">
              Through Field Executives
              <span className="text-xs text-blue-700">
                <BsInfoCircleFill />{" "}
              </span>
            </span>
            <span className="text-lg text-gray-800 font-semibold">400</span>
          </p>
        </div>
        <div className=" flex gap-5">
          <p className="flex gap-3 items-center">
            <span className="flex items-center gap-1 text-gray-700 text-sm">
              Through Associates
              <span className="text-xs text-blue-700">
                <BsInfoCircleFill />{" "}
              </span>
            </span>
            <span className="text-lg text-gray-800 font-semibold">300</span>
          </p>
          <p className="flex gap-5 items-center">
            <span className="flex items-center gap-1 text-gray-700 text-sm">
              Through Sales Executives
              <span className="text-xs text-blue-700">
                <BsInfoCircleFill />
              </span>
            </span>
            <span className="text-lg text-gray-800 font-semibold">300</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsumerCount;
