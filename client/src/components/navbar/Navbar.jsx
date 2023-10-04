import React, { useContext } from 'react';
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuhtContext';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext);
    const handleLogout = () => {
      dispatch({type: "LOGOUT"});
    }
  return (
    <div className={styles.homeHeader}>
    <h1>Parking App</h1>
    <Link className={`${styles.logout} ${styles.link}`}   onClick={handleLogout}>
    {user && "LOGOUT"}
    </Link>
    </div>
  )
}

export default Navbar