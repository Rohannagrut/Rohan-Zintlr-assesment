import React from "react";
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
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Very Active",
  "Moderately Active",
  "Least Active",
];

export function HorizontalBarChart({ array }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: array,
        backgroundColor: "#1d4ed8",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
