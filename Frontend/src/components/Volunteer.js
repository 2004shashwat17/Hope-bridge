import React, { useState } from "react";
import axios from "axios";

const Volunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", availability: "", interest: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/volunteers", form);
      alert("Thank you for signing up! Check your email.");
    } catch (error) {
      alert("Error submitting volunteer form.");
    }
  };

  return (
    <div className="form-container">
      <h2>Volunteer Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="availability" placeholder="Availability" onChange={handleChange} />
        <input name="interest" placeholder="Interest Areas" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Volunteer;
