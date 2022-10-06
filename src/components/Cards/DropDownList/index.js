import React from "react";
import styles from "./style.module.css";

const Dropdownlist = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>List of Accounts</h2>
     <div className={styles.main}>
     <label className={styles.label} for="cars">Choose a car</label>
      <select className={styles.select} name="cars" id="cars">
        <option className={styles.option} value="Not_selected">Select Option</option>
        <option className={styles.option} value="volvo">Volvo</option>
        <option className={styles.option}value="saab">Saab</option>
        <option className={styles.option}value="mercedes">Mercedes</option>
        <option className={styles.option}value="audi">Audi</option>
      </select>
     </div>
    </div>
  );
};

export default Dropdownlist;
