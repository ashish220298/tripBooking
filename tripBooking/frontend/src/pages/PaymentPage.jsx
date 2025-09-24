import React, { useState } from "react";
import styles from "./PaymentPage.module.css";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");

  return (
    <div className={styles.payment}>
      <nav className={styles.nav}>
        <span>Argo</span>
        <span>Home</span>
        <span>My Bookings</span>
        <span>Profile</span>
        <span>Admin</span>
      </nav>
      <h2>Checkout & Payment</h2>
      <div className={styles.paymentGrid}>
        <div className={styles.paymentInfo}>
          <h4>Your Information</h4>
          <input placeholder="Your Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <h4>Payment Method</h4>
          <label>
            <input type="radio" checked={method === "card"} onChange={() => setMethod('card')} />
            Credit or Debit Card
          </label>
          <label>
            <input type="radio" checked={method === "wallet"} onChange={() => setMethod('wallet')} />
            Digital Wallet (e.g., PayPal, Apple Pay)
          </label>
          <input placeholder="Cardholder Name" />
          <div className={styles.expiryCvv}>
            <input placeholder="Expiry Date (MM/YY)" />
            <input placeholder="CVV" />
          </div>
        </div>
        <div className={styles.bookingSummary}>
          <h4>Booking Summary</h4>
          <p><strong>Route:</strong> New York to Boston</p>
          <p><strong>Date:</strong> 2026-05-15</p>
          <p><strong>Time:</strong> 10:30 AM</p>
          <p><strong>Seats:</strong> E5, E6</p>
          <hr />
          <div className={styles.fareRow}>
            <span>Total Fare:</span>
            <strong className={styles.price}>USD 96.00</strong>
          </div>
          <button className={styles.payBtn}>Complete Payment</button>
        </div>
      </div>
    </div>
  );
}
