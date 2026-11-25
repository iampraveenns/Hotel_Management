import { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

import HotelForm from "../components/hotel/HotelForm";

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
    description: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const existingHotel = hotels.find(
      item => item.id === Number(id)
    )

    if (existingHotel) {
      setFormData({
        ...existingHotel,
        description: existingHotel.description || "",
        latitude: existingHotel.latitude ?? "",
        longitude: existingHotel.longitude ?? "",
      });
    }
  }, [id]);

  if (!hotel) {
    return <h2>Hotel not found!</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedHotel = {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
    };

    setHotels(
      hotels.map((item) => (item.id === Number(id) ? updatedHotel : item)),
    );

    alert("Hotel updated successfully!");
    navigate("/hotels");
  };

  return (
    <HotelForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isEditing={true}
    />
  );
};

export default EditHotel;
