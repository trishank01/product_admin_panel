import "./App.css";
import React , {useEffect, useState} from "react";
import Dashboard from "./Pages/DashBoard";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Accounts from "./Pages/Accounts";
const axios = require('axios');

function App() {
   const [myData , setMydata] = useState([])


  useEffect(() => {
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then((response) => setMydata(localStorage.setItem('apiData' , JSON.stringify(response.data))))
  },[])
   


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="dashboard" element={<Dashboard myData={myData} />} />
        <Route path="products" element={<Products />} />
        <Route path="accounts" element={<Accounts />} />
      </Routes>
    </div>
  );
}

export default App;
