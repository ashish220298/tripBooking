import React from 'react';
import styles from './TripCard.module.css';

export default function TripCard({ trip, onBook }) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{trip.label}</div>
      <img src={trip.img} alt={`${trip.from} to ${trip.to}`} />
      <div className={styles.info}>
        <h4>{trip.from} &rarr; {trip.to}</h4>
        <p>{trip.price} <span className={styles.oldPrice}>{trip.oldPrice}</span></p>
      </div>
      <button className={styles.bookBtn} onClick={() => onBook(trip.id)}>Book Now</button>
    </div>
  );
}
