import "./HotelForm.css";

const HotelForm = ({ formData, handleChange, handleSubmit, isEditing }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      handleChange({
        target: {
          name: "image",
          value: reader.result,
        },
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="add-hotel-container">
      <form className="add-hotel-form" onSubmit={handleSubmit}>
        <h2>{isEditing ? "Edit Hotel" : "Add Hotel"}</h2>

        <label>Hotel Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter hotel name"
          value={formData.name || ""}
          onChange={handleChange}
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={formData.location || ""}
          onChange={handleChange}
          required
        />

        <label>Hotel Description</label>
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Enter hotel description"
          rows="4"
          required
        />

        <label>Latitude</label>
        <input
          type="number"
          name="latitude"
          value={formData.latitude ?? ""}
          onChange={handleChange}
          min="-90"
          max="90"
          step="any"
          placeholder="Enter latitude"
          required
        />

        <label>Longitude</label>
        <input
          type="number"
          name="longitude"
          value={formData.longitude ?? ""}
          onChange={handleChange}
          min="-180"
          max="180"
          step="any"
          placeholder="Enter longitude"
          required
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          min="1"
          required
        />

        <label>Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating || ""}
          onChange={handleChange}
          min="1"
          max="5"
          step="0.1"
          required
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category || "Luxury"}
          onChange={handleChange}
        >
          <option value="Luxury">Luxury</option>
          <option value="Resort">Resort</option>
          <option value="Premium">Premium</option>
          <option value="Budget">Budget</option>
        </select>

        <label>Uploade Hotel Image</label>
        <input
          type="file"
          accept="image/"
          onChange={handleImageUpload}
          required={!isEditing && !formData.image}
        />

        {formData.image && (
          <div className="image-preview">
            <p>Image Preview</p>

            <img src={formData.image} alt="Hotel Preview" />
          </div>
        )}

        <button type="submit">
          {isEditing ? "Update Hotel" : "Add Hotel"}
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
