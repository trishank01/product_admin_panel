import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "./style.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);
const items = JSON.parse(localStorage.getItem("apiData"));
const showData = items.dasbhoardPage;
const storageKey = Object.keys(showData.storage);
const storagevalue = Object.values(showData.storage);


export const data = {
  labels: storageKey.map((item, index) => {
    return `${item} Storage ${storagevalue[index]}GB`;
  }),
  datasets: [
    {
      label: "# of Votes",
      data: storagevalue.map((item) => item),
      backgroundColor: ["#A8D582", "#4ED6B8", "#F7604D"],
      borderColor: ["#fff", "#fff", "#fff"],
      borderWidth: 2,
    },
  ],
};

const PieChart = () => {
  return (
    <div className={styles.line_color}>
      <Pie
        data={data}
        style={{ paddingBottom: "20px" }}
        options={({ radius: 140 }, { maintainAspectRatio: false })}
      />
    </div>
  );
};
export default PieChart;
