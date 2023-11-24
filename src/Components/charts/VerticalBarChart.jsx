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

export function VerticalBarChart({ graph1, graph2 }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: graph1,
        backgroundColor: "#b45309",
      },
      {
        label: "Dataset 2",
        data: graph2,
        backgroundColor: "#1e40af",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
