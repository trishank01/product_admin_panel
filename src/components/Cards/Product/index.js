import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const Product = () => {


  const items = JSON.parse(localStorage.getItem("apiData"));
  const showData = items.productsPage.products;
  const [showForm , setShowForm] = useState(false)


  const productAddHandle = () => {
    setShowForm(!showForm)
  }


  return (
    <>
   {!showForm && <div className={styles.line_color}>
   <h2 className={styles.heading}>Orders List</h2>
   <table className={styles.table_product}>
     <tr>
       <th></th>
       <th>PRODUCT NAME</th>
       <th>UNIT SOLD</th>
       <th>IN STOCK</th>
       <th>EXPIRE DATE</th>
       <th></th>
     </tr>
     {showData.map((item, index) => {
       return (
         <tr key={index + item.unitSold}>
           <td className={styles.checkbox}>
             <input type="checkbox"  />
           </td>
           <td>{'Lorem Ipsum' + " " + item.name }</td>
           <td>{item.unitSold}</td>
           <td>{item.stock}</td>
           <td>{item.expireDate}</td>
           <td > 
             <div className={styles.delete_wrapper}>
             <RiDeleteBin5Line className={styles.delete} />
             </div>
           </td>
         </tr>
       );
     })}
   </table>
   <button className={styles.btn_product} onClick={productAddHandle}>ADD NEW PRODUCT</button>
   <button className={styles.btn_delete}>DELETE SELECTED PRODUCTS</button>
 </div>}
 {showForm && <div className={styles.line_color}>
 <h2 className={styles.heading}>Add new  Product</h2>
 <button className={styles.btn_product} onClick={productAddHandle}>PRODUCT ADDED </button>
  </div>}
 </>
  );
};

export default Product;
