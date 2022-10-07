import React, { useEffect, useState } from 'react'
import Dropdownlist from '../../components/Cards/DropDownList'
import Avatar from '../../components/Cards/ImgaeHolder'
import styles from './styles.module.css'


const Accounts = () => {
  const getDataFromlocal = () => {
    const data = JSON.parse(localStorage.getItem("accountsPage"));
    if (data) {
      return data;
    } else {
      return [];
    }
  };


  const [books, setBooks] = useState(getDataFromlocal());
  const [change, setChange] = useState({});


  return (
    <div className={styles.container}>
    <Dropdownlist change={change} setChange={setChange} data={books}/>
    <div className={styles.wrapper}>
        <Avatar change={change} />
      </div>
    </div>
  )
}

export default Accounts