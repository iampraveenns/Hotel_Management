import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import HotelListing from "../pages/HotelListing";
import AddHotel from "../pages/AddHotel";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelListing />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
