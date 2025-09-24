import React from 'react';
import styles from './BookingCard.module.css';

export default function BookingCard({ booking }) {
  return (
    <div className={styles.card}>
      <p><strong>Booking ID:</strong> {booking._id}</p>
      <p><strong>Route:</strong> {booking.trip.from} - {booking.trip.to}</p>
      <p><strong>Date:</strong> {new Date(booking.trip.date).toLocaleDateString()}</p>
      <p><strong>Seats:</strong> {booking.seats.join(', ')}</p>
      <p><strong>Status:</strong> {booking.status}</p>
    </div>
  );
}
