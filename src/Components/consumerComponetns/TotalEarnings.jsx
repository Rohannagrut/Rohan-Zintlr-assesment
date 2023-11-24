import React from "react";
import Select from "../ui/Select";
import { LineChart } from "../charts/LineChart";

const options = [
  { id: 1, name: "Past Weak" },
  { id: 2, name: "Past Month" },
  { id: 3, name: "Past Year" },
  { id: 4, name: "All time" },
];
const TotalEarnings = () => {
  return (
    <div className="border-[1px] border-gray-300 rounded-lg px-3 py-2 items-center flex gap-2">
      <div className=" flex flex-col gap-1">
        <p className="text-gray-600 font-medium ">Total Earnings</p>
        <p className="text-lg mb-3 text-gray-800 font-semibold">₹1,321,342</p>
        <Select options={options} />
      </div>
      <div className="h-28 w-40">
        <LineChart />
      </div>
    </div>
  );
};

export default TotalEarnings;
