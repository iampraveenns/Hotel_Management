import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

import "./Home.css";
import HotelCard from "../components/hotel/HotelCard";

const Home = () => {
  const { hotels } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/hotels?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p>Welcome To NamlaStay</p>

          <h1>
            Find Your Perfect
            <span>Stay Anywhere.</span>
          </h1>

          <p className="hero-description">
            Discover Comfortable hotels, explore amazing destinations and find
            the perfect place for your next stay.
          </p>

          <div className="hero-actions">
            <Link to="/hotels" className="hero-button">
              Explore Hotels
            </Link>

            <Link to="/add-hotel" className="hero-secondary">
              Add Your Hotel
            </Link>
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="search-box">
          <div className="search-input">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Enter Hotel name or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button onClick={handleSearch} className="search-button">
            Search Hotels
          </button>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p>Our Collection</p>
            <h2>Featured Hotels</h2>
          </div>

          <Link to="/hotels" className="view-all">
            View All Hotels →
          </Link>
        </div>

        <div className="featured-grid">
          {/* <div className="featured-card">
            <img
              src="https://images.pexels.com/photos/10603648/pexels-photo-10603648.jpeg"
              alt="Luxury hotel"
            />
            <div className="featured-info">
              <h3>Grand Palace Hotel</h3>
              <p>Coimbatore, TamilNadu</p>
              <div className="hotel-meta">
                <span>⭐ 4.8</span>
                <strong>₹4,500 / night</strong>
              </div>
            </div>
          </div>

          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
              alt="Luxury hotel"
            />
            <div className="featured-info">
              <h3>Ocean View Resort</h3>
              <p>Goa, India</p>
              <div className="hotel-meta">
                <span>⭐ 4.6</span>
                <strong>₹3,800 / night</strong>
              </div>
            </div>
          </div>

          <div className="featured-card">
            <img
              src="https://images.pexels.com/photos/34354407/pexels-photo-34354407.jpeg"
              alt="Premium hotel"
            />
            <div className="featured-info">
              <h3>Royal Comfort Stay</h3>
              <p>Chennai, Tamil Nadu</p>
              <div className="hotel-meta">
                <span>⭐ 4.7</span>
                <strong>₹3,200 / night</strong>
              </div>
            </div>
          </div> */}
          {hotels.slice(0, 3).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
