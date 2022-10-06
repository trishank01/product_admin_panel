import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const errMsg = <p className={styles.err}>Enter Valid Username / Password</p>;

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    setShow(false);
  };

  const passwordHandler = (e) => {
    setpassword(e.target.value);
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json "
        );
        localStorage.setItem("apiData", JSON.stringify(response.data));
        localStorage.setItem(
          "accountsPage",
          JSON.stringify(response.data.accountsPage)
        );
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(response.data.dasbhoardPage)
        );
        localStorage.setItem("products", JSON.stringify(response.data.productsPage.products)
        );
        localStorage.setItem("categories", JSON.stringify(response.data.productsPage.categories)
        );


      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const loginHandler = () => {
    if (username === password && username !== "" && password !== "") {
      setShow(false);
      localStorage.setItem("loginStatus", true);
      navigate("/dashboard");
      console.log("login");
    } else {
      setShow(true);
    }
  };

  return (
    <div className={styles.logincontainer}>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-center">Welcome to Dashboard, Login</h2>
          <label>Username</label>
          <input type="text" onChange={usernameHandler} value={username} />
          <label>Password</label>
          <input type="password" onChange={passwordHandler} value={password} />
          {show && errMsg}
          <button type="submit" className="btn" onClick={loginHandler}>
            Login
          </button>

          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
