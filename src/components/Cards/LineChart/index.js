import React from "react";
import styles from "./style.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.defaults.color = "#fff";
Legend.defaults.color = "#fff";
const items = JSON.parse(localStorage.getItem("apiData"));
const showData = items.dasbhoardPage.latestHits;


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = showData.months.map((item) => item);

export const data = {
  labels,
  datasets: [
    {
      label: "Latest Hits",
      data: showData.latest.map((item) => item),
      borderColor: "#DF6280",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fontColor: "#fff",
    },
    {
      label: "Popular Hits",
      data: showData.popular.map((item) => item),
      borderColor: "#4BC0C0",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      color: "#fff",
    },
    {
      label: "Featured",
      data: showData.featured.map((item) => item),
      borderColor: "#9966FF",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      color: "#fff",
    },
  ],
};




const LineCharts = () => {
  return (
    <div className={styles.line_color}>
        <h2 className={styles.heading}>Latest Hits</h2>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineCharts;
