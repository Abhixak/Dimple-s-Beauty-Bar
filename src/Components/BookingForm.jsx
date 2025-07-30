import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const servicesData = {
  "Laser Hair Removal": ["Electrolysis", "Hydra Facial", "Lycon Waxing"],
  "Derma Fillers": [
    "Dermapen",
    "Mesotherapy",
    "Skin Tan Removal",
    "PRP Hair & Skin Treatment",
  ],
  "Vitamin Drips": [
    "Glutathione Drip",
    "B12 Injection",
    "Vitamin D Injection",
    "Lemon Bottle Skin Booster",
    "Lemon Bottle Fat Dissolve",
  ],
  "Haircuts & Hairdressing": [
    "Wash & Blow Dry",
    "Curly Blow Dry",
    "Wash, Haircut & Blow Dry",
    "Wash & Haircut",
    "Patch Test",
  ],
  Waxing: [
    "Waxing - Hollywood",
    "Waxing - Hollywood (Hot Wax)",
    "Waxing - Leg",
  ],
  "Eyebrows & Eyelashes": ["Eyebrow", "Eyelash", "Eyebrow & Eyelash"],
  "Classic Massages": [
    "Swedish Massage",
    "Back Massage",
    "Aromatherapy Massage",
    "Indian Head Massage",
    "Foot & Leg Massage",
  ],
  Facials: [
    "Facial - Deep Cleansing",
    "Facial - Microdermabrasion",
    "Facial - Face Peel",
  ],
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    service: "",
    date: "",
    time: "",
  });

  const [serviceOptions, setServiceOptions] = useState([]);
  const [showCallOptions, setShowCallOptions] = useState(false);

  useEffect(() => {
    if (formData.category) {
      setServiceOptions(servicesData[formData.category]);
      setFormData({ ...formData, service: "" });
    }
  }, [formData.category]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Updated Validation Logic
  const isFormValid = () => {
    const { name, phone, email, category, service, date, time } = formData;

    if (!name || !phone || !email || !category || !service || !date || !time) {
      alert("Please fill in all fields.");
      return false;
    }

    const bookingDate = new Date(date);
    const day = bookingDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (day === 1) {
      alert("We are closed on Mondays. Please choose another date.");
      return false;
    }

    const [hours, minutes] = time.split(":").map(Number);

    if (day === 0) {
      // Sunday: 11:00 - 19:00
      if (hours < 11 || hours > 19 || (hours === 19 && minutes > 0)) {
        alert(
          "On Sundays, booking time should be between 11:00 AM and 7:00 PM."
        );
        return false;
      }
    } else {
      // Other days: 10:00 - 19:00
      if (hours < 10 || hours > 19 || (hours === 19 && minutes > 0)) {
        alert("Booking time should be between 10:00 AM and 7:00 PM.");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const templateParams = {
      from_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      category: formData.category,
      service: formData.service,
      date: formData.date,
      time: formData.time,
    };

    emailjs
      .send(
        "service_wrg5dpf",
        "template_kg70kgs",
        templateParams,
        "oNn4ActVY4pDKNK-6"
      )
      .then(() => {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          category: "",
          service: "",
          date: "",
          time: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="max-w-xl  !mx-auto !mt-6 !p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold !mb-4 text-center">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full !p-2 !mx-1 !my-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full !p-2 !mx-1 !my-2 border rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          className="w-full !p-2 !mx-1 !my-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          className="w-full !p-2 !mx-1 !my-2 border rounded"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {Object.keys(servicesData).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {formData.category && (
          <select
            name="service"
            className="w-full !p-2 !mx-1 !my-2 border rounded"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            {serviceOptions.map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        )}

        <input
          type="date"
          name="date"
          className="w-full !p-2 !mx-1 !my-2 border rounded"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          className="w-full !p-2 !mx-1 !my-2 border rounded"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 text-white !py-2 !mx-1 !my-2 rounded hover:bg-pink-700"
        >
          Book Appointment
        </button>

        {/* Book on Call */}
        {showCallOptions && (
          <div className="w-full !mx-1 !my-2 text-center">
            <span className="block">Contact: +44-7516033509, 01895692086</span>
            <a href="tel:+447516033509" className="block underline text-blue-500 !mt-2">
              Call +44-7516033509
            </a>
            <a href="tel:+4401895692086" className="block underline text-blue-500 !mt-1">
              Call : +44-01895692086
            </a>
          </div>
        )}
        <button
          type="button"
          className="w-full bg-pink-600 text-white !pb-2 !mx-1 !my-2 rounded hover:bg-pink-700"
          onClick={() => setShowCallOptions((v) => !v)}
        >
          <span className="block w-full text-center !mt-2 text-blue-100">
            Book on Call
          </span>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
