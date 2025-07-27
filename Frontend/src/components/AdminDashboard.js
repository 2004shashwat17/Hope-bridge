import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const d = await axios.get("/api/admin/donations");
        const v = await axios.get("/api/admin/volunteers");
        setDonations(d.data);
        setVolunteers(v.data);
      } catch (err) {
        alert("Failed to load data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <h3>Donations</h3>
      <ul>{donations.map((d, i) => <li key={i}>{d.name} - ${d.amount}</li>)}</ul>

      <h3>Volunteers</h3>
      <ul>{volunteers.map((v, i) => <li key={i}>{v.name} - {v.email}</li>)}</ul>
    </div>
  );
};

export default AdminDashboard;
