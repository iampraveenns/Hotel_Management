import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import initialHotels from "../data/hotels";

const MainLayout = () => {
  const [hotels, setHotels] = useState(initialHotels);
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
