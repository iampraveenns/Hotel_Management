import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-card-info">
        <span className="hotel-category">{hotel.category}</span>

        <h3>{hotel.name}</h3>

        <p>{hotel.location}</p>

        <div className="hotel-card-footer">
            <span>⭐ {hotel.rating}</span>
            <strong>₹{hotel.price} / night</strong>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
