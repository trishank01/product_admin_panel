import React from "react";
import LineChart from "../../components/Cards/LineChart";
import BarChart from "../../components/Cards/BarChart";
import styles from "./styles.module.css";
import PieChart from "../../components/Cards/PieChart";
import Notification from "../../components/Cards/Notification";
import OrderList from "../../components/Cards/OrderList";

const Dashboard = () => {

  return (
    <div className={styles.dashboard_containerr}>
      <h1 className={styles.headline}>Welcome Back, admin</h1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LineChart />
          <BarChart />
        </div>
        <div className={styles.wrapper}>
          <PieChart />
         <Notification/>
        </div>
        <div className={styles.wrapper}>
          <OrderList/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
