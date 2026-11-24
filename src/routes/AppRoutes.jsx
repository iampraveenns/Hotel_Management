import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/hotels" element={<h1>Hotels Page</h1>} />
          <Route path="/add-hotels" element={<h1>Add Hotel Page</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
