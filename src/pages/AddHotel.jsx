import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

import "./AddHotel.css";

const AddHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    category: "",
    image: "",
  });

  const { hotels, setHotels } = useOutletContext();
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.name.trim() || !formData.location.trim()) {
      alert("Please enter hotel name and location.")
      return
    }

    if(Number(formData.price) <= 0) {
      alert("Price must be greater than zero.")
      return
    }

    if(Number(formData.rating) < 1 || Number(formData.rating) > 5) {
      alert("Rating must be between 1 and 5.")
      return
    }

    const newHotel = {
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      rating: Number(formData.rating),
    };

    setHotels([...hotels, newHotel]);
    alert("Hotel details submitted Successfully!");
    Navigate("/hotels");
  };

  return (
    <div className="add-hotel-page">
      <h1>Add New Hotel</h1>
      <p>Enter the hotel details below.</p>

      <form className="hotel-form" onSubmit={handleSubmit}>
        <label>Hotel Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter hotel name"
          required
        />

        <label>Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter Location"
          required
        />

        <label>Price per Night (₹)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="1"
          placeholder="Enter price"
          required
        />

        <label>Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          step="0.1"
          placeholder="Enter rating"
          required
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Budget">Budget</option>
          <option value="Premium">Premium</option>
          <option value="Luxury">Luxury</option>
          <option value="Resort">Resort</option>
        </select>

        <label>Image URL</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          required
        />
        {formData.image && (
          <div className="image-preview">
            <p>Image Preview</p>
            <img src={formData.image} alt="Hotel Preview" />
          </div>
        )}

        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotel;
