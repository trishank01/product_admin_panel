import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const Avatar = (props) => {
  const { change } = props;

  const getDataFromlocal = () => {
    const data = JSON.parse(localStorage.getItem("accountsPage"));
    if (data) {
      return data
    }
     else {
      return [];
    }
  };

  const getValue = () => {
    const data =  JSON.parse(localStorage.getItem("selectValue"))
    if(data){
      return data
    }else{
      return []
    }
  }

  const [localValue, setLocalValue] = useState(change);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [books, setBooks] = useState(getDataFromlocal());
  const [selectChnage, setselectChange] = useState(getValue());

  console.log(name)

  useEffect(() => {
    if (change === "Admin" ) {
      setselectChange(books.Admin);
    } 
    if (change === "Editor") {
      setselectChange(books.Editor);
    }
    if (change === "Merchant") {
      setselectChange(books.Merchant);
    } 
     if (change === "Customer") {
      setselectChange(books.Customer);
    } 
   localStorage.setItem("selectValue" , JSON.stringify(selectChnage))
 
  }, [books, change , selectChnage]);


  const formChangeHandler = () => {};

  return (
    <div className={styles.container}>
     {selectChnage != null &&  <div className={styles.wrapper_right}>
        <h1 className={styles.heading}>Change Avatar</h1>
        <div className={styles.img_wrapper}>
          <img src={selectChnage.profilePic} alt="" />
          <div className={styles.icon_wrapper}>
            <RiDeleteBin6Line />
          </div>
        </div>
        <button className={styles.btn}>UPLOAD NEW PHOTO</button>
      </div>}
     {selectChnage != null &&  <div className={styles.wrapper}>
        <div className={styles.formInput}>
          <div className={styles.inputWrapper}>
            <div className={styles.oneItem}>
              <label>Account Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
                value={name ? name : selectChnage.name}
                placeholder="Account Name"
                
              />
            </div>
            <div className={styles.oneItem}>
              <label>Account Email</label>
              <input
                type="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email ? email : selectChnage.email}
                placeholder="Account Email"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.oneItem}>
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password ? password : selectChnage.password}
                placeholder="Password"
              />
            </div>
            <div className={styles.oneItem}>
              <label>Re-enter Password</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword ? ConfirmPassword : selectChnage.password}
                placeholder="Re-enter Password"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.oneItem}>
              <label>Phone</label>
              <input
                type="number"
                className="form-control"
                required
                onChange={(e) => setPhone(e.target.value)}
                value={Phone ? Phone : selectChnage.phone}
                placeholder="Phone"
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
      </div>}
    </div>
  );
};

export default Avatar;


// let dataArray = Object.keys(data);
// //console.log(dataArray)
// let arrList = dataArray.map((key) => {
//   return {[key]:data[key]} ;
// });
