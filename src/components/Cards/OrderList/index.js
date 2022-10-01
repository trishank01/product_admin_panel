import React from "react";
import styles from "./style.module.css";
import { GoPrimitiveDot } from "react-icons/go";

const OrderList = () => {
  const items = JSON.parse(localStorage.getItem("apiData"));
  const showData = items.dasbhoardPage.orders;
  //   const color = getComputedStyle(document.documentElement).getPropertyValue('--dot-color')
  const dot = {
    color: "#D9534F",
    filter: "drop-shadow(0px 0px 8px #D9534F)",
  };
  const dot1 = {
    color: "#EFC54B",
    filter: "drop-shadow(0px 0px 8px #EFC54B)",
  };
  const dot2 = {
    color: "#9BE64D",
    filter: "drop-shadow(0px 0px 8px #9BE64D)",
  };
  const dot3 = {
    color: "orange",
    filter: "drop-shadow(0px 0px 8px orange)",
  };
  const CssArray = [];

  return (
    <div className={styles.line_color}>
      <h2 className={styles.heading}>Orders List</h2>
      <table>
        <tr>
          <th>ORDER NO.</th>
          <th>STATUS</th>
          <th>OPERATORS</th>
          <th>LOCATION</th>
          <th>DISTANCE</th>
          <th>START DATE</th>
          <th>EST DELIVERY DUE</th>
        </tr>
        {showData.map((item, index) => {
          if (item.status === "Cancelled") {
            CssArray.length = 0;
            CssArray.push(dot);
          } else if (item.status === "Pending") {
            CssArray.length = 0;
            CssArray.push(dot1);
          } else if (item.status === "Moving") {
            CssArray.length = 0;
            CssArray.push(dot2);
          } else if (item.status === "Delivered") {
            CssArray.length = 0;
            CssArray.push(dot3);
          }
          return (
            <tr key={index + item.distance}>
              <td>#{item.orderNo}</td>
              <td>
                <GoPrimitiveDot className={styles.dot} style={CssArray[0]} />
                {item.status}
              </td>
              <td>{item.operators}</td>
              <td>{item.location}</td>
              <td>{item.distance}Km</td>
              <td>{item.startDate}</td>
              <td>{item.deliveryDate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default OrderList;
