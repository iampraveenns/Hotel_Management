import "./HotelListing.css";

import hotels from "../data/hotels";
import HotelCard from "../components/hotel/HotelCard";

const HotelListing = () => {
  return (
    <div className="hotel-listing">
      <div className="listing-header">
        <h1>Explore Hotels</h1>
        <p>Find the perfect stay for your next destination.</p>
      </div>

      <div className="listing-content">
        <aside className="hotel-sidebar">
          <h3>Filters</h3>
          <p>Location</p>
          <input type="text" placeholder="Enter Location" />

          <p>Price Range</p>
          <select>
            <option>All Prices</option>
            <option>Below ₹2,000</option>
            <option>₹2,000 - ₹5,000</option>
            <option>Above ₹5,000</option>
          </select>
        </aside>

        <div className="hotel-results">
          <div className="results-header">
            <h2>Available Hotels</h2>
            <select>
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="hotel-grid">
            {hotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
