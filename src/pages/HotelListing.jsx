import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import "./HotelListing.css";
import HotelCard from "../components/hotel/HotelCard";

const HotelListing = () => {
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const { hotels, setHotels } = useOutletContext();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");

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

    const matchesCategory = category === "All" || hotel.category === category;

    return matchSearch && matchesPrice && matchesCategory;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === "low") return a.price - b.price;
    if (sortBy === "high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return a.id - b.id;
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hotel?",
    );

    if (confirmDelete) {
      setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id));
    }

    alert("Hotel deleted successfully!")
  };

  const clearFilters = () => {
    setSearch("");
    setPriceRange("all");
    setCategory("All");
    setSortBy("recommended");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(sortedHotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;
  const currentHotels = sortedHotels.slice(
    startIndex,
    startIndex + hotelsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, priceRange, sortBy, category]);

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

          <p>Category</p>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Luxury">Luxury</option>
            <option value="Resort">Resort</option>
            <option value="Premium">Premium</option>
            <option value="Budget">Budget</option>
          </select>

          <button className="clear-filter-btn" onClick={clearFilters}>
            Clear All Filters
          </button>
        </aside>

        <div className="hotel-results">
          <div className="results-header">
            <h2>Available Hotels ({filteredHotels.length})</h2>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="recommended">Sort by: Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="hotel-grid">
            {currentHotels.length > 0 ? (
              currentHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className="empty-message">
                <h3>No Hotels Found</h3>
                <p>Try changing your search or filters.</p>
              </div>
            )}
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

          {/* {currentHotels.length === 0 && (
            <p className="empty-message">
              No hotels found. Try another search.
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
