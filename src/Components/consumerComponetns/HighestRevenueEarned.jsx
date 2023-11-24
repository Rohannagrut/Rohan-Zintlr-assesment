import React, { useState } from "react";
import Select from "../ui/Select";
import FilterButton from "../ui/FilterButton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
};

const labels = [1, 2, 3, 4, 5];

const HighestRevenueEarned = () => {
  let array1;
  let array2;
  const [time, setTime] = useState("Past Week");
  if (time === "Past Week") {
    array1 = [200, 300, 700, 600, 300];
    array2 = [400, 500, 800, 900, 300];
  }
  if (time === "Past Month") {
    array1 = [400, 600, 700, 600, 300];
    array2 = [400, 500, 800, 200, 500];
  }
  if (time === "Past Year") {
    array1 = [400, 500, 300, 600, 300];
    array2 = [400, 800, 500, 200, 500];
  }
  if (time === "All time") {
    array1 = [400, 600, 700, 300, 200];
    array2 = [400, 500, 500, 400, 500];
  }
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: array1,
        backgroundColor: "#2563eb",
      },
      {
        label: "Transection Amount",
        data: array2,
        backgroundColor: "#172554",
      },
    ],
  };
  return (
    <div className="p-3 rounded-lg border-[1px] border-gray-200">
      <header className="flex flex-col gap-3">
        <div className="flex gap-18 ">
          <h3 className="flex-1 font-semibold text-gray-800">
            Highest Revenue Earned
          </h3>
          <span className="">
            <Select
              options={[
                { name: "Top 1", id: 1 },
                { name: "Top 2", id: 2 },
                { name: "Top 3", id: 3 },
                { name: "Top 4", id: 4 },
                { name: "Top 5", id: 5 },
              ]}
            />
          </span>
        </div>
        <div className="flex gap-2">
          <span
            onClick={() => {
              setTime("Past Week");
            }}
          >
            <FilterButton
              type={"small"}
              content={"Past Week"}
              active={time === "Past Week" ? true : false}
            />
          </span>
          <span
            onClick={() => {
              setTime("Past Month");
            }}
          >
            <FilterButton
              type={"small"}
              content={"Past Month"}
              active={time === "Past Month" ? true : false}
            />
          </span>
          <span
            onClick={() => {
              setTime("Past Year");
            }}
          >
            <FilterButton
              type={"small"}
              content={"Past Year"}
              active={time === "Past Year" ? true : false}
            />
          </span>
          <span
            onClick={() => {
              setTime("All time");
            }}
          >
            <FilterButton
              type={"small"}
              content={"All time"}
              active={time === "All time" ? true : false}
            />
          </span>
        </div>
      </header>
      <div className="p-3 h-72 w-[19rem]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default HighestRevenueEarned;
