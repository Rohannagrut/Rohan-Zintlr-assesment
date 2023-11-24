import React, { useState } from "react";
import FilterButton from "../ui/FilterButton";
import { VerticalBarChart } from "../charts/VerticalBarChart";
const array1 = [100, 800, 600, 200, 400];
const array2 = [100, 400, 300, 200, 700];
const array3 = [800, 400, 400, 600, 800];
const array4 = [800, 300, 600, 700, 200];
const array5 = [300, 800, 700, 200, 700];
const array6 = [800, 500, 300, 400, 300];
const array7 = [200, 800, 660, 280, 450];
const array8 = [100, 800, 600, 200, 400];

const GreatestTransection = () => {
  const [filter, setFilter] = useState("week");
  let graph1;
  let graph2;
  if (filter === "week") {
    graph1 = array1;
    graph2 = array2;
  }
  if (filter === "month") {
    graph1 = array3;
    graph2 = array4;
  }
  if (filter === "year") {
    graph1 = array5;
    graph2 = array6;
  }
  if (filter === "all") {
    graph1 = array7;
    graph2 = array8;
  }
  return (
    <div className="p-3 border-[1px] border-gray-300 rounded-lg shadow-md ">
      <header>
        <p className="text-gray-800 text-lg font-semibold mb-2">
          5 Greatest Transactions
        </p>
        <div className="flex gap-3">
          <span
            onClick={() => {
              setFilter("week");
            }}
          >
            <FilterButton
              content={"Past Week"}
              type={"small"}
              active={filter === "week" ? true : false}
            />
          </span>
          <span
            onClick={() => {
              setFilter("month");
            }}
          >
            <FilterButton
              content={"Past Month"}
              type={"small"}
              active={filter === "month" ? true : false}
            />
          </span>
          <span
            onClick={() => {
              setFilter("year");
            }}
          >
            <FilterButton
              content={"Past year"}
              type={"small"}
              active={filter === "year" ? true : false}
            />
          </span>
          <span
            onClick={() => {
              setFilter("all");
            }}
          >
            <FilterButton
              content={"All Time"}
              type={"small"}
              active={filter === "all" ? true : false}
            />
          </span>
        </div>
      </header>
      <main className="h-[19rem] w-[19rem]">
        <VerticalBarChart graph1={graph1} graph2={graph2} />
      </main>
    </div>
  );
};

export default GreatestTransection;
