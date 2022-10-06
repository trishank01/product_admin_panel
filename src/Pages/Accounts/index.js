import React from 'react'
import Dropdownlist from '../../components/Cards/DropDownList'
import Avatar from '../../components/Cards/ImgaeHolder'
import styles from './styles.module.css'


const Accounts = () => {
  return (
    <div className={styles.container}>
    <Dropdownlist/>
     <div className={styles.wrapper}>
     <Avatar/>
     </div>
    </div>
  )
}

export default Accounts