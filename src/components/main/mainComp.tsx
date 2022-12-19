import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/home/Home";
import Work from "../../pages/work/work";
import Semsem from "../../pages/work/semsem/semsem";

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/work/semsem" element={<Semsem />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Main;
