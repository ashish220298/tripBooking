import React from "react";
import { Navigate } from "react-router-dom";
import { getUserFromToken } from "../utils/auth";

export default function AdminRoute({ children }) {
  const user = getUserFromToken();
  if (user && user.role === "admin") {
    return children;
  }
  return <Navigate to="/" />;
}
