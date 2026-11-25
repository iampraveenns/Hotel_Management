import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

import "./AddHotel.css";
import HotelForm from "../components/hotel/HotelForm";

const AddHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    category: "",
    image: "",
    description: "",
    latitude: "",
    longitude: "",
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

    if (!formData.name.trim() || !formData.location.trim()) {
      alert("Please enter hotel name and location.");
      return;
    }

    if (Number(formData.price) <= 0) {
      alert("Price must be greater than zero.");
      return;
    }

    if (Number(formData.rating) < 1 || Number(formData.rating) > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    const newHotel = {
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      rating: Number(formData.rating),
      description: formData.description,
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
    };

    setHotels([...hotels, newHotel]);
    alert("Hotel details submitted Successfully!");
    Navigate("/hotels");
  };

  return (

    <HotelForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isEditing={false}
    />
  );
};

export default AddHotel;
