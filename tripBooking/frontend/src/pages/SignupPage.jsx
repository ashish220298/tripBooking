import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./SignupPage.module.css";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        fullName,
        email,
        password,
      });
      alert("Account created successfully! Please log in.");
      navigate("/");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className={styles.centerBox}>
      <div className={styles.signupCard}>
        <div className={styles.iconCircle}>&#9992;</div>
        <h2>Create Your Account</h2>
        <p>Join us today and get started</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button type="submit" className={styles.primaryBtn}>Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
}
