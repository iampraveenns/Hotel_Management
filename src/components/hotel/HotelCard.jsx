import "./HotelCard.css";

import { Link } from "react-router-dom";

const HotelCard = ({ hotel, onDelete }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-card-info">
        <span className="hotel-category">{hotel.category}</span>

        <Link to={`/hotels/${hotel.id}`} className="hotel-name-link">
          {hotel.name}
        </Link>

        <p>{hotel.location}</p>

        <div className="hotel-card-footer">
          <span>⭐ {hotel.rating}</span>
          <strong>₹{hotel.price} / night</strong>
          <Link to={`/edit-hotel/${hotel.id}`} className="edit-hotel-btn">
            Edit Hotel
          </Link>

          <button
            className="delete-hotel-btn"
            onClick={() => onDelete(hotel.id)}
          >
            Delete Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
