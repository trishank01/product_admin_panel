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
import { Bar } from "react-chartjs-2";
ChartJS.defaults.color = "#fff";
Legend.defaults.color = "#fff";



const BarChart = () => {

  const items = JSON.parse(localStorage.getItem("apiData"));
const showData = items.dasbhoardPage;
console.log( "showData" ,showData)

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

 const options = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = Object.keys(showData.performance);


 const data = {
  labels,
  datasets: [
    {
      label: 'Hits',
      data: Object.values(showData.performance),
      backgroundColor: labels.map((item) => item),
      barPercentage: 0.3
    },
 
  ],
};

  return (
    <div className={styles.line_color}>
      <h2 className={styles.heading}>Performance</h2>
      <Bar options={options} data={data}  />
    </div>
  );
};

export default BarChart;
