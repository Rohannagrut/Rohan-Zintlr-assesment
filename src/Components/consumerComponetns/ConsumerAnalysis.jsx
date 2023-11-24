import React, { useState } from "react";
import FilterButton from "../ui/FilterButton";
import Select from "../ui/Select";
import { HorizontalBarChart } from "../charts/HorizontalBarChart";
const array1 = [200, 400, 500];
const array2 = [400, 300, 500];
const array3 = [100, 600, 600];
const array4 = [300, 550, 200];
const filterByAssociate = [
  { id: 1, name: "Filter By Associate" },
  { id: 2, name: "Associate 2" },
  { id: 3, name: "Associate 3" },
];
const filterByZone = [
  { id: 1, name: "Filter By Zone" },
  { id: 2, name: "Zone 2" },
  { id: 3, name: "Zone 3" },
];
const filterByAccountType = [
  { id: 1, name: "Filter By Account Type" },
  { id: 2, name: "savings" },
  { id: 3, name: "current" },
];
const ConsumerAnalysis = () => {
  const [btn, setBtn] = useState("activity");
  const [filter, setFilter] = useState("week");
  let data;
  if (filter === "week") data = array1;
  if (filter === "month") data = array2;
  if (filter === "year") data = array3;
  if (filter === "all") data = array4;

  return (
    <div className="py-3 px-2 border-[1px] border-gray-300 shadow-sm rounded-lg">
      <h3 className=" text-lg text-gray-800 font-semibold">
        Consumer Analysis
      </h3>
      <header className="flex justify-between border-b-[1px] border-gray-300 ">
        <div className=" flex gap-3 self-end ">
          <button
            className={` ${
              btn === "activity"
                ? "text-blue-700 border-b-2 border-blue-600"
                : "text-gray-700 "
            } transition-all `}
            onClick={() => {
              setBtn("activity");
            }}
          >
            Activity
          </button>
          <button
            className={` ${
              btn === "stock"
                ? "text-blue-700 border-b-2 border-blue-600"
                : "text-gray-700"
            } transition-all  `}
            onClick={() => {
              setBtn("stock");
            }}
          >
            Stock
          </button>
          <button
            className={` ${
              btn === "volume"
                ? "text-blue-700 border-b-2 border-blue-600"
                : "text-gray-700"
            } transition-all  `}
            onClick={() => {
              setBtn("volume");
            }}
          >
            Volume
          </button>
        </div>
        <div className="flex gap-2 self-start mb-2">
          <span onClick={() => setFilter("week")}>
            <FilterButton
              active={filter === "week" ? true : false}
              content={"Past Week"}
            />
          </span>
        </div>
      </header>
      <div className="flex mt-3 gap-3 justify-end ">
        <Select options={filterByAssociate} />
        <Select options={filterByZone} />
        <Select options={filterByAccountType} />
      </div>
      <HorizontalBarChart array={data} />
    </div>
  );
};

export default ConsumerAnalysis;
