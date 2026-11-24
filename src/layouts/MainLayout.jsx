import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import initialHotels from "../data/hotels";

const MainLayout = () => {
  const [hotels, setHotels] = useState(() => {
    const savedData = localStorage.getItem("hotels")
    return savedData? JSON.parse(savedData) : initialHotels
  });

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels))
  }, [hotels])
  
  return (
    <>
      <Navbar />
      <main>
        <Outlet context={{ hotels, setHotels }} />
      </main>
    </>
  );
};

export default MainLayout;
