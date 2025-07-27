import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", form);
      alert("Registration successful!");
    } catch (err) {
      alert("Failed to register.");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
