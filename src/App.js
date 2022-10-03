import "./App.css";
import React, { useEffect, useState }  from "react";
import Dashboard from "./Pages/DashBoard";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Accounts from "./Pages/Accounts";
import Login from "./components/login";
//const axios = require("axios");


function App() {

  return (

    <div className="App">
     <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="accounts" element={<Accounts />} />
      </Routes>
    </div>
  );
}

export default App;

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const response = await axios.get(
//         "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json "
//       );
//       localStorage.setItem(
//         "apiData",
//         JSON.stringify(response.data)
//       );
//       localStorage.setItem(
//         "accountsPage",
//         JSON.stringify(response.data.accountsPage)
//       );
//       localStorage.setItem(
//         "dashboardPage",
//         JSON.stringify(response.data.dasbhoardPage)
//       );
//       localStorage.setItem(
//         "productsPage",
//         JSON.stringify(response.data.productsPage)
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   getData();
// }, []);



  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
  //     );
  //     setMydata(res.data);
  //   } catch (error) {
  //     console.log("error ", error);
  //   }
  // };