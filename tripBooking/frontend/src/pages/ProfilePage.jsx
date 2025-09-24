import React from "react";
import styles from "./ProfilePage.module.css";
import { Link } from "react-router-dom";


export default function ProfilePage() {
  return (
    <div>
     <nav className={styles.nav}>
        <Link to="/home" className={styles.navLink}>Home</Link>
        <Link to="/booking" className={styles.navLink}>My Bookings</Link>
        <Link to="/profile" className={styles.navLinkActive}>Profile</Link>
        <Link to="/admin" className={styles.navLink}>Admin</Link>
      </nav>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
          <h2>Ashish sharma</h2>
          <p>as4446013@gmail.com</p>
        </div>
        <section className={styles.accountSection}>
          <h3>Account</h3>
          <div className={styles.accountInfo}>
            <p><strong>Name:</strong> ASHISH SHARMA <button className={styles.changeBtn}>Change</button></p>
            <p><strong>Email:</strong> as4446013@gmail.com <button className={styles.addEmailBtn}>Add another email</button></p>
            <p><strong>Password:</strong> ******** <button className={styles.changeBtn}>Change</button></p>
            <p><strong>Phone number:</strong> +917017511942 <button className={styles.changeBtn}>Change</button></p>
            <p><strong>Address:</strong> Agra INDIA <button className={styles.changeBtn}>Change</button></p>
            <p><strong>Date of birth:</strong> 01-01-1992</p>
          </div>
        </section>
        <section className={styles.bookingSection}>
          <h3>Upcoming Bookings</h3>
          <div className={styles.bookingCard}>Booking ID: Booking 112 ...</div>
        </section>
        <section className={styles.bookingSection}>
          <h3>Past Bookings</h3>
          <div className={styles.bookingCard}>Booking ID: Booking113 ...</div>
        </section>
      </div>
    </div>
  );
}
