import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./BookingPage.module.css";

const seatRows = ['A', 'B', 'C', 'D', 'E', 'F'];
const seatCols = [1, 2, 3, 4];

export default function BookingPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const trip = location.state?.trip || {
    from: "New York (NYC)",
    to: "Boston (BOS)",
    date: "October 26, 2024",
    price: "48.00"
  }; // replace with passed trip info or default

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat))
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    else
      setSelectedSeats([...selectedSeats, seat]);
  };

  const handleConfirmBooking = async () => {
    if(selectedSeats.length === 0){
      alert("Please select seats to book");
      return;
    }
    try {
      // Example POST call to your booking API; adjust URL and payload as needed
      const response = await axios.post('http://localhost:5000/api/bookings', {
        tripId: trip._id,
        seats: selectedSeats,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      alert("Booking successful!");
      navigate("/confirmation", { state: { booking: response.data } });
    } catch (error) {
      alert("Booking failed: " + (error.response?.data.message || error.message));
    }
  };

  return (
    <div className={styles.booking}>
      <nav className={styles.nav}>
        <Link to="/home">Home</Link>
        <Link to="/booking">My Bookings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <div className={styles.bookingDetails}>
        <img src="/images/nyc.jpg" alt="New York" className={styles.tripImg}/>
        <div className={styles.details}>
          <h3>Trip Details</h3>
          <p><strong>From:</strong> {trip.from}</p>
          <p><strong>To:</strong> {trip.to}</p>
          <p><strong>Date:</strong> {trip.date}</p>
          <p><strong>Price per seat:</strong> ${trip.price}</p>
        </div>
        <div className={styles.seatSelection}>
          <h4>Select Your Seat</h4>
          <div className={styles.seatGrid}>
            {seatRows.map(row => (
              seatCols.map(col => {
                const seat = `${row}${col}`;
                const selected = selectedSeats.includes(seat);
                return (
                  <div
                    key={seat}
                    className={`${styles.seat} ${selected ? styles.selectedSeat : ''}`}
                    onClick={() => toggleSeat(seat)}
                  >
                    {seat}
                  </div>
                );
              })
            ))}
          </div>
          <div>
            Selected Seats: {selectedSeats.join(", ") || "None"}
          </div>
          <button className={styles.confirmBtn} onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
