import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const Categories = () => {
  const getlocalStorageData = () => {
    const items = JSON.parse(localStorage.getItem("categories"));
    if (items) {
      return items;
    } else {
      return [];
    }
  };

  const [Locatdata, setLocalData] = useState(getlocalStorageData());
  const [name, setName] = useState("");
  const [showForm , setshowFrom] = useState(false)
  //const [inputValue , setinputValue] = useState("")

  useEffect(() => {
    localStorage.setItem("categories" , JSON.stringify(Locatdata))
  }, [Locatdata])

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    let data = name;
    setLocalData([...Locatdata, data]);
    setName("");
    setshowFrom(!showForm)
  };


  return (
    <>
       {!showForm &&  <div className={styles.line_color}>
        <h2 className={styles.heading}>Product Categories</h2>
        <table className={styles.table_categories}>
          <thead>
            <tr>
              <th>Product Categories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Locatdata.map((item, index) => {
              return (
                <tr key={index + item}>
                  <td>{item}</td>
                  <td>
                    <div className={styles.delete_wrapper}>
                      <RiDeleteBin5Line className={styles.delete} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className={styles.btn_product} onClick={() => setshowFrom(!showForm)}>ADD NEW CATEGORIES</button>
      </div>}
      {showForm &&   <div className={styles.line_color}>
        <div className={styles.formInput}>
          <form className={styles.form_wrapper} onSubmit={handleAddBookSubmit}>
            <label className={styles.heading}>Enter categories name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter categories name"
            />
            <button type="submit" className={styles.btn}>Add categories</button>
            <button className={styles.btn} onClick={() => setshowFrom(!showForm)}>Cancle</button>
          </form>
        </div>
      </div>}
    </>
  );
};

export default Categories;
