import React, { useContext, useState } from "react";
import styles from "./login.module.css";
import { AuthContext } from "../../context/AuhtContext";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev)=> ({ ...prev, [e.target.id]: [e.target.value]}))
  };

  const handleClick =  async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START"});
    try {
      const res = await axios.post("/api/auth/login", credentials);
      if(res.data){
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: {message: "You are not allowed"}
        })
      }

    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Parking APP</h1>
      <h2>Login</h2>
      <input
        className={styles.inputFields}
        type="email"
        id="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        className={styles.inputFields}
        type="password"
        id="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button className={styles.loginButton} onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
