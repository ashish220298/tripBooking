import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the API URL if needed based on your setup
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      // Save token, then redirect to home page
      localStorage.setItem("jwtToken", res.data.token);
      navigate("/home");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.centerBox}>
      <div className={styles.loginCard}>
        <div className={styles.iconCircle}>&#9992;</div>
        <h2>Log In to Journey Booking Platform</h2>
        <p>Welcome back! Please enter your credentials to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.forgotRow}>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit" className={styles.primaryBtn}>Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
