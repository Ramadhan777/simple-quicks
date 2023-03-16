import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Activity from "./Activity";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
