import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

export default function AdminPage() {
  // Sample data to display trips/bookings (replace with real API data in production)
  const [trips, setTrips] = useState([
    { id: "T001", route: "London to Paris", departure: "06:00 AM", arrival: "04:00 PM", price: "$70.00", seats: 50 },
    { id: "T002", route: "Berlin to Munich", departure: "08:30 AM", arrival: "03:00 PM", price: "$120.00", seats: 50 },
    { id: "T003", route: "Rome to Florence", departure: "10:00 AM", arrival: "01:00 PM", price: "$45.00", seats: 60 }
  ]);

  const [bookings] = useState([
    { id: "B1001", user: "Alice Smith", route: "London to Paris", date: "2025-07-26", seats: "A1, A2", status: "Confirmed", qr: true },
    { id: "B1002", user: "Bob Johnson", route: "Rome to Florence", date: "2025-07-24", seats: "C5", status: "Pending", qr: false },
    { id: "B1003", user: "Charlie Brown", route: "Berlin to Munich", date: "2025-07-30", seats: "F13, F14, F15", status: "Confirmed", qr: true }
  ]);

  const [showAddTripModal, setShowAddTripModal] = useState(false);
  const [newTrip, setNewTrip] = useState({
    route: "",
    departure: "",
    arrival: "",
    price: "",
    seats: ""
  });

  const handleInputChange = (e) => {
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  };

  const handleAddTripSubmit = (e) => {
    e.preventDefault();
    // Normally validate inputs here

    // For demo, add the new trip with generated ID into trips state
    const id = `T${(trips.length + 1).toString().padStart(3, "0")}`;
    setTrips([...trips, { id, ...newTrip }]);
    setNewTrip({ route: "", departure: "", arrival: "", price: "", seats: "" });
    setShowAddTripModal(false);
  };

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <div className="logo">Argo</div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/booking">My Bookings</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin" className="active">Admin</Link>
        </div>
      </nav>
      <main>
        <h1>Admin Dashboard</h1>

        {/* Overview Cards */}
        <div className="overview-cards">
          <div className="card">
            <span className="icon">🛣️</span>
            <div className="count">23</div>
            <div>Total Trips</div>
          </div>
          <div className="card">
            <span className="icon">📋</span>
            <div className="count">125</div>
            <div>Total Bookings</div>
          </div>
          <div className="card">
            <span className="icon">🕑</span>
            <div className="count">8</div>
            <div>Upcoming Departures</div>
          </div>
        </div>

        <section>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
            <span style={{fontWeight: "600"}}>Trip Management</span>
            <div>
              <button>All Trips</button>
              <button style={{marginLeft: "6px"}} onClick={() => setShowAddTripModal(true)}>+ Add New Trip</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Route</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Price</th>
                <th>Total Seats</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trips.map(trip => (
                <tr key={trip.id}>
                  <td>{trip.id}</td>
                  <td>{trip.route}</td>
                  <td>{trip.departure}</td>
                  <td>{trip.arrival}</td>
                  <td>{trip.price}</td>
                  <td>{trip.seats}</td>
                  <td className="actions">
                    <button className="edit" title="Edit">&#9998;</button>
                    <button className="delete" title="Delete">&#128465;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px"}}>
            <span style={{fontWeight: "600"}}>Booking Management</span>
            <div>
              <button>All Bookings</button>
              <button style={{marginLeft: "6px"}}>Verify QR</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>User</th>
                <th>Trip Route</th>
                <th>Date</th>
                <th>Seats</th>
                <th>Status</th>
                <th>QR Verified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.user}</td>
                  <td>{b.route}</td>
                  <td>{b.date}</td>
                  <td>{b.seats}</td>
                  <td>
                    <span style={{
                      background: b.status === "Confirmed" ? "#e0ffe0" : "#fffec0",
                      color: b.status === "Confirmed" ? "#238A23" : "#d2aa00",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                    }}>
                      {b.status}
                    </span>
                  </td>
                  <td style={{textAlign: "center"}}>
                    {b.qr
                      ? <span style={{color: "green", fontWeight: "bold"}}>&#9679;</span>
                      : <span style={{color: "#bbb"}}>&#9675;</span>
                    }
                  </td>
                  <td className="actions">
                    <button className="edit" title="Edit">&#9998;</button>
                    <button className="delete" title="Delete">&#128465;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {showAddTripModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Trip</h2>
            <form onSubmit={handleAddTripSubmit}>
              <input type="text" name="route" placeholder="Route" value={newTrip.route} onChange={handleInputChange} required />
              <input type="text" name="departure" placeholder="Departure" value={newTrip.departure} onChange={handleInputChange} required />
              <input type="text" name="arrival" placeholder="Arrival" value={newTrip.arrival} onChange={handleInputChange} required />
              <input type="text" name="price" placeholder="Price" value={newTrip.price} onChange={handleInputChange} required />
              <input type="number" name="seats" placeholder="Total Seats" value={newTrip.seats} onChange={handleInputChange} required />
              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowAddTripModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
