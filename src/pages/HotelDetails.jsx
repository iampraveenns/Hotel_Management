import { useOutletContext, useParams, Link } from "react-router-dom";

import "./HotelDetails.css"

const HotelDetails = () => {
  const { id } = useParams();
  const { hotels } = useOutletContext();
  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) return <h2>Hotel not found</h2>;
  return (
    <div className="hotel-details">
        <img src={hotel.image} alt={hotel.name} />

        <h1>{hotel.name}</h1>
        <p>{hotel.location}</p>
        <p>Category: {hotel.category}</p>
        <p>Ratings: ⭐ {hotel.rating}</p>
        <h3>₹{hotel.price}</h3>

        <Link to="/">Back to Hotels</Link>
    </div>
  )
};

export default HotelDetails;
