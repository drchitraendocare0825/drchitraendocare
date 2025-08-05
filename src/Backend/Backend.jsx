// components/AppointmentForm.jsx
import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    service: "",
    appointmentDate: "",
    time: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/appointment", formData);
      setMessage(res.data.message || "Appointment booked successfully!");
      setFormData({
        name: "",
        phone: "",
        dob: "",
        gender: "",
        city: "",
        service: "",
        appointmentDate: "",
        time: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto p-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        value={formData.name}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter your mobile"
        required
        value={formData.phone}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="date"
        name="dob"
        required
        value={formData.dob}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <select
        name="gender"
        required
        value={formData.gender}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="city"
        placeholder="Your city"
        required
        value={formData.city}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <select
        name="service"
        required
        value={formData.service}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">-- Choose a Service --</option>
        <option value="Dental Cleaning">Dental Cleaning</option>
        <option value="Root Canal">Root Canal</option>
        <option value="Braces">Braces</option>
        {/* Add more as needed */}
      </select>
      <input
        type="date"
        name="appointmentDate"
        required
        value={formData.appointmentDate}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="time"
        name="time"
        required
        value={formData.time}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition-all"
      >
        {loading ? "Booking..." : "Book an Appointment"}
      </button>

      {message && (
        <p className="md:col-span-2 text-center mt-2 text-sm font-medium text-green-600 dark:text-green-400">
          {message}
        </p>
      )}
    </form>
  );
};

export default AppointmentForm;
