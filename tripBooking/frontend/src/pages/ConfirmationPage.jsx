import React from "react";
import styles from "./ConfirmationPage.module.css";

export default function ConfirmationPage() {
  return (
    <div className={styles.confirmation}>
      <nav className={styles.nav}>
        <span>Argo</span>
        <span>Home</span>
        <span>My Bookings</span>
        <span>Profile</span>
        <span>Admin</span>
      </nav>
      <div className={styles.confirmContent}>
        <div className={styles.checkIcon}>&#10003;</div>
        <h2>Booking Confirmed!</h2>
        <p>Your trip is successfully booked. Enjoy your journey!</p>
        <div className={styles.ticketCard}>
          <h3>Flight Ticket</h3>
          <p>Booking ID: 77678799845</p>
          <div className={styles.ticketGrid}>
            <div>
              <strong>LAX</strong>
              <div>New York</div>
              <div>07:30 AM</div>
            </div>
            <span>→</span>
            <div>
              <strong>SFO</strong>
              <div>Boston</div>
              <div>2:00 PM</div>
            </div>
          </div>
          <div>Date: October 26, 2024</div>
          <div>Seats: E5, E6</div>
          <div className={styles.fareRow}>
            Total Fare Paid: <span className={styles.price}>$96.00</span>
          </div>
          <img src="/images/qr.png" alt="QR Code" className={styles.qr} />
          <p>Scan this QR code at the boarding gate</p>
          <div className={styles.ticketBtns}>
            <button className={styles.primaryBtn}>Download Ticket</button>
            <button className={styles.secondaryBtn}>View Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}
