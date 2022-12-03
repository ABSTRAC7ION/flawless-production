import React from "react";
import "./work.scss";
import Portfolio from "../../components/portfolio/portfolio";

function Work() {
  return (
    <div className=" bg-black">
      <div className="h-screen text-white workHome">
        <h1 className="text-left Dolce">Work</h1>
      </div>
      <Portfolio></Portfolio>
    </div>
  );
}
export default Work;
