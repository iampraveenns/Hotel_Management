import { useState, useEffect } from "react";

import "./HotelListing.css";
import hotels from "../data/hotels";
import HotelCard from "../components/hotel/HotelCard";

const HotelListing = () => {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const hotelsPerPage = 4;

  const filteredHotels = hotels.filter((hotel) => {
    const matchSearch =
      hotel.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLocaleLowerCase().includes(search.toLocaleLowerCase());

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "below2000" && hotel.price < 2000) ||
      (priceRange === "2000to5000" &&
        hotel.price >= 2000 &&
        hotel.price <= 5000) ||
      (priceRange === "above5000" && hotel.price > 5000);

    return matchSearch && matchesPrice;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === "low") return a.price - b.price;
    if (sortBy === "high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return a.id - b.id;
  });

  const totalPages = Math.ceil(sortedHotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;
  const currentHotels = sortedHotels.slice(
    startIndex,
    startIndex + hotelsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1)
  }, [search, priceRange, sortBy])

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
          <input
            type="text"
            placeholder="Enter Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <p>Price Range</p>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="below2000">Below ₹2,000</option>
            <option value="2000to5000">₹2,000 - ₹5,000</option>
            <option value="above5000">Above ₹5,000</option>
          </select>
        </aside>

        <div className="hotel-results">
          <div className="results-header">
            <h2>Available Hotels</h2>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="recommended">Sort by: Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="hotel-grid">
            {currentHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}

          {currentHotels.length === 0 && (
            <p className="empty-message">
              No hotels found. Try another search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
