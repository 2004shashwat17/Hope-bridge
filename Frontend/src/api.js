// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Your backend URL
});

// Attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// ---- Donations ----
export const createDonation = (data) => API.post("/api/donations", data);
export const getDonations = () => API.get("/api/admin/donations");

// ---- Volunteers ----
export const createVolunteer = (data) => API.post("/api/volunteers", data);
export const getVolunteers = () => API.get("/api/admin/volunteers");

// ---- Auth ----
export const loginUser = (data) => API.post("/api/auth/login", data);
export const registerUser = (data) => API.post("/api/auth/register", data);

export default API;
