import "./HotelCard.css";

import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const HotelCard = ({ hotel, onDelete, showAction = true }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-card-info">
        <span className="hotel-category">{hotel.category}</span>

        <Link to={`/hotels/${hotel.id}`} className="hotel-name-link">
          {hotel.name}
        </Link>

        <p>{hotel.location}</p>

        <p className="hotel-description">
          {hotel.description?.length > 100
            ? `${hotel.description.substring(0, 100)}`
            : hotel.description}
        </p>

        <div className="hotel-card-footer">
          <div className="hotel-card-meta">
            <span>⭐ {hotel.rating}</span>
            <strong>₹{hotel.price} / night</strong>
          </div>

          {showAction && (
            <div className="hotel-actions">
              <Link
                to={`/edit-hotel/${hotel.id}`}
                className="hotel-action-btn edit-hotel-btn"
                title="Edit Hotel"
                aria-label="Edit Hotel"
              >
                <FiEdit2 size={18} />
              </Link>

              <button
                className="hotel-action-btn delete-hotel-btn"
                onClick={() => onDelete(hotel.id)}
                title="Delete Hotel"
                aria-label="Delete Hotel"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
