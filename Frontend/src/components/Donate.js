import React, { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [form, setForm] = useState({ name: "", email: "", amount: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/donations", form);
      alert("Donation successful! Check your email.");
    } catch (error) {
      alert("Error submitting donation.");
    }
  };

  return (
    <div className="form-container">
      <h2>Donate</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="amount" type="number" placeholder="Amount" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
