import React, { useState } from "react";
import styles from "./style.module.css";
const FromInput = (props) => {
  const {label , errorMessage , onChange , id , ...inputprops } = props;
  const [focused , setFocused] = useState(false)

   const handleFocus = (e) => {
    setFocused(true)
   };

   
  return (
    <div className={styles.formInput}>
      <label>{label}</label>
        <input {...inputprops}  onChange={onChange} onBlur={handleFocus}/>
        <span>{errorMessage}</span>
    </div>
  );
};

export default FromInput;
