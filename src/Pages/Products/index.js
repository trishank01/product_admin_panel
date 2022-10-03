import React, { useState } from "react";
import Categories from "../../components/Cards/Categories";
import Product from "../../components/Cards/Product";
import styles from "./styles.module.css";

const Products = () => {


  return (
    <div className={styles.Categories_container}>
      <h1>Product</h1>
      <div className={styles.wrapper}>
        <Product />
        <Categories />
      </div>
    </div>
  );
};

export default Products;
