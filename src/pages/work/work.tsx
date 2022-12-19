import React from "react";
import "./work.scss";
import Portfolio from "../../components/portfolio/portfolio";
import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";

const blackBox = {
  initial: {
    height: "100vh",
    width: "100%",
    top: 0,
    left: 0,
  },
  animate: {
    width: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    height: "100vh",
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function Work() {
  return (
    <div>
      <motion.div
        className="absolute z-50 w-full bg-orange-600 Dolce text-6xl text-white"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={blackBox}
      />
      <div className="Dolce px-10">
        <div className="h-screen text-black workHome">
          <h1 className="text-left Dolce">Work</h1>
        </div>
        <Portfolio></Portfolio>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Work;
