import React from "react";
import styles from "./style.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const Categories = () => {
  const items = JSON.parse(localStorage.getItem("apiData"));
  const showData = items.productsPage.categories;

  return (
    <div className={styles.line_color}>
      <h2 className={styles.heading}>Product Categories</h2>
      <table className={styles.table_categories}>
        <tr>
          <th>Product Categories</th>
          <th></th>
        </tr>
        {showData.map((item, index) => {
          return (
            <tr key={index + item}>
              <td>{item}</td>
              <td>
                <div className={styles.delete_wrapper}>
                <RiDeleteBin5Line className={styles.delete}/>
                </div>
        
              </td>
            </tr>
          );
        })}
      </table>
      <button className={styles.btn_product}>ADD NEW CATEGORIES</button>
    </div>
  );
};

export default Categories;
