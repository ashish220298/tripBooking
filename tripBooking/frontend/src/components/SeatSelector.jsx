import React from 'react';
import styles from './SeatSelector.module.css';

export default function SeatSelector({ rows, cols, selectedSeats, onToggle }) {
  return (
    <div className={styles.seatGrid}>
      {rows.map(row => (
        cols.map(col => {
          const seat = `${row}${col}`;
          const isSelected = selectedSeats.includes(seat);
          return (
            <div
              key={seat}
              className={`${styles.seat} ${isSelected ? styles.selected : ''}`}
              onClick={() => onToggle(seat)}
            >
              {seat}
            </div>
          );
        })
      ))}
    </div>
  );
}
