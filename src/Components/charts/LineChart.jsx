import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

const labels = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export const data = {
  labels,
  datasets: [
    {
      data: [100, 350, 400, 500, 650, 300, 750],
      borderColor: "#1e3a8a",
      backgroundColor: "#1e3a8a",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
