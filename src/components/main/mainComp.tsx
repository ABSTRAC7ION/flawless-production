import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import Work from "../../pages/work/work";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/work" element={<Work />}></Route>
    </Routes>
  );
};

export default Main;
