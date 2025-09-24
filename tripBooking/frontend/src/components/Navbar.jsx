import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Argo</div>
      <div className={styles.links}>
        <NavLink to="/home" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/booking" className={({isActive}) => isActive ? styles.active : ''}>My Bookings</NavLink>
        <NavLink to="/profile" className={({isActive}) => isActive ? styles.active : ''}>Profile</NavLink>
        <NavLink to="/admin" className={({isActive}) => isActive ? styles.active : ''}>Admin</NavLink>
      </div>
    </nav>
  );
}
