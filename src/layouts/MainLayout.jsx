import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/common/Navbar";
import { setHotels as replaceHotels } from "../store/hotelSlice";

const MainLayout = () => {
  // const [hotels, setHotels] = useState(() => {
  //   const savedData = localStorage.getItem("hotels")
  //   return savedData? JSON.parse(savedData) : initialHotels
  // });

  const hotels = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }, [hotels]);

  const setHotels = (updateHotels) => {
    const newHotels =
      typeof updateHotels === "function" ? updateHotels(hotels) : updateHotels;

    dispatch(replaceHotels(newHotels));
  };

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
