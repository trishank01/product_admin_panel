import React, { useState } from "react";
import styles from "./style.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const Avatar = () => {
   
  const getDataFromlocal = () => {
    const data = localStorage.getItem("accountsPage")
    if(data){
        return data
    }else {
        return []
    }
  }

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [stock, setStock] = useState("");
  const [unitSold, setUnitSold] = useState("");
  const [books, setBooks] = useState(getDataFromlocal());
  console.log(books)
  //const [showForm, setShowForm] = useState(false);
  // const [checkbox, setCheckBox] = useState([]);
  const formChangeHandler = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_right}>
        <h1 className={styles.heading}>Change Avatar</h1>
        <div className={styles.img_wrapper}>
          <img src="https://picsum.photos/id/1084/350/350" alt="" />
          <div className={styles.icon_wrapper}>
            <RiDeleteBin6Line />
          </div>
        </div>
        <button className={styles.btn}>UPLOAD NEW PHOTO</button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.formInput}>
          <div className={styles.inputWrapper}>
          <div className={styles.oneItem}>
          <label>Enter Product name</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Product name"
          />
          </div>
         <div className={styles.oneItem}>
         <label>Description</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="please Provide description"
          />
         </div>
          </div>
          <div className={styles.inputWrapper}>
          <div className={styles.oneItem}>
          <label>please enter Expire date</label>
          <input
            type="date"
            className="form-control"
            required
            onChange={(e) => setExpireDate(e.target.value)}
            value={expireDate}
            placeholder="please enter Expire date"
          />
          </div>
        <div className={styles.oneItem}>
        <label>Availble stock</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            placeholder="Availble stock"
          />
        </div>
          </div>
         <div className={styles.inputWrapper}>
        <div className={styles.oneItem}>
        <label>Unit sold</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setUnitSold(e.target.value)}
            value={unitSold}
            placeholder="Unit Sold"
          />
        </div>
         <div className={styles.oneItem}>
         <button type="submit" className={styles.btn}>
           UPDATE YOUR PROFILE
          </button>
         </div>
         </div>
          <button
            type="submit"
            className={styles.btn}
            onClick={formChangeHandler}
          >
            DELELTE YOUR ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
