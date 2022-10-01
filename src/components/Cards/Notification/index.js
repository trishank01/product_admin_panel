import React from "react";
import styles from "./style.module.css";

const Notification = () => {
  const items = JSON.parse(localStorage.getItem("apiData"));
  const showData = items.dasbhoardPage.notifications;
  return (
    <div className={styles.line_color}>
      <h2 className={styles.heading}>Notification List</h2>
     <div className={styles.multi_card_wrapper}>
     {showData.map((item, index) => {
        return (
          <div className={styles.Notification_card} key={index + item.time}>
            <div className={styles.img_wrapper}>
              <img src={item.pic} alt="dp" />
            </div>
            <div>
              <p className={styles.para}>
                <span className={styles.text_1}>{item.message.split(" ").slice(0, 1)}</span>
                <span className={styles.text_2}>&#32;{item.message.split(" ").slice(1, 2)}</span>
                <span className={styles.text_3}>&#32;{item.message.split(" ").slice(2, 7).join(" ")}</span>
                <span className={styles.text_4}>&#32;{item.message.split(" ").slice(7, 10).join(" ")}</span>
                <span className={styles.text_3}>&#32;{item.message.split(" ").slice(10, 13).join(" ")}</span>
                </p>
              <p className={styles.time}>{item.time} ago</p>
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default Notification;
