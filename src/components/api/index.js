import React, { useEffect, useState } from "react";
const axios = require("axios");


const Api = () => {
    let [apiData, setMydata] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
      );
      setMydata(res.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    localStorage.setItem("apiData", JSON.stringify(apiData));
  }, [apiData]);

  console.log(apiData);
  return (
    <div>

    </div>
  )
}

export default Api