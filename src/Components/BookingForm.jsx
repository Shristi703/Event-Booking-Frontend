import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    fullName: "",
    email: "",
    phone: "",
    tickets: 1,
    eventDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "tickets" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );

      console.log(res.data);
      alert("🎉 Booking successful!");

      // reset form
      setFormData({
        eventName: "",
        fullName: "",
        email: "",
        phone: "",
        tickets: 1,
        eventDate: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900/60 border border-slate-700 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Book Your Seat 🎫
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Tech Conference 2025"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="9876543210"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Tickets
            </label>
            <input
              type="number"
              name="tickets"
              min="1"
              value={formData.tickets}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Notes (optional)
          </label>
          <textarea
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Any special requests?"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 font-semibold transition"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
