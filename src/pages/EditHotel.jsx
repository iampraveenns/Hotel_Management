import { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

const EditHotel = () => {
  const { id } = useParams();
  const { hotels, setHotels } = useOutletContext();
  const navigate = useNavigate();

  const hotel = hotels.find((item) => item.id === Number(id));
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    category: "",
    image: "",
  });

  if (!hotel) {
    return <h2>Hotel not found!</h2>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.value]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedHotel = {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
    };

    setHotels(
      hotels.map((item) => (item.id === Number(id) ? updatedHotel : item)),
    );

    alert("Hotel updated successfully!");
    navigate("/hotels");
  };
  return (
    <div>
      <h1>Edit Hotel</h1>
      <p>Update the hotel information.</p>

      <form className="hotel-form" onSubmit={handleChange}>
        <label>Hotel Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>Price per Night</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="1"
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
          required
        />

        <label>Category</label>
        <select name="category" value={formData.category} required>
          <option value="">Select Category</option>
          <option value="Budget">Budget</option>
          <option value="Premium">Premium</option>
          <option value="Luxury">Luxury</option>
          <option value="Resort">Resort</option>
        </select>

        <label>Image URL</label>
        <input name="image" value={formData.image}  onChange={handleChange} required/>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditHotel;
