import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const cities = ["New York", "Boston", "Chicago", "Los Angeles", "Miami"];

const trips = [
  {
    _id: "650a2bfef1234abc1234ef56",
    label: "Popular",
    from: "New York",
    to: "Boston",
    price: "$48",
    oldPrice: "$64",
    img: ""
  },
  {
    _id: "650a2bfef1234abc1234ef57",
    label: "25% OFF",
    from: "Chicago",
    to: "Los Angeles",
    price: "$156",
    oldPrice: "$208",
    img: ""
  },
  {
    _id: "650a2bfef1234abc1234ef58",
    label: "21% OFF",
    from: "Atlanta",
    to: "Miami",
    price: "$129",
    oldPrice: "$164",
    img: ""
  }
];

export default function HomePage() {
  const navigate = useNavigate();
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleBookNow = (trip) => {
    navigate("/booking", { state: { trip } });
  };

  const handleSearch = () => {
    alert(`Searching trips from ${from} to ${to} on ${date}`);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>Argo</Link>
        <Link to="/home">Home</Link>
        <Link to="/booking">My Bookings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <header className={styles.banner}>
        <h2>Find Your Next Journey</h2>
        <p>Discover available trips and book your seats with ease.</p>
        <div className={styles.search}>
          <input
            list="cities"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            list="cities"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <datalist id="cities">
            {cities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>
            Search Trips
          </button>
        </div>
      </header>
      <section className={styles.trips}>
        <h3>Available Trips</h3>
        <div className={styles.tripList}>
          {trips.map((trip) => (
            <div className={styles.tripCard} key={trip._id}>
              <img src={trip.img} alt={`${trip.from} to ${trip.to}`} />
              <span className={styles.label}>{trip.label}</span>
              <div>
                <h4>{trip.from} &#8594; {trip.to}</h4>
                <p>Starting from {trip.price} <span className={styles.oldPrice}>{trip.oldPrice}</span></p>
              </div>
              <button className={styles.bookBtn} onClick={() => handleBookNow(trip)}>Book Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
