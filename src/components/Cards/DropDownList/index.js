import React, { useEffect, useState } from "react";
import Avatar from "../ImgaeHolder";
import styles from "./style.module.css";

const Dropdownlist = (props) => {
  const {setChange, data } = props;
  const dataKey = Object.keys(data);
  console.log(dataKey)

  return (
    <div className={styles.wrapperDrop}>
      <h2 className={styles.heading}>List of Accounts</h2>
      <div className={styles.main}>
        <label className={styles.label}>ACCOUNT</label>
        <select
          className={styles.select}
          onChange={(e) => setChange(e.target.value)}
        >
          <option className={styles.option} value="Not_selected">
            Select Option
          </option>
          {dataKey.map((item) => {
            return (
              <option key={item} className={styles.option} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdownlist;
