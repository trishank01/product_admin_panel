import React, { useState } from "react";
import { FaTachometerAlt, FaShoppingCart, FaUserAlt, FaTimes, FaBars } from "react-icons/fa";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  //
  const [isMobile , setMobile] = useState(false)
  return (
    <div className={styles.nav_bar}>
      <h2 className={styles.logo}>PRODUCT ADMIN</h2>
      <nav className={isMobile ? styles.nav_mobile : styles.nav_link_menu} onClick={() => setMobile(false)}>
        <NavLink to='/dashboard' className={`${styles.nav_link} ${styles.active} ${styles.dashboard}`}>
          <FaTachometerAlt className={styles.icon} />
          Dashboard
        </NavLink>
        <NavLink to='/products' className={`${styles.nav_link} ${styles.products}`}>
          <FaShoppingCart className={styles.icon} />
          Products
        </NavLink>
        <NavLink to='/accounts' className={`${styles.nav_link} ${styles.accounts}`}>
          <FaUserAlt className={styles.icon} />
          Accounts
        </NavLink>
        <NavLink to='/logout' className={`${styles.nav_link} ${styles.log_out_mobile}`}>
          <FaUserAlt className={styles.icon} />
          Logout
        </NavLink>
      </nav>
      <div>
      <div className={styles.hamburger} onClick={() => setMobile(!isMobile)}>
          {isMobile ? <button ><FaTimes className={styles.hamburger_icon}/></button> :  <button><FaBars className={styles.hamburger_icon}/></button>}
         </div>
      </div>
      <div>
        <p className={styles.log_out}>Admin,<span className={styles.log_out_span}>Logout</span></p>
      </div>
    </div>
  );
};
//
export default NavBar;
